import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

axiosInstance.interceptors.request.use(
  (request) => {
    console.log("Start of the Request", request);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

const res = await axiosInstance.get("/users/1");
console.log(res.data);
