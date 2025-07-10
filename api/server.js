import axios from "axios";

const server = axios.create({
  baseURL: "https://backende-gold.vercel.app",
});

export default server;
