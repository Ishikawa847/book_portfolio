import client from "@/lib/api/client"

export const getUserProfile = (id: string) => {
    return client.get(`/users/${id}`)
}


export const updateUser = async (id: string,params: {
  name: string
  avatar?: File | null
}) => {
  const formData = new FormData()
  formData.append("name", params.name)

  if (params.avatar) {
    formData.append("avatar", params.avatar)
  }

  return client.put(`/users/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}