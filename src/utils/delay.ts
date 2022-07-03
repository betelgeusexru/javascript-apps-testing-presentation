export const delay = (callback: (args?: any) => any, ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback());
    }, ms);
  });
};
