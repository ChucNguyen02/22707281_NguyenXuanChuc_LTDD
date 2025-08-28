export const getRandomNumber = () : Promise<number> => {
    return new Promise((resolve, reject) => {
      const num = Math.random();
  
      setTimeout(() => {
        if (num < 0.1) {
          reject(new Error("Number too small!"));
        } else {
          resolve(num);
        }
      }, 1000);
    });
};
  