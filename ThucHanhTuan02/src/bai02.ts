export const getNumberAsync = () : Promise<number> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
};