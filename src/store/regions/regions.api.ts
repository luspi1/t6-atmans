import { type RegionItem, type RegionsInfo } from 'src/types/regions'
import { type UserItem } from 'src/types/users'
import { type EventsItem } from 'src/types/events'
import { type ImageItem } from 'src/types/photos'
import { type VideoItem } from 'src/types/videos'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'
import type { NewsItem } from 'src/types/news'

export const regionsApi = createApi({
	reducerPath: ReducerPath.Regions,
	tagTypes: ['Regions', 'RegionNews'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getRegionsInfo: build.query<RegionsInfo, null>({
			query: () => ({
				url: `regions-info`,
			}),
		}),
		getAllRegions: build.query<RegionItem[], string>({
			query: (search) => ({
				url: `regions`,
				params: {
					q: search,
				},
			}),
		}),
		getRegionByCode: build.query<RegionItem, string>({
			query: (regCode) => ({
				url: `regions/${regCode}`,
			}),
		}),

		getRegionParticipants: build.query<UserItem[], [string, string]>({
			query: ([search, regCode]) => ({
				url: `regions/${regCode}/participants`,
				params: {
					q: search,
				},
			}),
		}),

		getRegionEvents: build.query<EventsItem[], [string, string]>({
			query: ([search, regCode]) => ({
				url: `regions/${regCode}/events`,
				params: {
					q: search,
				},
			}),
		}),

		getRegionPhotos: build.query<ImageItem[], string>({
			query: (regCode) => ({
				url: `regions/${regCode}/photos`,
			}),
		}),
		getRegionAllNews: build.query<NewsItem[], { regCode?: string; search?: string; year?: string }>(
			{
				query: ({ regCode = '', search = '', year = '' }) => ({
					url: `regions/${regCode}/news`,
					params: {
						q: search,
						y: year,
					},
				}),
				providesTags: ['RegionNews'],
			},
		),
		getRegionNewsById: build.query<NewsItem, { regCode?: string; newsId?: string }>({
			query: ({ regCode = '', newsId = '' }) => ({
				url: `regions/${regCode}/news/${newsId}`,
			}),
			providesTags: ['RegionNews'],
		}),
		getRegionNewsVideos: build.query<VideoItem[], string>({
			query: (regCode) => ({
				url: `regions/${regCode}/news-videos`,
			}),
		}),
		getRegionNewsVideoById: build.query<VideoItem, { regCode?: string; videoId?: string }>({
			query: ({ regCode = '', videoId = '' }) => ({
				url: `regions/${regCode}/news-videos/${videoId}`,
			}),
		}),
	}),
})

export const {
	useGetAllRegionsQuery,
	useGetRegionByCodeQuery,
	useGetRegionParticipantsQuery,
	useGetRegionEventsQuery,
	useGetRegionPhotosQuery,
	useGetRegionsInfoQuery,
	useGetRegionAllNewsQuery,
	useGetRegionNewsByIdQuery,
	useGetRegionNewsVideosQuery,
	useGetRegionNewsVideoByIdQuery,
} = regionsApi
