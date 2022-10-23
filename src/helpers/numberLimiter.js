export const numberLimiter = (input) => {
  const hoursMaxLength = 2;
  if (typeof input === 'string') {
    input.replace(input, '');
  }
  return input.slice(0, hoursMaxLength);
};
