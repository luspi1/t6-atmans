import { type GroupItem } from 'src/types/groups'
import { type EventsItem } from 'src/types/events'
import { type UserItem } from 'src/types/users'
import { type EthnosportDisciplineItem } from 'src/types/ethnosportDiscipline'
import { type ImageItem } from 'src/types/photos'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'
import type { NewsItem } from 'src/types/news'
import type { VideoItem } from 'src/types/videos'

export const groupsApi = createApi({
	reducerPath: ReducerPath.Groups,
	tagTypes: ['Groups', 'GroupNews'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getAllGroups: build.query<GroupItem[], string>({
			query: (search) => ({
				url: 'groups',
				params: {
					q: search,
				},
			}),
		}),
		getGroupById: build.query<GroupItem, string>({
			query: (groupId) => ({
				url: `groups/${groupId}`,
			}),
		}),
		getGroupEvent: build.query<EventsItem[], [string, string]>({
			query: ([search, groupId]) => ({
				url: `groups/${groupId}/event`,
				params: {
					q: search,
				},
			}),
		}),
		getGroupParticipantes: build.query<UserItem[], [string, string]>({
			query: ([search, groupId]) => ({
				url: `groups/${groupId}/participantes`,
				params: {
					q: search,
				},
			}),
		}),
		getGroupTable: build.query<GroupItem[], [string, string]>({
			query: ([search, groupId]) => ({
				url: `groups/${groupId}/table`,
				params: {
					q: search,
				},
			}),
		}),
		getGroupDisciplines: build.query<EthnosportDisciplineItem[], string>({
			query: (groupId) => ({
				url: `groups/${groupId}/disciplines`,
			}),
		}),
		getGroupPhoto: build.query<ImageItem[], string>({
			query: (groupId) => ({
				url: `groups/${groupId}/photos`,
			}),
		}),
		getGroupAllNews: build.query<NewsItem[], { groupId?: string; search?: string; year?: string }>({
			query: ({ groupId = '', search = '', year = '' }) => ({
				url: `groups/${groupId}/news`,
				params: {
					q: search,
					y: year,
				},
			}),
			providesTags: ['GroupNews'],
		}),
		getGroupNewsById: build.query<NewsItem, { groupId?: string; newsId?: string }>({
			query: ({ groupId = '', newsId = '' }) => ({
				url: `groups/${groupId}/news/${newsId}`,
			}),
			providesTags: ['GroupNews'],
		}),
		getGroupNewsVideos: build.query<VideoItem[], string>({
			query: (groupId) => ({
				url: `groups/${groupId}/news-videos`,
			}),
		}),
		getGroupNewsVideoById: build.query<VideoItem, { groupId?: string; videoId?: string }>({
			query: ({ groupId = '', videoId = '' }) => ({
				url: `groups/${groupId}/news-videos/${videoId}`,
			}),
		}),
	}),
})

export const {
	useGetAllGroupsQuery,
	useGetGroupByIdQuery,
	useGetGroupEventQuery,
	useGetGroupParticipantesQuery,
	useGetGroupTableQuery,
	useGetGroupDisciplinesQuery,
	useGetGroupPhotoQuery,
	useGetGroupAllNewsQuery,
	useGetGroupNewsByIdQuery,
	useGetGroupNewsVideosQuery,
	useGetGroupNewsVideoByIdQuery,
} = groupsApi
