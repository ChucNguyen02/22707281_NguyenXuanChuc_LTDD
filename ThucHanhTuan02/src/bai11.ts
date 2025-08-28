export const sayHelloAsync = () : Promise<string> => {
    return new Promise(
        (resolve) => {
            setTimeout(() => {
                resolve("hello")
            }, 2000);
        }
    );
};