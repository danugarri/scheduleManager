export const checkMaxHoursAccordingToFreeDays = (allDays, workingHoursPerDay, freeDays) => {
  let maxHours = {};
  const freeDaysObject = {};
  let maxHoursToDo = 0;
  if (freeDays.length > 0) {
    freeDays.forEach((freeDay) => {
      for (const day in allDays) {
        // If the subtraction is less tahn or equals 9 (the max hours per day)
        if (workingHoursPerDay[day] - allDays[day] >= 9) {
          maxHours = { ...maxHours, [day]: 9 };
        }
        if (workingHoursPerDay[day] - allDays[day] < 9) {
          maxHours = { ...maxHours, [day]: workingHoursPerDay[day] - allDays[day] };
        }

        if (day === freeDay) {
          Object.assign(freeDaysObject, { [day]: 0 });
        }
      }
    });
  }
  Object.assign(maxHours, freeDaysObject);
  //   Return total sumation according to the previous
  for (const day in maxHours) {
    maxHoursToDo += maxHours[day];
  }
  return maxHoursToDo;
};
