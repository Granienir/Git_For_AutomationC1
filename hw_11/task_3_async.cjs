async function userfetch() {
  const user = await fetch("https://jsonplaceholder.typicode.com/users/1");
  //return user.json();
  const userBoby = await user.json();
  //console.log(userBoby);
  return userBoby;
}

async function todosfetch() {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //return todos.json();
  const todosBoby = await todos.json();
  //console.log(todosBoby);
  return todosBoby;
}

// userfetch().then((user) => console.log(user));
// todosfetch().then((todo) => console.log(todo));

userfetch().then(console.log);
todosfetch().then(console.log);
