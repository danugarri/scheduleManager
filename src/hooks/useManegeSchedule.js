import { nameFormatter } from '../helpers/nameFormatter';

export const useManegeSchedule = () => {
  // const [monday, setMonday] = useState(0)
  // const
  const scheduleManagement = (ordinaryEmployeeHours, freeDays, workersPerTurn, employeeName) => {
    // let realWorkedHours = 0;
    // let employeeHours = 0;
    // const mockOrdinaryEmployeeHours = 37;
    // const mockFreeDays = ['thursday', 'sunday'];
    // const mockWorkersPerTurn = {
    //   cook: 1,
    //   local: 1,
    // };
    // const mockSchedule = {
    //   monday: 8,
    //   tuesday: 7,
    //   wednesday: 8,
    //   thursday: 0,
    //   friday: 7,
    //   saturday: 7,
    //   sunday: 0,
    // };

    // const workingHoursPerDay = {
    //   cook: 11.5,
    //   local: 10,
    // };
    // const totalWorkingHours = {
    //   cook: 80.5,
    //   local: 70,
    // };
    // Rules
    /* the min hours will depend on the employee ordinary hours. If it is less than
        20h it is better to set minHour to 1
      */
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
    setSchedule();
    // Adding the employeeName to the first position
    const nameFormatted = nameFormatter(employeeName);
    schedule = { Employee: nameFormatted, ...schedule, id: new Date().getMilliseconds() };

    return schedule;
  };
  return scheduleManagement;
};
