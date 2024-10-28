import { type CardVideoItem, type VideoItem, type VideosMonthsList } from 'src/types/videos'
import { type CategoryItem } from 'src/types/global'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const videosApi = createApi({
	reducerPath: ReducerPath.Videos,
	tagTypes: ['Videos'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getVideosMonths: build.query<CardVideoItem[], { date: string; category: string }>({
			query: ({ date, category = '' }) => ({
				url: 'videos-months',
				params: {
					d: date,
					cat: category,
				},
			}),
		}),
		getAllVideosMonths: build.query<VideosMonthsList[], null>({
			query: () => ({
				url: `all-videos`,
			}),
		}),
		getVideosCategories: build.query<CategoryItem[], null>({
			query: () => ({
				url: 'videos-categories',
			}),
		}),
		getVideoById: build.query<VideoItem, string>({
			query: (videoId) => ({
				url: `videos/${videoId}`,
			}),
		}),
	}),
})

export const {
	useGetVideosCategoriesQuery,
	useGetAllVideosMonthsQuery,
	useGetVideosMonthsQuery,
	useGetVideoByIdQuery,
} = videosApi
