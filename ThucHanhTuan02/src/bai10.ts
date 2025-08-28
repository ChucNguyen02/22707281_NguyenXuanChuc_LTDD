export const examplePromise = (shouldFail: boolean): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          reject(new Error("Failed!"));
        } else {
          resolve("Success!");
        }
      }, 1000);
    });
  };