export function simulateTask(ms: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task finished in ${ms} ms`);
    }, ms);
  });
}

export async function runTask() {
  const result = await simulateTask(2000);
  console.log(result);
}