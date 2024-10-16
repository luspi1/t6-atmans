import {
	type HomeDepartment,
	type HomeEventCategory,
	type HomeEventItem,
	type HomeEventsList,
	type HomeFaq,
	type HomeNewsItem,
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
		getAllEventMonths: build.query<HomeEventsList, null>({
			query: () => ({
				url: `/home/all-event-months`,
			}),
		}),
		getHomeEventMonths: build.query<HomeEventItem[], { date: string; category: string }>({
			query: ({ date, category = '' }) => ({
				url: 'home/event-months/',
				params: {
					d: date,
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
		getHomeDepartments: build.query<HomeDepartment[], null>({
			query: () => ({
				url: 'home/departments',
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
	useGetHomeEventCategoriesQuery,
	useGetHomeNewsQuery,
	useGetHomeVideosQuery,
	useGetHomeEventMonthsQuery,
	useGetAllEventMonthsQuery,
	useGetHomePostersQuery,
	useGetHomePartnersQuery,
	useGetHomeDepartmentsQuery,
	useGetHomeFaqQuery,
} = homeApi
