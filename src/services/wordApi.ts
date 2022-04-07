// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Word } from '../types'

// Define a service using a base URL and expected endpoints
export const wordApi = createApi({
  reducerPath: 'wordApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_WORD_API_URL }),
  endpoints: (builder) => ({
    getWord: builder.query<Word, void>({ query: () => 'words/random' }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWordQuery } = wordApi
