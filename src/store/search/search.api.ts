import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const searchApi = createApi({
	reducerPath: ReducerPath.Search,
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getSearched: build.query<string[], string>({
			query: (search) => ({
				url: 'search',
				params: {
					q: search,
				},
			}),
		}),
	}),
})

export const { useGetSearchedQuery } = searchApi
