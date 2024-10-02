import {
	type HomeEthnoItems,
	type HomeEventCategory,
	type HomeEventItem,
	type HomePoster,
	type HomeRegion,
} from 'src/types/home-page'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const homeApi = createApi({
	reducerPath: ReducerPath.Home,
	tagTypes: ['Home'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getHomeRegions: build.query<HomeRegion[], null>({
			query: () => ({
				url: `home/regions`,
			}),
		}),
		getHomePosters: build.query<HomePoster[], null>({
			query: () => ({
				url: `home/posters`,
			}),
		}),
		getHomeEthno: build.query<HomeEthnoItems[], null>({
			query: () => ({
				url: `ethnosport_directions/`,
			}),
		}),
		getAllEventMonths: build.query<HomeEventItem[][], null>({
			query: () => ({
				url: `/home/all-event-months`,
			}),
		}),
		getHomeEventMonths: build.query<HomeEventItem[], { month: number; category: string }>({
			query: ({ month, category = '' }) => ({
				url: 'home/event-months/',
				params: {
					m: month,
					cat: category,
				},
			}),
		}),
		getHomeEventCategories: build.query<HomeEventCategory[], null>({
			query: () => ({
				url: 'home/all-event-categories',
			}),
		}),
	}),
})

export const {
	useGetHomeRegionsQuery,
	useGetHomeEventCategoriesQuery,
	useGetHomeEthnoQuery,
	useGetHomeEventMonthsQuery,
	useGetAllEventMonthsQuery,
	useGetHomePostersQuery,
} = homeApi
