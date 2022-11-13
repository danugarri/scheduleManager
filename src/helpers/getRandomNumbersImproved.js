export const getRandomSpecified = (workingHoursPerDay) => {
  let leaveOut = [1, 10]; //Values to be left out
  let random = getRandomArbitrary(0, workingHoursPerDay);
  while (leaveOut.includes(random)) {
    random = getRandomArbitrary(0, workingHoursPerDay);
  }
  //   console.log(random);

  // return random integer number between min (included) and max (excluded)
};
function getRandomArbitrary(minHoursPerDay, maxOrdinaryHoursPerDay) {
  return Math.floor(Math.random() * (maxOrdinaryHoursPerDay - minHoursPerDay + 1) + minHoursPerDay);
}

export const modifiedGetRandomSpecified = (leaveOut, minHoursPerDay, maxOrdinaryHoursPerDay) => {
  //Values to be left out
  let random = getRandomArbitrary(minHoursPerDay, maxOrdinaryHoursPerDay);
  while (leaveOut.includes(random)) {
    random = getRandomArbitrary(2, 9);
  }
  return random;
};
//  Ramdom numbers sometimes integer sometimes double
// ej 6, 7, 9, 4.5, 3, 2.5
export const getNew = (minHoursPerDay, maxOrdinaryHoursPerDay) => {
  const addHalf = Math.floor(Math.random() * 2);
  let result1 = Math.floor(
    Math.random() * (maxOrdinaryHoursPerDay - minHoursPerDay + 1) + minHoursPerDay,
  );
  if (addHalf === 1 && result1 !== 9) {
    console.log(result1 + 0.5);
    return result1 + 0.5;
  }
  return result1;
};
// ramdom with leaving out
export const getRandomSpecifiedWIthHalf = (leaveOut, minHoursPerDay, maxOrdinaryHoursPerDay) => {
  //Values to be left out
  let random = getNew(minHoursPerDay, maxOrdinaryHoursPerDay);
  while (leaveOut.includes(random)) {
    random = getRandomArbitrary(2, 9);
  }
  return random;
};
