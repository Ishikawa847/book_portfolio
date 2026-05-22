import client from "@/lib/api/client"

export const createReaingLog = (
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