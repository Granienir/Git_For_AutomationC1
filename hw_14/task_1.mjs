import axios from "axios";

// const res = await axios.get("https://jsonplaceholder.typicode.com/users/10");
// console.log(res.data);

//створити 5 запитів за допомогою методів GET, POST
//обовязково має бути перевірка респонсу - response status, data на коректність знідно докементації по АПІ

// const res1 = await axios.get(
//   "https://jsonplaceholder.typicode.com/posts/1/comments"
// );
// console.log(res1.data);

// const res1 = await axios.get(
//   "https://jsonplaceholder.typicode.com/posts/1"
//   //{ params: { id: 1 } }
// );
// console.log(res1.data);

// const postUser = await axios.post(
//   "https://jsonplaceholder.typicode.com/users",
//   {
//     id: 11,
//     name: "Clementina DuBuque",
//     username: "Moriah.Stanton",
//     email: "Rey.Padberg@karina.biz",
//     address: {
//       street: "Kattie Turnpike",
//       suite: "Suite 198",
//       city: "Lebsackbury",
//       zipcode: "31428-2261",
//       geo: [Object],
//     },
//     phone: "024-648-3804",
//     website: "ambrose.net",
//     company: {
//       name: "Hoeger LLC",
//       catchPhrase: "Centralized empowering task-force",
//       bs: "target end-to-end models",
//     },
//   }
// );
// console.log(postUser.status);

// const postPost = await axios.post(
//   "https://jsonplaceholder.typicode.com/posts",
//   {
//     userId: 1,
//     title: "The new begining",
//     body: "The new try",
//   }
// );
// console.log(postPost.status);
// console.log(postPost.data);

const postAPost = await axios.post(
  "https://jsonplaceholder.typicode.com/posts/1/comments",
  {
    name: "The new Comment",
    email: "Hayden@althea.biz",
    body: "Perfect",
  }
);
console.log(postAPost.status);
console.log(postAPost.data);
