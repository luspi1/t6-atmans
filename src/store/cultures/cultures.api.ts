import { type CultureItem } from 'src/types/cultures'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const culturesApi = createApi({
	reducerPath: ReducerPath.Cultures,
	tagTypes: ['Cultures'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getAllCultures: build.query<CultureItem[], null>({
			query: () => ({
				url: 'cultures',
			}),
		}),
		getCultureById: build.query<CultureItem, string>({
			query: (cultureId) => ({
				url: `cultures/${cultureId}`,
			}),
		}),
	}),
})

export const { useGetAllCulturesQuery, useGetCultureByIdQuery } = culturesApi
