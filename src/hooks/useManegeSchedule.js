import { nameFormatter } from '../helpers/nameFormatter';

export const useManegeSchedule = (ordinaryEmployeeHours, totalEmployees, allDays, freeDays) => {
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
    const totalPerDay = 11;

    totalEmployees.forEach((employee) => {
      for (let day in employee) {
        if (generatedSchedule[day] + employee[day] > 11) {
          recalculatedSchedule = {
            ...recalculatedSchedule,
            [day]: generatedSchedule[day] - (generatedSchedule[day] + employee[day] - totalPerDay),
          };
        }
        if (allDays[day] === 11) {
          recalculatedSchedule = {
            ...recalculatedSchedule,
            [day]: 0,
          };
        }
        if (allDays[day] < 11 && allDays[day] + generatedSchedule[day] > 11) {
          recalculatedSchedule = {
            ...recalculatedSchedule,
            [day]: totalPerDay - allDays[day],
          };
        }
      }
    });

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
        console.log(totalHoursInRecalculatedSchedule);
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
