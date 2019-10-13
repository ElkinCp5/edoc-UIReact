import axios from "axios";
import Constants from "./Constants";
const Api = axios.create({
  baseURL: Constants.URL_BASE,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json"

    /*  "access-control-allow-credentials": true,
    "access-control-allow-headers":
      "Origin,X-Requested-With,Content-Type,Accept",
    "access-control-allow-methods": "GET,PUT,POST,DELETE",
    "access-control-allow-origin": "*",
    connection: "keep-alive",
    "content-type": "application/json;charset=utf-8" */
  }
});
export default Api;
