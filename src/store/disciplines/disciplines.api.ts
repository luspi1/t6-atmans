import { type EthnosportDisciplineItem } from 'src/types/ethnosportDiscipline'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const disciplinesApi = createApi({
	reducerPath: ReducerPath.Disciplines,
	tagTypes: ['Disciplines'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getAllDisciplines: build.query<EthnosportDisciplineItem[], null>({
			query: () => ({
				url: `disciplines`,
			}),
		}),
		getDisciplineById: build.query<EthnosportDisciplineItem, string>({
			query: (disId) => ({
				url: `disciplines/${disId}`,
			}),
		}),
	}),
})

export const { useGetAllDisciplinesQuery, useGetDisciplineByIdQuery } = disciplinesApi
