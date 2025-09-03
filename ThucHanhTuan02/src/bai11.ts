function delayedHello(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello Async");
    }, 2000);
  });
}

export async function getHelloAsync(): Promise<string> {
  const message = await delayedHello();
  return message;
}