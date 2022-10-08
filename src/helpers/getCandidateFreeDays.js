export const getCandidateFreeDays = (allDays, workingHoursPerDay) => {
  const candidateFreeDays = [];
  for (const day in allDays) {
    for (const hour in workingHoursPerDay) {
      if (allDays[day] === workingHoursPerDay[hour]) {
        candidateFreeDays.push(day);
      }
    }
  }
  return candidateFreeDays;
};
