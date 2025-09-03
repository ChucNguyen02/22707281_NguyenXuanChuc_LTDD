import { tripleAfter1Sec } from "./bai14";

export async function runSequential() {
  const result1 = await tripleAfter1Sec(2); // sau 1 giây -> 6
  console.log("Result 1:", result1);

  const result2 = await tripleAfter1Sec(4); // sau 1 giây -> 12
  console.log("Result 2:", result2);

  const result3 = await tripleAfter1Sec(6); // sau 1 giây -> 18
  console.log("Result 3:", result3);

  return [result1, result2, result3];
}