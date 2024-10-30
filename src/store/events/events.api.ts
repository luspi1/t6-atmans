import { type CardEventItem, type EventItem, type EventsMonthsList } from 'src/types/events'
import type { ImageItem } from 'src/types/photos'
import { type ProgramListItem } from 'src/types/program'
import type { CategoryItem, ChronologyItem } from 'src/types/global'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const eventsApi = createApi({
	reducerPath: ReducerPath.Events,
	tagTypes: ['Events', 'EventNews'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getEventsMonths: build.query<CardEventItem[], { date: string; category: string }>({
			query: ({ date, category = '' }) => ({
				url: 'events-months',
				params: {
					d: date,
					cat: category,
				},
			}),
		}),
		getAllEventsMonths: build.query<EventsMonthsList[], null>({
			query: () => ({
				url: `all-events`,
			}),
		}),
		getEventsCategories: build.query<CategoryItem[], null>({
			query: () => ({
				url: 'events-categories',
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
		getEventChronology: build.query<ChronologyItem[], string>({
			query: (eventId) => ({
				url: `events/${eventId}/chronology`,
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
	useGetAllEventsMonthsQuery,
	useGetEventsMonthsQuery,
	useGetEventsCategoriesQuery,
	useGetEventByIdQuery,
	useGetEventPhotoQuery,
	useGetEventProgramByIdQuery,
} = eventsApi
