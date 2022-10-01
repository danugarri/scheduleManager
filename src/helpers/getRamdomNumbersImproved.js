export const getRamdomSpecified = (workingHoursPerDay) => {
  let leaveOut = [1, 10]; //Values to be left out
  let random = getRandomArbitrary(0, workingHoursPerDay);
  while (leaveOut.includes(random)) {
    random = getRandomArbitrary(0, workingHoursPerDay);
  }
  //   console.log(random);

  // return random integer number between min (included) and max (excluded)
};
function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

export const modifiedGetRamdomSpecified = (leaveOut) => {
  //Values to be left out
  let random = getRandomArbitrary(2, 9);
  while (leaveOut.includes(random)) {
    random = getRandomArbitrary(2, 9);
  }
};