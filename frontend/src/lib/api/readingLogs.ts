import client from "@/lib/api/client"

export const createReadingLog = (
    bookId: string,
    params: {
        memo: string
        read_on: string
    }
) => {
    return client.post(
        `/books/${bookId}/reading_logs`,
         {reading_log: params,})
}

export const getReadingLogs = (bookId: string) => {
    return client.get(`/books/${bookId}/reading_logs`)
}