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
import { examplePromise } from './bai10';

examplePromise(false)
  .then(result => {
    console.log("Result:", result);
  })
  .catch(error => {
    console.error("Error:", error.message);
  })
  .finally(() => {
    console.log("Done");
  });

//bai11
