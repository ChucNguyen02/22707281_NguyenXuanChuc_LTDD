export const filterEvenNumbers = (arr: number[]): Promise<number[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = arr.filter(num => num % 2 === 0);
        resolve(evenNumbers);
      }, 1000);
    });
  };