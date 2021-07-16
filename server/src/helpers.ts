export const sleep = () =>
  new Promise<void>(resolve => setTimeout(() => resolve(), 800 + 1000 * Math.random()));
