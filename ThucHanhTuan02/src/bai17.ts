// bai17.ts
import { tripleAfter1Sec } from "./bai14";

export async function runForAwait() {
  const promises = [
    tripleAfter1Sec(2), // Promise<number>
    tripleAfter1Sec(4),
    tripleAfter1Sec(6)
  ];

  console.log("Iterating over promises with for await...of");

  for await (const result of promises) {
    console.log("Result:", result);
  }
}