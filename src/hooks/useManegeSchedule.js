import { nameFormatter } from '../helpers/nameFormatter';

export const useManegeSchedule = (totalEmployees, allDays) => {
  // function to recalculate the totalHours
  const recalculateHours = (schedule) => {
    let recalculatedSchedule = { ...schedule };
    const totalPerDay = 11;

    totalEmployees.forEach((employee) => {
      for (let day in employee) {
        if (schedule[day] + employee[day] > 11) {
          recalculatedSchedule = {
            ...recalculatedSchedule,
            [day]: schedule[day] - (schedule[day] + employee[day] - totalPerDay),
          };
        }
        if (allDays[day] === 11) {
          recalculatedSchedule = {
            ...recalculatedSchedule,
            [day]: 0,
          };
        }
        if (allDays[day] < 11 && allDays[day] + schedule[day] > 11) {
          recalculatedSchedule = {
            ...recalculatedSchedule,
            [day]: totalPerDay - allDays[day],
          };
        }
      }
    });
    return recalculatedSchedule;
  };
  const scheduleManagement = (ordinaryEmployeeHours, freeDays, workersPerTurn, employeeName) => {
    const minHoursPerDay = 2;
    const maxOrdinaryHoursPerDay = 9;
    let schedule = {
      monday: 0,
      tuesday: 0,
      wednesday: 0,
      thursday: 0,
      friday: 0,
      saturday: 0,
      sunday: 0,
    };

    console.log(freeDays);
    const setSchedule = () => {
      let totalHours;
      while (Number(totalHours) !== Number(ordinaryEmployeeHours)) {
        console.log('is doing different hours than their contract says');
        totalHours = 0;
        for (let day in schedule) {
          const isFreeDay = freeDays.find((freeDay) => freeDay === day);
          if (!isFreeDay) {
            schedule[day] = Math.floor(
              Math.random() * (maxOrdinaryHoursPerDay - minHoursPerDay + 1) + minHoursPerDay,
            );
          }

          totalHours += schedule[day];

          console.log(totalHours);
        }
      }
    };
    // Generate new schedule
    setSchedule();
    if (totalEmployees.length > 0) {
      // Check new schedule
      schedule = recalculateHours(schedule);
    }
    // Adding the employeeName to the first position
    const nameFormatted = nameFormatter(employeeName);
    schedule = { Employee: nameFormatted, ...schedule, id: new Date().getMilliseconds() };

    return schedule;
  };
  return scheduleManagement;
};
