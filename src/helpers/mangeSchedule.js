export const scheduleManagement = (ordinaryEmployeeHours, freeDays, workersPerTurn) => {
  let realWorkedHours = 0;
  let employeeHours = 0;
  const mockOrdinaryEmployeeHours = 37;
  const mockFreeDays = ['thursday', 'sunday'];
  const mockWorkersPerTurn = {
    cook: 1,
    local: 1,
  };
  const mockSchedule = {
    monday: 8,
    tuesday: 7,
    wednesday: 8,
    thursday: 0,
    friday: 7,
    saturday: 7,
    sunday: 0,
  };

  const workingHoursPerDay = {
    cook: 11.5,
    local: 10,
  };
  const totalWorkingHours = {
    cook: 80.5,
    local: 70,
  };
  // Rules
  const minHoursPerDay = 2;
  const maxOrdinaryHoursPerDay = 9;
  //  Generate number of hours per day acording to rules
  let eachDay = [];
  const generateHours = () => {
    for (let i = 0; i < 7; i++) {
      eachDay = eachDay.concat(
        Math.floor(Math.random() * (maxOrdinaryHoursPerDay - minHoursPerDay) + minHoursPerDay),
      );
    }
  };
  generateHours();
  console.log(eachDay);
  let schedule = {
    monday: eachDay[0],
    tuesday: eachDay[1],
    wednesday: eachDay[2],
    thursday: eachDay[3],
    friday: eachDay[4],
    saturday: eachDay[5],
    sunday: eachDay[6],
  };

  const manageDays = () => {
    for (let day in schedule) {
      // Set 0 hours if is freeday
      const isFreeDay = freeDays.find((freeDay) => freeDay === day);
      if (isFreeDay) {
        schedule[day] = 0;
      }
      realWorkedHours += schedule[day];
    }
  };
  manageDays();
  console.log(realWorkedHours);
  //  Iterate until the workedHours match ordinaryEmployeeHours
  while (realWorkedHours !== Number(ordinaryEmployeeHours)) {
    console.log('is doing different hours than their contracy says');
    // console.log(realWorkedHours)
    eachDay = [];
    realWorkedHours = 0;
    generateHours();
    console.log(eachDay);
    schedule = {
      monday: eachDay[0],
      tuesday: eachDay[1],
      wednesday: eachDay[2],
      thursday: eachDay[3],
      friday: eachDay[4],
      saturday: eachDay[5],
      sunday: eachDay[6],
    };
    manageDays();
    console.log(realWorkedHours);
  }
  return schedule;
};
