import {
	type AboutContactsPage,
	type AboutCulturePage,
	type AboutGeneralPage,
	type AboutHistoryPage,
} from 'src/types/about'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MAIN_PROD_URL, ReducerPath } from 'src/helpers/consts'

export const aboutApi = createApi({
	reducerPath: ReducerPath.About,
	tagTypes: ['About'],
	baseQuery: fetchBaseQuery({
		baseUrl: MAIN_PROD_URL,
	}),
	endpoints: (build) => ({
		getAboutGeneral: build.query<AboutGeneralPage, null>({
			query: () => ({
				url: `about/general`,
			}),
			transformResponse: (response: [AboutGeneralPage]) => {
				return response[0]
			},
		}),
		getAboutHistory: build.query<AboutHistoryPage, null>({
			query: () => ({
				url: `about/history`,
			}),
			transformResponse: (response: [AboutHistoryPage]) => {
				return response[0]
			},
		}),
		getAboutCulture: build.query<AboutCulturePage, null>({
			query: () => ({
				url: `about/culture`,
			}),
			transformResponse: (response: [AboutCulturePage]) => {
				return response[0]
			},
		}),
		getAboutContacts: build.query<AboutContactsPage, null>({
			query: () => ({
				url: `about/contacts`,
			}),
		}),
	}),
})

export const {
	useGetAboutGeneralQuery,
	useGetAboutHistoryQuery,
	useGetAboutCultureQuery,
	useGetAboutContactsQuery,
} = aboutApi
