import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const myApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/",
    }),
    endpoints: (builder) => ({
        getContacts: builder.query({ query: () => "contacts" })
    })
})

export const { useGetContactsQuery } = myApi