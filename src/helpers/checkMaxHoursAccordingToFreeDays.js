export const checkMaxHoursAccordingToFreeDays = (allDays, workingHoursPerDay, freeDays) => {
  const maxHours = {};
  let maxHoursToDo = 0;
  for (const day in allDays) {
    // If the subtraction is less tahn or equals 9 (the max hours per day)
    if (workingHoursPerDay - allDays[day] >= 9) {
      Object.assign(maxHours, { [day]: 9 });
    }
    freeDays.forEach((freeDay) => {
      if ([day] === freeDay) {
        Object.assign(maxHours, { [day]: 0 });
      }
    });
    Object.assign(maxHours, { [day]: workingHoursPerDay - allDays[day] });
  }
  //   Return total sumation according to the previous
  for (const day in maxHours) {
    maxHoursToDo += maxHours[day];
  }
  return maxHoursToDo;
};
