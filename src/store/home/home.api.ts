import {
	type HomeEthno,
	type HomeEthnoItems,
	type HomeEventCategory,
	type HomeEventItem,
	type HomeNewsItem,
	type HomePartnerItem,
	type HomePoster,
	type HomeRegion,
	type HomeVideoItem,
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
		getHomeNews: build.query<HomeNewsItem[], null>({
			query: () => ({
				url: 'home/all-news',
			}),
		}),
		getHomeVideos: build.query<HomeVideoItem[], null>({
			query: () => ({
				url: 'home/all-videos',
			}),
		}),
		getHomePartners: build.query<HomePartnerItem[], null>({
			query: () => ({
				url: 'home/partners',
			}),
		}),
		getHomeEthnoTypes: build.query<HomeEthno[], null>({
			query: () => ({
				url: 'home/ethno-types',
			}),
		}),
	}),
})

export const {
	useGetHomeRegionsQuery,
	useGetHomeEventCategoriesQuery,
	useGetHomeNewsQuery,
	useGetHomeVideosQuery,
	useGetHomeEventMonthsQuery,
	useGetAllEventMonthsQuery,
	useGetHomePostersQuery,
	useGetHomePartnersQuery,
	useGetHomeEthnoTypesQuery,
} = homeApi
