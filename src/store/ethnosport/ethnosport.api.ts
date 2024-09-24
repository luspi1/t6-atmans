import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'
import { type EthnosportDirection, type EthnosportGlobal } from 'src/types/ethnosport'

export const ethnosportApi = createApi({
	reducerPath: ReducerPath.Ethnosport,
	tagTypes: ['Ethnosport'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getEthnosportGlobal: build.query<EthnosportGlobal, null>({
			query: () => ({
				url: `ethnosport`,
			}),
		}),
		getEthnosportById: build.query<EthnosportDirection, string>({
			query: (ethnosportId) => ({
				url: `ethnosport/${ethnosportId}`,
			}),
		}),
	}),
})

export const { useGetEthnosportGlobalQuery, useGetEthnosportByIdQuery } = ethnosportApi
