import { type EventsItem } from 'src/types/events'
import { type ImageItem } from 'src/types/photos'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'
import type { NewsItem } from 'src/types/news'
import type { VideoItem } from 'src/types/videos'

export const brandEventsApi = createApi({
	reducerPath: ReducerPath.BrandEvents,
	tagTypes: ['BrandEvents', 'BrandEventNews'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getAllBrandEvents: build.query<EventsItem[], null>({
			query: () => ({
				url: 'brand-events',
			}),
		}),
		getBrandEventById: build.query<EventsItem, string>({
			query: (brandEventId) => ({
				url: `brand-events/${brandEventId}`,
			}),
		}),
		getEventsByBrands: build.query<EventsItem[], [string, string]>({
			query: ([search, brandEventId]) => ({
				url: `brand-events/${brandEventId}/events`,
				params: {
					q: search,
				},
			}),
		}),

		getBrandEventPhotos: build.query<ImageItem[], string>({
			query: (brandEventId) => ({
				url: `brand-events/${brandEventId}/photos`,
			}),
		}),
		getBrandEventAllNews: build.query<
			NewsItem[],
			{ brandEventId?: string; search?: string; year?: string }
		>({
			query: ({ brandEventId = '', search = '', year = '' }) => ({
				url: `brand-events/${brandEventId}/news`,
				params: {
					q: search,
					y: year,
				},
			}),
			providesTags: ['BrandEventNews'],
		}),
		getBrandEventNewsById: build.query<NewsItem, { brandEventId?: string; newsId?: string }>({
			query: ({ brandEventId = '', newsId = '' }) => ({
				url: `brand-events/${brandEventId}/news/${newsId}`,
			}),
			providesTags: ['BrandEventNews'],
		}),
		getBrandEventNewsVideos: build.query<VideoItem[], string>({
			query: (brandEventId) => ({
				url: `brand-events/${brandEventId}/news-videos`,
			}),
		}),
		getBrandEventNewsVideoById: build.query<VideoItem, { brandEventId?: string; videoId?: string }>(
			{
				query: ({ brandEventId = '', videoId = '' }) => ({
					url: `brand-events/${brandEventId}/news-videos/${videoId}`,
				}),
			},
		),
	}),
})

export const {
	useGetAllBrandEventsQuery,
	useGetBrandEventByIdQuery,
	useGetEventsByBrandsQuery,
	useGetBrandEventPhotosQuery,
	useGetBrandEventAllNewsQuery,
	useGetBrandEventNewsByIdQuery,
	useGetBrandEventNewsVideosQuery,
	useGetBrandEventNewsVideoByIdQuery,
} = brandEventsApi
