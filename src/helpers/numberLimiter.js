export const numberLimiter = (input) => {
  const hoursMaxLength = 4;
  return input.slice(0, hoursMaxLength);
};
