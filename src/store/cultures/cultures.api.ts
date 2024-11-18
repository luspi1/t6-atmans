import { type CultureItem } from 'src/types/cultures'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { MAIN_PROD_URL, ReducerPath } from 'src/helpers/consts'

export const culturesApi = createApi({
	reducerPath: ReducerPath.Cultures,
	tagTypes: ['Cultures'],
	baseQuery: fetchBaseQuery({
		baseUrl: MAIN_PROD_URL,
	}),
	endpoints: (build) => ({
		getCultureById: build.query<CultureItem, string>({
			query: (cultureId) => ({
				url: `cultures/${cultureId}`,
			}),
		}),
	}),
})

export const { useGetCultureByIdQuery } = culturesApi
