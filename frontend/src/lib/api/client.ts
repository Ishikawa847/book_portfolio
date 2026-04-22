import applyCaseMiddleware from "axios-case-converter"
import axios from "axios"
import Cookies from "js-cookie"

const API_BASE = import.meta.env.VITE_API_BASE_URL

const options = {
  ignoreHeaders: true
}

const axiosClient = axios.create({
  baseURL: `${API_BASE}/api/v1`,
  withCredentials: true
})

axiosClient.interceptors.request.use((config) => {
  config.headers["access-token"] = Cookies.get("_access_token")
  config.headers["client"] = Cookies.get("_client")
  config.headers["uid"] = Cookies.get("_uid")

  return config
})

const client = applyCaseMiddleware(axiosClient, options)

export default client