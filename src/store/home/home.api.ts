import {
	type HomeFaq,
	type HomeObject,
	type HomePartnerItem,
	type HomePoster,
} from 'src/types/home-page'
import { type CardEventItem } from 'src/types/events'
import { type CardNewsItem } from 'src/types/news'
import { type CardVideoItem } from 'src/types/videos'

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

		getHomeEvents: build.query<CardEventItem[], null>({
			query: () => ({
				url: `/home/all-events`,
			}),
		}),

		getHomeNews: build.query<CardNewsItem[], null>({
			query: () => ({
				url: 'home/all-news',
			}),
		}),
		getHomeVideos: build.query<CardVideoItem[], null>({
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
