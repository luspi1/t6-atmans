import { type ObjectItem, type ObjectsInfo } from 'src/types/objects'
import { type EventsItem } from 'src/types/events'
import { type ImageItem } from 'src/types/photos'
import { type VideoItem } from 'src/types/videos'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'
import type { NewsItem } from 'src/types/news'

export const objectsApi = createApi({
	reducerPath: ReducerPath.Objects,
	tagTypes: ['Objects', 'ObjectNews'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getObjectsInfo: build.query<ObjectsInfo, null>({
			query: () => ({
				url: `objects-info`,
			}),
		}),
		getAllObjects: build.query<ObjectItem[], string>({
			query: (search) => ({
				url: `objects`,
				params: {
					q: search,
				},
			}),
		}),
		getObjectByCode: build.query<ObjectItem, string>({
			query: (objCode) => ({
				url: `objects/${objCode}`,
			}),
		}),

		getObjectEvents: build.query<EventsItem[], [string, string]>({
			query: ([search, objCode]) => ({
				url: `objects/${objCode}/events`,
				params: {
					q: search,
				},
			}),
		}),

		getObjectPhotos: build.query<ImageItem[], string>({
			query: (objCode) => ({
				url: `objects/${objCode}/photos`,
			}),
		}),
		getObjectAllNews: build.query<NewsItem[], { objCode?: string; search?: string; year?: string }>(
			{
				query: ({ objCode = '', search = '', year = '' }) => ({
					url: `objects/${objCode}/news`,
					params: {
						q: search,
						y: year,
					},
				}),
				providesTags: ['ObjectNews'],
			},
		),
		getObjectNewsById: build.query<NewsItem, { objCode?: string; newsId?: string }>({
			query: ({ objCode = '', newsId = '' }) => ({
				url: `objects/${objCode}/news/${newsId}`,
			}),
			providesTags: ['ObjectNews'],
		}),
		getObjectNewsVideos: build.query<VideoItem[], string>({
			query: (objCode) => ({
				url: `objects/${objCode}/news-videos`,
			}),
		}),
		getObjectNewsVideoById: build.query<VideoItem, { objCode?: string; videoId?: string }>({
			query: ({ objCode = '', videoId = '' }) => ({
				url: `objects/${objCode}/news-videos/${videoId}`,
			}),
		}),
	}),
})

export const {
	useGetAllObjectsQuery,
	useGetObjectByCodeQuery,
	useGetObjectEventsQuery,
	useGetObjectPhotosQuery,
	useGetObjectsInfoQuery,
	useGetObjectAllNewsQuery,
	useGetObjectNewsByIdQuery,
	useGetObjectNewsVideosQuery,
	useGetObjectNewsVideoByIdQuery,
} = objectsApi
