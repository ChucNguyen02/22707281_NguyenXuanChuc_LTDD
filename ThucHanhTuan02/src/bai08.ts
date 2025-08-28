export const square = (x: number): Promise<number> => {
    return Promise.resolve(x * x);
  };
  
  export const double = (x: number): Promise<number> => {
    return Promise.resolve(x * 2);
  };
  
  export const addFive = (x: number): Promise<number> => {
    return Promise.resolve(x + 5);
  };