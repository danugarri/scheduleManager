import { useEffect, useState } from 'react';

export const useMaxHoursAccordingToFreeDays = (maxHoursToDo, ordinaryEmployeeHours) => {
  const [maxHours, setMaxHours] = useState(false);
  useEffect(() => {
    if (maxHoursToDo < ordinaryEmployeeHours) {
      setMaxHours(true);
    }
  }, [ordinaryEmployeeHours, maxHoursToDo]);
  return maxHours;
};
