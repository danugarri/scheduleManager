import { modifiedGetRamdomSpecified } from '../helpers/getRamdomNumbersImproved';
import { nameFormatter } from '../helpers/nameFormatter';

export const useManegeSchedule = (
  ordinaryEmployeeHours,
  totalEmployees,
  allDays,
  freeDays,
  workingHoursPerDay,
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

  // function to recalculate the totalHours
  const recalculateHours = (generatedSchedule) => {
    let recalculatedSchedule = { ...generatedSchedule };
    ///////////////
    const avoidTen = () => {
      totalEmployees.forEach((employee) => {
        for (const day in employee) {
          for (const day2 in recalculatedSchedule) {
            if (day !== 'Employee' && day !== 'id' && day !== 'totalHours') {
              if (employee[day] + recalculatedSchedule[day2] === 10) {
                // possible combinations 3+7, 4+6,2+8, 5+5
                let leaveOut = [];
                if (employee[day] === 2) {
                  leaveOut = [8];
                }
                if (employee[day] === 3) {
                  leaveOut = [7];
                }
                if (employee[day] === 4) {
                  leaveOut = [6];
                }
                if (employee[day] === 5) {
                  leaveOut = [5];
                }
                if (employee[day] === 6) {
                  leaveOut = [4];
                }
                if (employee[day] === 7) {
                  leaveOut = [3];
                }
                if (employee[day] === 8) {
                  leaveOut = [2];
                }
                recalculatedSchedule[day2] = modifiedGetRamdomSpecified(leaveOut);
              }
            }
          }
        }
      });
    };
    /////////////
    totalEmployees.forEach((employee) => {
      for (let day in employee) {
        if (generatedSchedule[day] + employee[day] > workingHoursPerDay) {
          recalculatedSchedule = {
            ...recalculatedSchedule,
            [day]:
              generatedSchedule[day] -
              (generatedSchedule[day] + employee[day] - workingHoursPerDay),
          };
        }
        if (allDays[day] === workingHoursPerDay) {
          recalculatedSchedule = {
            ...recalculatedSchedule,
            [day]: 0,
          };
        }
        if (
          allDays[day] < workingHoursPerDay &&
          allDays[day] + generatedSchedule[day] > workingHoursPerDay
        ) {
          recalculatedSchedule = {
            ...recalculatedSchedule,
            [day]: workingHoursPerDay - allDays[day],
          };
        }
      }
    });
    avoidTen();
    console.log(recalculatedSchedule);
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
          generatedSchedule[day] = Math.floor(
            Math.random() * (maxOrdinaryHoursPerDay - minHoursPerDay + 1) + minHoursPerDay,
          );
        }

        totalHours += generatedSchedule[day];

        // console.log(totalHours);
      }
    }
    return generatedSchedule;
  };
  const scheduleManagement = (workersPerTurn, employeeName) => {
    let totalHoursInRecalculatedSchedule = 0;
    console.log(freeDays);
    // Generate new schedule
    setSchedule();
    if (totalEmployees.length > 0) {
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
          totalHoursInRecalculatedSchedule += generatedSchedule[day];
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

    return generatedSchedule;
  };
  return scheduleManagement;
};
