import { type UserItem } from 'src/types/users'
import { type GroupItem } from 'src/types/groups'
import { type EventsItem } from 'src/types/events'
import { type ImageItem } from 'src/types/photos'
import { type VideoItem } from 'src/types/videos'
import { type EthnosportDisciplineItem } from 'src/types/ethnosportDiscipline'
import { type MaterialItem } from 'src/types/materials'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const usersApi = createApi({
	reducerPath: ReducerPath.Users,
	tagTypes: ['Users'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getAllUsers: build.query<UserItem[], string>({
			query: (search) => ({
				url: `users`,
				params: {
					q: search,
				},
			}),
		}),
		getUserById: build.query<UserItem, string>({
			query: (userId) => ({
				url: `users/${userId}`,
			}),
		}),
		getUserGroup: build.query<GroupItem[], [string, string]>({
			query: ([search, userId]) => ({
				url: `users/${userId}/group`,
				params: {
					q: search,
				},
			}),
		}),
		getUserEvent: build.query<EventsItem[], [string, string]>({
			query: ([search, userId]) => ({
				url: `users/${userId}/event`,
				params: {
					q: search,
				},
			}),
		}),
		getUserMaterials: build.query<MaterialItem[], [string, string]>({
			query: ([search, userId]) => ({
				url: `users/${userId}/materials`,
				params: {
					q: search,
				},
			}),
		}),
		getUserDisciplines: build.query<EthnosportDisciplineItem[], string>({
			query: (userId) => ({
				url: `users/${userId}/disciplines`,
			}),
		}),
		getUserPhoto: build.query<ImageItem[], string>({
			query: (userId) => ({
				url: `users/${userId}/photo`,
			}),
		}),
		getUserVideo: build.query<VideoItem[], string>({
			query: (userId) => ({
				url: `users/${userId}/video`,
			}),
		}),
	}),
})

export const {
	useGetAllUsersQuery,
	useGetUserByIdQuery,
	useGetUserGroupQuery,
	useGetUserEventQuery,
	useGetUserMaterialsQuery,
	useGetUserPhotoQuery,
	useGetUserVideoQuery,
	useGetUserDisciplinesQuery,
} = usersApi
