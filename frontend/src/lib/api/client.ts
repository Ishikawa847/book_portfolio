import applyCaseMiddleware from "axios-case-converter"
import axios from "axios"

const API_BASE = import.meta.env.VITE_API_BASE_URL
console.log("API_BASE:", API_BASE)

// applyCaseMiddleware:
// axiosで受け取ったレスポンスの値をスネークケース→キャメルケースに変換
// または送信するリクエストの値をキャメルケース→スネークケースに変換してくれるライブラリ

// ヘッダーに関してはケバブケースのままで良いので適用を無視するオプションを追加
const options = {
  ignoreHeaders: true 
}

const client = applyCaseMiddleware(axios.create({
  baseURL: `${API_BASE}/api/v1`
}), options)

export default client
