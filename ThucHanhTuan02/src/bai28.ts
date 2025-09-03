
function simulateTask(id: number, delay: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task ${id} finished after ${delay} ms`);
    }, delay);
  });
}

export async function batchProcess() {
  console.log("Starting batch process...");

  const tasks = [
    simulateTask(1, 1000),
    simulateTask(2, 1500),
    simulateTask(3, 2000),
    simulateTask(4, 1200),
    simulateTask(5, 1800),
  ];

  const results = await Promise.all(tasks);

  results.forEach((r) => console.log(r));

  console.log("All tasks completed!");
  return results;
}
