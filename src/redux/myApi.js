import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const myApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3010/",
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({ query: () => "posts" })
    })
})

export const { useGetPostsQuery } = myApi

