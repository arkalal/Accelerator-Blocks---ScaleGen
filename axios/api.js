import axios from "axios";

const instance = axios.create({
  baseURL: "http://new-pgpt-pgpt.rag-portal.scalegen.ai/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
