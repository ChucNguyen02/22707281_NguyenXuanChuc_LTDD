export function simulateTask(ms: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve(`Task finished in ${ms} ms`);
      } else {
        reject(new Error("Task failed due to random error"));
      }
    }, ms);
  });
}

export async function runTaskWithErrorHandling() {
  try {
    const result = await simulateTask(2000);
    console.log(result);
  } catch (error) {
    console.error("Error:", (error as Error).message);
  }
}