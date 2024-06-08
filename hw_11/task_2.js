// найкраще до чого прийшов. але думаю що тут біда. буду вдячний якщо
// поясните окремо.

const promiseTodo = new Promise((res, rej) => {
  res(
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
      res.json()
    )
  );
});

//promiseTodo.then((todos) => console.log(todos));

/////////////////////////////////////////////////////////////////
const promiseUser = new Promise((res, rej) => {
  res(
    fetch("https://jsonplaceholder.typicode.com/users/1").then((resUser) =>
      resUser.json()
    )
  );
});

//promiseUser.then((userJson) => console.log(userJson));

/////////////////////////////////////////////////////////////////

const promiseAll = Promise.all([promiseUser, promiseTodo]);

promiseAll.then((json) => console.log(json));

/////////////////////////////////////////////////////////////////

const promiseRace = Promise.race([promiseTodo, promiseUser]);

promiseRace.then((value) => console.log("first: ", value));

///////////////////////////////////////////////////////////////

// let todos = {};

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((json) => (todos = json))
//   .then((todos) => console.log(todos));

// let user = {};

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => res.json())
//   .then((json) => (user = json))
//   .then((user) => console.log(user));

// let userTodo = [user, todos];

/////////////////////////////////////////////////////////////////

// // fetch("https://jsonplaceholder.typicode.com/todos/1")
// //   // .then((todo) =>
// //   //   console.log(todo.status)
// //   // );
// //   .then((todo) => todo.json())
// //   .then((todoJson) => console.log(todoJson));

// // fetch("https://jsonplaceholder.typicode.com/users/1")
// //   // .then((todo) =>
// //   //   console.log(todo.status)
// //   // );
// //   .then((user) => user.json())
// //   .then((userJson) => console.log(userJson));
