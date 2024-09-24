import {
	type HomeEthnoItems,
	type HomeEventItem,
	type HomePoster,
	type HomeRegion,
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
		getHomeEvents: build.query<HomeEventItem[], null>({
			query: () => ({
				url: `events_list/`,
			}),
		}),
	}),
})

export const {
	useGetHomeRegionsQuery,
	useGetHomeEthnoQuery,
	useGetHomeEventsQuery,
	useGetHomePostersQuery,
} = homeApi
