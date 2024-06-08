// new Promise(
//   function(resolve, reject) {
//     ···
//     if (···) {
//         resolve(value); // success
//     } else {
//         reject(reason); // failure
//     }
// }
// );

// promise
// 	.then(value => { /* fulfillment */ }, error => { /* rejection */ })
// 	.catch(error => { /* rejection */ });
////////////////////////////////////////////////////////////////////
// const promiseA = Promise.resolve("Hello");
// const promiseB = Promise.resolve("Promise");
// const promiseC = Promise.resolve("All");
// const promisesCollection = Promise.all([promiseA, promiseB, promiseC]);

// promisesCollection.then((x) => x.toString().replaceAll(",", " ")).then(console.log);
/////////////////////////////////////////////////////////////////
// const a = Promise.resolve("Hello");
// const b = Promise.reject("Promise all rejected");
// const c = Promise.resolve("All");
// const promisesCollection = Promise.all([a, b, c]);

// promisesCollection
//   .then((x) => x.toString().replaceAll(",", " "))
//   .then(console.log)
//   .catch(console.log);
//////////////////////////////////////////////////////////////
// const promiseA = Promise.resolve("Hello");
// const promiseB = Promise.reject("Promise all rejected");
// const promiseC = Promise.resolve("allSettled");
// const promisesCollection = Promise.allSettled([promiseA, promiseB, promiseC]);

// promisesCollection.then(console.log);
///////////////////////////////////////////////////////////////
// const getDelay = (from, to) => Math.floor(Math.random() * (to - from + 1)) + from;

// const promiseA = new Promise((resolve) => setTimeout(resolve, getDelay(100, 500), "First"));
// const promiseB = new Promise((resolve, reject) => setTimeout(reject, getDelay(100, 500), "Second"));
// const promiseC = new Promise((resolve) => setTimeout(resolve, getDelay(100, 500), "Third"));

// Promise.race([promiseA, promiseB, promiseC])
//   .then((x) => console.log("Fulfilled: ", x))
//   .catch((x) => console.log("Rejected: ", x));
////////////////////////////////////////////////////////////
const getDelay = (from, to) => Math.floor(Math.random() * (to - from + 1)) + from;

const promiseA = new Promise((resolve) => setTimeout(resolve, getDelay(100, 500), "First"));
const promiseB = new Promise((resolve, reject) => setTimeout(reject, getDelay(100, 500), "Second"));
const promiseC = new Promise((resolve, reject) => setTimeout(reject, getDelay(100, 500), "Third"));

Promise.any([promiseA, promiseB, promiseC])
  .then((x) => console.log("Fulfilled: ", x))
  .catch((x) => console.log("Rejected: ", x));
