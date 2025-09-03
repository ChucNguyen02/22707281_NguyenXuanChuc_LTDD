
function simulateTask(id: number, delay: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task ${id} finished after ${delay} ms`);
    }, delay);
  });
}

export async function queueProcess() {
  console.log("Starting queue process...");

  const tasks = [
    () => simulateTask(1, 1000),
    () => simulateTask(2, 1500),
    () => simulateTask(3, 1200),
    () => simulateTask(4, 1800),
    () => simulateTask(5, 800),
  ];

  const results: string[] = [];

  for (const task of tasks) {
    const result = await task();
    console.log(result);
    results.push(result);
  }

  console.log("All tasks in queue completed!");
  return results;
}
