import axios from "axios"

const api = axios.create({
  baseURL: "https://ai-powered-personal-finance-net-worth.onrender.com",
})

export default api