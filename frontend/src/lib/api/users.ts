import client from "@/lib/api/client"
import Cookies from "js-cookie"

export const getUserProfile = (id: string) => {
    return client.get(`/users/${id}`)
}
