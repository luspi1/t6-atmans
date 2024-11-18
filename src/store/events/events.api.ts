import { type CardEventItem, type EventItem } from 'src/types/events'
import type { ImageItem } from 'src/types/photos'
import { type ProgramListItem } from 'src/types/program'
import type { FiltrationInfo } from 'src/types/global'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MAIN_PROD_URL, ReducerPath } from 'src/helpers/consts'

export const eventsApi = createApi({
	reducerPath: ReducerPath.Events,
	tagTypes: ['Events'],
	baseQuery: fetchBaseQuery({
		baseUrl: MAIN_PROD_URL,
	}),
	endpoints: (build) => ({
		getEventsMonths: build.query<CardEventItem[], { date: string; category: string }>({
			query: ({ date = '0', category = '0' }) => ({
				url: 'events',
				params: {
					d: date,
					cat: category,
				},
			}),
		}),
		getEventsFiltration: build.query<FiltrationInfo, null>({
			query: () => ({
				url: `events_filter_info`,
			}),
		}),

		getEventById: build.query<EventItem, string>({
			query: (eventId) => ({
				url: `events/${eventId}`,
			}),
		}),
		getEventPhoto: build.query<ImageItem[], string>({
			query: (eventId) => ({
				url: `events/${eventId}/photos`,
			}),
		}),

		getEventProgramById: build.query<ProgramListItem[], { eventId?: string; dayId?: string }>({
			query: ({ eventId = '', dayId = '' }) => ({
				url: `events/${eventId}/program/${dayId}`,
			}),
		}),
	}),
})

export const {
	useGetEventsFiltrationQuery,
	useGetEventsMonthsQuery,
	useGetEventByIdQuery,
	useGetEventPhotoQuery,
	useGetEventProgramByIdQuery,
} = eventsApi
