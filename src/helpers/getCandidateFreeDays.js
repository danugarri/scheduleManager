export const getCandidateFreeDays = (allDays, workingHoursPerDay) => {
  const candidateFreeDays = [];
  for (const day in allDays) {
    if (allDays[day] === workingHoursPerDay[day]) {
      candidateFreeDays.push(day);
    }
  }
  return candidateFreeDays;
};
