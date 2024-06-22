// import axios from 'axios'




// export const axiosinstance = axios.create({
//     headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${localStorage.getItem("token")}`
//     },
//     withCredentials: true // Include credentials for cross-origin requests
// });

import axios from "axios";

// Create Axios instance
const axiosinstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Include credentials for cross-origin requests
});

// Add an interceptor to dynamically set the Authorization header
axiosinstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosinstance;

