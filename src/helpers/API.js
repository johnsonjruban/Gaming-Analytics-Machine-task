import axios from "axios";
export function authHeader() {
  let user_access_token = '';
  return axios.create({
    baseURL: "http://localhost:3000/",
    responseType: "blob",
    headers: {
      user_access_token
    }
  });
}