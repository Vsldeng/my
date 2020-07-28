import axios from "axios";

export default axios.create({
  // baseURL: "http://182.61.133.4",
  baseURL: "http://182.61.133.4:8081",

  responseType: "json",
});
