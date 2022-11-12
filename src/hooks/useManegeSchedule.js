import { getRandomSpecifiedWIthHalf } from '../helpers/getRandomNumbersImproved';
import { getTotalSumation } from '../helpers/getTotalSumation';
import { nameFormatter } from '../helpers/nameFormatter';

export const useManegeSchedule = (
  ordinaryEmployeeHours,
  totalEmployees,
  allDays,
  freeDays,
  workingHoursPerDay,
  localWorkingHours,
) => {
  const minHoursPerDay = 2;
  const maxOrdinaryHoursPerDay = 9;
  let generatedSchedule = {
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
    sunday: 0,
  };
  // calculate Total sumation in a week
  const totalSumation = getTotalSumation(allDays);
  const leftWorkingHours = localWorkingHours - totalSumation;
  // function to recalculate the totalHours
  const recalculateHours = (generatedSchedule) => {
    let recalculatedSchedule = { ...generatedSchedule };
    ///////////////
    const avoidTen = () => {
      // Having 2 or more employees registered

      const employeeToReview = totalEmployees[totalEmployees.length - 1];
      for (const day2 in employeeToReview) {
        if (day2 !== 'Employee' && day2 !== 'id' && day2 !== 'totalHours') {
          const recalculatedDay = recalculatedSchedule[day2];
          const checkSumation = allDays[day2] + recalculatedDay;
          const accumulatedSumation = allDays[day2];
          const exclude = [0.5, 1, 1.5];
          let leaveOut = [];
          let hourMustBeAvoided = false;

          // get the hour to be avoided
          hourMustBeAvoided =
            checkSumation === workingHoursPerDay[day2] - 1 ||
            checkSumation === workingHoursPerDay[day2] - 1.5 ||
            checkSumation === workingHoursPerDay[day2] - 0.5;

          if (hourMustBeAvoided) {
            // possible combinations 3+7, 4+6,2+8, 5+5
            for (let i = 0; i <= 9; i++) {
              if (recalculatedDay === i || recalculatedDay === i + 0.5) {
                leaveOut = [recalculatedDay];
              }
            }
            // Leaving out
            if (checkSumation === workingHoursPerDay[day2] - 1) {
              leaveOut.push(recalculatedDay + 0.5, recalculatedDay - 0.5);
            }
            if (checkSumation === workingHoursPerDay[day2] - 1.5) {
              leaveOut.push(recalculatedDay + 1, recalculatedDay + 0.5);
            }
            if (checkSumation === workingHoursPerDay[day2] - 0.5) {
              leaveOut.push(recalculatedDay - 0.5, recalculatedDay - 1);
            }
            let newValue = getRandomSpecifiedWIthHalf(
              leaveOut,
              minHoursPerDay,
              maxOrdinaryHoursPerDay,
            );

            if (accumulatedSumation + newValue > workingHoursPerDay[day2]) {
              for (let i = recalculatedDay + 2; i <= maxOrdinaryHoursPerDay; i++) {
                exclude.push(i);
                exclude.push(i + 0.5);
              }
              newValue = getRandomSpecifiedWIthHalf(leaveOut.concat(exclude));
            }

            recalculatedSchedule[day2] = newValue;
          }
        }
      }
    };
    /////////////
    totalEmployees.forEach((employee) => {
      for (let day in employee) {
        for (const hour in workingHoursPerDay) {
          if (generatedSchedule[day] + employee[day] > workingHoursPerDay[hour]) {
            recalculatedSchedule = {
              ...recalculatedSchedule,
              [day]:
                generatedSchedule[day] -
                (generatedSchedule[day] + employee[day] - workingHoursPerDay[hour]),
            };
          }
          if (allDays[day] === workingHoursPerDay[hour]) {
            recalculatedSchedule = {
              ...recalculatedSchedule,
              [day]: 0,
            };
          }
          if (
            allDays[day] < workingHoursPerDay[hour] &&
            allDays[day] + generatedSchedule[day] > workingHoursPerDay[hour]
          ) {
            recalculatedSchedule = {
              ...recalculatedSchedule,
              [day]: workingHoursPerDay[hour] - allDays[day],
            };
          }
        }
      }
    });
    avoidTen();
    return recalculatedSchedule;
  };

  const setSchedule = () => {
    let totalHours;
    while (Number(totalHours) !== Number(ordinaryEmployeeHours)) {
      // console.log('is doing different hours than their contract says');
      totalHours = 0;
      for (let day in generatedSchedule) {
        const isFreeDay = freeDays.find((freeDay) => freeDay === day);
        if (!isFreeDay) {
          // it avoids problems at the first iteration
          if (ordinaryEmployeeHours <= 25) {
            generatedSchedule[day] = getRandomSpecifiedWIthHalf(
              [0.5, 1, 1.5],
              0,
              maxOrdinaryHoursPerDay,
            );
          } else {
            generatedSchedule[day] = getRandomSpecifiedWIthHalf(
              [0.5, 1, 1.5],
              minHoursPerDay,
              maxOrdinaryHoursPerDay,
            );
          }
        }

        totalHours += generatedSchedule[day];
      }
    }

    return generatedSchedule;
  };
  const scheduleManagement = (workersPerTurn, employeeName) => {
    let totalHoursInRecalculatedSchedule = 0;
    console.log(freeDays);
    if (totalEmployees.length === 0) {
      setSchedule();
    }
    // Generate new schedule
    if (totalEmployees.length > 0) {
      const finalResult = leftWorkingHours === Number(ordinaryEmployeeHours);
      if (finalResult) {
        for (const day in allDays) {
          if (workingHoursPerDay[day] - allDays[day] <= 9) {
            generatedSchedule = {
              ...generatedSchedule,
              [day]: workingHoursPerDay[day] - allDays[day],
            };
            if (workingHoursPerDay[day] - allDays[day] === 0) {
              generatedSchedule = {
                ...generatedSchedule,
                [day]: 0,
              };
            }
          }
        }
      } else {
        setSchedule();
        // Check new schedule
        generatedSchedule = recalculateHours(generatedSchedule);
        for (let day in generatedSchedule) {
          totalHoursInRecalculatedSchedule += generatedSchedule[day];
        }
        while (Number(totalHoursInRecalculatedSchedule) !== Number(ordinaryEmployeeHours)) {
          totalHoursInRecalculatedSchedule = 0;
          console.log('loop');
          const recalculatedSchedule = setSchedule();
          generatedSchedule = recalculateHours(recalculatedSchedule);
          for (let day in generatedSchedule) {
            if (day !== 'Employee' && day !== 'id') {
              totalHoursInRecalculatedSchedule += Number(generatedSchedule[day]);
            }
          }
        }
      }
    }

    // Adding the employeeName to the first position
    const nameFormatted = nameFormatter(employeeName);
    generatedSchedule = {
      Employee: nameFormatted,
      ...generatedSchedule,
      id: new Date().getMilliseconds(),
    };
    console.log(generatedSchedule);
    let sumation = 0;
    for (const day in generatedSchedule) {
      if (day !== 'Employee' && day !== 'id') {
        sumation += Number(generatedSchedule[day]);
      }
    }
    if (sumation > 0)
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(generatedSchedule), 2000);
      });
  };
  return scheduleManagement;
};
