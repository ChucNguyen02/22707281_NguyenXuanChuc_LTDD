import { tripleAfter1Sec } from "./bai14";

export async function runParallel() {
  const promises = [
    tripleAfter1Sec(2), 
    tripleAfter1Sec(4),
    tripleAfter1Sec(6)
  ];

  const results = await Promise.all(promises);

  console.log("Parallel results:", results);
  return results;
}