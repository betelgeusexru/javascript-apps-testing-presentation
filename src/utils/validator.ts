export const validator = (value: number) => {
  if (value < 0 || value > 100) {
    return false;
  }

  return true;
};
