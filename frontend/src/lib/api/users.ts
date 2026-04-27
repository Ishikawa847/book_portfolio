import client from "@/lib/api/client"

export const getUserProfile = (id: string) => {
    return client.get(`/users/${id}`)
}
