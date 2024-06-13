const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

axiosInstance.interceptors.request.use(
  (request) => {
    console.log(
      "Start of the Request",
      "Method -",
      request.method,
      "URL -",
      request.url
    );
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// async function getAxios() {
//   const res = await axiosInstance.get("/todos/1");
//   console.log(res.data);
// }

// getAxios();

test("Get a todos - check a status", async () => {
  const getTodos = await axiosInstance.get("/todos/1");
  expect(getTodos.status).toBe(200);
});

test("Get a post - check a body", async () => {
  const getPost = await axiosInstance.get("posts/1");
  expect(getPost.data).toStrictEqual({
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\n" +
      "suscipit recusandae consequuntur expedita et cum\n" +
      "reprehenderit molestiae ut ut quas totam\n" +
      "nostrum rerum est autem sunt rem eveniet architecto",
  });
});

test("get a first comments", async () => {
  const getComment = await axiosInstance.get("/posts/1/comments");
  expect(getComment.data[0]).toStrictEqual({
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body:
      "laudantium enim quasi est quidem magnam voluptate ipsam eos\n" +
      "tempora quo necessitatibus\n" +
      "dolor quam autem quasi\n" +
      "reiciendis et nam sapiente accusantium",
  });
});

test("Post a new post", async () => {
  const postAPost = await axiosInstance.post("/posts", {
    userId: 1,
    title: "The new Begining",
    body: "New try",
  });
  expect(postAPost.status).toBe(201);
  expect(postAPost.data).toStrictEqual({
    userId: 1,
    title: "The new Begining",
    body: "New try",
    id: 101,
  });
});

test("Post a new commet", async () => {
  const postAComment = await axiosInstance.post("/posts/1/comments", {
    name: "The new Comment",
    email: "Hayden@althea.biz",
    body: "Perfect",
  });
  expect(postAComment.status).toBe(201);
  expect(postAComment.data).toStrictEqual({
    name: "The new Comment",
    email: "Hayden@althea.biz",
    body: "Perfect",
    id: 501,
    postId: "1",
  });
});
