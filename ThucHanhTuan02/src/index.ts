// import {sayHelloAsync} from './bai01';
// import {getNumberAsync} from './bai02';
// import { getErrorAsync } from './bai03';
// import { getRandomNumber } from './bai04';

// //bai1
// console.log("Bai01:");
// console.log("Waiting for async message...");

// sayHelloAsync()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// //bai02
// console.log("Bai02:");
// console.log("Getting number...");

// getNumberAsync()
//   .then((number) => {
//     console.log("Received:", number);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// //bai03
// console.log("Bai03:");

// getErrorAsync()
//   .then(() => {
    
//   })
//   .catch((error) => {
//     console.error("Caught error:", error);
//   });

//bai04
// console.log("Bai04:");


// console.log("Getting random number...");

// getRandomNumber()
//   .then((num) => {
//     console.log("Random number received:", num);
//   })
//   .catch((error) => {
//     console.error("Error occurred:", error.message);
//   });

//bai05
// console.log("Bai05:");
// import { simulateTask } from './bai05';

// simulateTask(2000)
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

//// bai06
// console.log("Bai06:");
// import { simulateTask } from './bai06';

// const task1 = simulateTask(2000);
// const task2 = simulateTask(1000);
// const task3 = simulateTask(1500);

// Promise.all([task1, task2, task3])
//   .then((results) => {
//     console.log("All tasks completed:");
//     results.forEach((result, index) => {
//       console.log(`Task ${index + 1}: ${result}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Error in tasks:", error);
//   });


// //bai07
// console.log("Bai07:");
// import { simulateTask } from './bai07';

// const task1 = simulateTask(2000);
// const task2 = simulateTask(1000);
// const task3 = simulateTask(1500);

// Promise.race([task1, task2, task3])
//   .then((firstResult) => {
//     console.log("First task finished:", firstResult);
//   })
//   .catch((error) => {
//     console.error("Error in race:", error);
//   });

//bai08
// console.log("Bai08:");
// import { square, double, addFive } from './bai08';

// square(2)
//   .then(double)
//   .then(addFive)
//   .then(result => {
//     console.log("Final result:", result);
//   })
//   .catch(err => {
//     console.error("Error:", err);
//   });

//bai09
// console.log("Bai09:");
// import { filterEvenNumbers } from './bai09';

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log("Filtering even numbers...");

// filterEvenNumbers(numbers)
//   .then(evens => {
//     console.log("Even numbers:", evens);
//   })
//   .catch(err => {
//     console.error("Error:", err);
//   });

//bai10
// import { examplePromise } from './bai10';

// examplePromise(false)
//   .then(result => {
//     console.log("Result:", result);
//   })
//   .catch(error => {
//     console.error("Error:", error.message);
//   })
//   .finally(() => {
//     console.log("Done");
//   });

//bai11
// import { getHelloAsync } from "./bai11";

// async function demo() {
//   console.log("Waiting for message...");
//   const msg = await getHelloAsync();
//   console.log(msg);
// }

// demo();

//bai12
// import { runTask } from "./bai12";

// async function demo() {
//   console.log("Starting task...");
//   await runTask();
//   console.log("Done!");
// }

// demo();

//bai13
// import { runTaskWithErrorHandling } from "./bai13";

// async function demo() {
//   console.log("Starting task...");
//   await runTaskWithErrorHandling();
//   console.log("Done!");
// }

// demo();

//bai14
// import { tripleAfter1Sec } from "./bai14";

// async function demo() {
//   console.log("Calculating...");
//   const result = await tripleAfter1Sec(5);
//   console.log("Result:", result); // In ra 15 sau 1 giây
// }

// demo();

//bai15
// import { runSequential } from "./bai15";

// async function demo() {
//   console.log("Starting sequential tasks...");
//   const results = await runSequential();
//   console.log("All results:", results);
// }

// demo();

//bai16
// import { runParallel } from "./bai16";

// async function demo() {
//   console.log("Starting parallel tasks...");
//   const results = await runParallel();
//   console.log("All done:", results);
// }

// demo();

//bai17
// import { runForAwait } from "./bai17";

// async function demo() {
//   await runForAwait();
//   console.log("Done iterating!");
// }

// demo();


//bai18
// import { fetchUser } from "./bai18";

// async function demo() {
//   console.log("Fetching user...");
//   const user = await fetchUser(1);
//   console.log("User fetched:", user);
// }

// demo();

//bai19
// import { fetchUsers } from "./bai19";

// async function demo() {
//   console.log("Fetching users...");
//   const users = await fetchUsers([1, 2, 3, 4]);
//   console.log("Users fetched:", users);
// }

// demo();

// //bai20
// import { fetchUserWithTimeout } from "./bai20";

// async function demo() {
//   console.log("Fetching user with timeout...");
//   try {
//     const user = await fetchUserWithTimeout(1);
//     console.log("User fetched:", user);
//   } catch (error) {
//     console.error("Error:", (error as Error).message);
//   }
// }

// demo();

// //bai21
// import { fetchTodo } from "./bai21";

// async function demo() {
//   console.log("Fetching todo...");
//   try {
//     const todo = await fetchTodo();
//     console.log("Todo fetched:", todo);
//   } catch (error) {
//     console.error("Error:", (error as Error).message);
//   }
// }

// demo();

// //bai22
// import { fetchTodos } from "./bai22";

// async function demo() {
//   console.log("Fetching multiple todos...");
//   try {
//     const todos = await fetchTodos([1, 2, 3]);
//     console.log("All fetched:", todos.length, "todos");
//   } catch (error) {
//     console.error("Error:", (error as Error).message);
//   }
// }

// demo();

// //bai23
// import { fetchCompletedTodos } from "./bai23";

// async function demo() {
//   console.log("Fetching completed todos...");
//   try {
//     const completedTodos = await fetchCompletedTodos();
//     console.log("Completed todos:", completedTodos.slice(0, 5)); // In 5 cái đầu
//     console.log("Total completed:", completedTodos.length);
//   } catch (error) {
//     console.error("Error:", (error as Error).message);
//   }
// }

// demo();

// //bai24
// import { postData } from "./bai24";

// async function demo() {
//   console.log("Sending POST request...");
//   try {
//     const result = await postData();
//     console.log("Response from API:", result);
//   } catch (error) {
//     console.error("Error:", (error as Error).message);
//   }
// }

// demo();

// //bai25
// import { downloadFile } from "./bai25";

// async function demo() {
//   await downloadFile("example.zip");
// }

// demo();

// //bai26
// import { waitFiveSeconds } from "./bai26";

// async function demo() {
//   await waitFiveSeconds();
// }

// demo();

// //bai27
// import { fetchWithRetry } from "./bai27";

// async function demo() {
//   try {
//     const data = await fetchWithRetry(
//       "https://jsonplaceholder.typicode.com/todos/1",
//       3
//     );
//     console.log("Data fetched:", data);
//   } catch (error) {
//     console.error("Final Error:", (error as Error).message);
//   }
// }

// demo();

// //bai28
// import { batchProcess } from "./bai28";

// async function demo() {
//   await batchProcess();
// }

// demo();

// //bai29
// import { queueProcess } from "./bai29";

// async function demo() {
//   await queueProcess();
// }

// demo();

// //bai30
import { handleMultipleAPIs } from "./bai30";

async function demo() {
  await handleMultipleAPIs();
}

demo();


