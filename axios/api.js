import axios from "axios";

const instance = axios.create({
  baseURL: "https://new-dp-pgpt.prod-rag-portal.rag-scalegenai.com/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
