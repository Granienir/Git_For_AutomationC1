import axios from "axios";

// const res = await axios.get("https://swapi.dev/api/people/1");
// console.log(res.data);

// const postRes = await axios.post("https://api.restful-api.dev/objects", {
//   name: "Apple MacBook Pro 16",
//   data: {
//     year: 2019,
//     price: 1849.99,
//     "CPU model": "Intel Core i9",
//     "Hard disk size": "1 TB",
//   },
// });

// console.log(postRes.status);
// console.log(postRes.data);

const ID = "ff8081818feaa6c4018ffe214bb219c0";

// const res = await axios.get("https://api.restful-api.dev/objects", {
//   params: { id: ID },
// });
// console.log(res.data);

const axiosInstance = axios.create({
  baseURL: "https://api.restful-api.dev",
});

const res = await axiosInstance.get("/objects", {
  params: { id: ID },
});
console.log(res.data);
