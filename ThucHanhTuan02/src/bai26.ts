
export async function waitFiveSeconds(): Promise<void> {
  console.log("Waiting for 5 seconds...");

  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });

  console.log("5 seconds have passed!");
}
