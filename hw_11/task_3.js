const user = await fetch("https://jsonplaceholder.typicode.com/users/1");
const userBoby = await user.json();
//console.log(userBoby);

const todos = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const todosBoby = await todos.json();
//console.log(todosBoby);

//const userAndTodos = [userBoby.name, todosBoby.title];
const userAndTodos = [userBoby, todosBoby];
console.log(userAndTodos);
