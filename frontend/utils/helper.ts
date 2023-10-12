export const debounce = <F extends (...args: any[]) => any>(func: F, delay: number) => {
  let timer: NodeJS.Timeout;

  return function (this: any, ...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};
