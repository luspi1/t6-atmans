import {
	type HomeEventItem,
	type HomeFaq,
	type HomeNewsItem,
	type HomeObject,
	type HomePartnerItem,
	type HomePoster,
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
		getHomePosters: build.query<HomePoster[], null>({
			query: () => ({
				url: `home/posters`,
			}),
		}),

		getHomeEvents: build.query<HomeEventItem[], null>({
			query: () => ({
				url: `/home/all-events`,
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
		getHomeObjects: build.query<HomeObject[], null>({
			query: () => ({
				url: 'home/objects',
			}),
		}),
		getHomeFaq: build.query<HomeFaq[], null>({
			query: () => ({
				url: 'home/faq',
			}),
		}),
	}),
})

export const {
	useGetHomeNewsQuery,
	useGetHomeVideosQuery,
	useGetHomePostersQuery,
	useGetHomePartnersQuery,
	useGetHomeFaqQuery,
	useGetHomeEventsQuery,
	useGetHomeObjectsQuery,
} = homeApi
