export const sayHelloAsync = () : Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
};