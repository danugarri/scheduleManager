import { checkMaxHoursAccordingToFreeDays } from '../helpers/checkMaxHoursAccordingToFreeDays';

export const useControlFinalFreeDays = (
  allDays,
  workingHoursPerDay,
  freeDays,
  setOpenControlFinalFreeDays,
  ordinaryEmployeeHours,
) => {
  const controlFinalFreeDays = () => {
    let checkFinal = false;
    const candidateFreeDays = [];
    let checkedFinalFreeDays = true;
    const maxHoursToDo = checkMaxHoursAccordingToFreeDays(allDays, workingHoursPerDay, freeDays);
    const isInCorrectedMaxHours =
      freeDays.length > 0 && maxHoursToDo < Number(ordinaryEmployeeHours);
    for (const day in allDays) {
      if (allDays[day] === workingHoursPerDay[day]) {
        checkFinal = true;
        candidateFreeDays.push(day);
      }
    }
    if (checkFinal) {
      freeDays.forEach((day1) => {
        const exists = candidateFreeDays.find((day2) => day2 === day1);
        if (!exists && isInCorrectedMaxHours) {
          console.log('los días candidatos son' + candidateFreeDays);
          checkedFinalFreeDays = false;
          // launch modal
          setOpenControlFinalFreeDays(true);
        }
      });
    }
    return checkedFinalFreeDays;
  };
  return controlFinalFreeDays;
};
