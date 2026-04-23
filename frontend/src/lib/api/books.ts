import client from "@/lib/api/client"
import Cookies from "js-cookie"

export const getBooks = () => {
    return client.get("/books", {
        headers: {
            "access-token": Cookies.get("_access-token") || "",
            "client": Cookies.get("_client") || "",
            "uid": Cookies.get("_uid") || "",
        },
    })
}

export const searchBooks = (keyword: string) => {
    return client.get("/books/search", {
        params: { keyword }
    })
}

export const createBook = (params:{
    title: string
    author: string
    imageUrl: string
    googleBooksID: string
    }) => {
      return client.post("/books", params)
}