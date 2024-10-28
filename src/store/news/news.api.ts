import { type CardNewsItem, type NewsItem, type NewsMonthsList } from 'src/types/news'
import { type CategoryItem } from 'src/types/global'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const newsApi = createApi({
	reducerPath: ReducerPath.News,
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getNewsMonths: build.query<CardNewsItem[], { date: string; category: string }>({
			query: ({ date, category = '' }) => ({
				url: 'news-months',
				params: {
					d: date,
					cat: category,
				},
			}),
		}),
		getAllNewsMonths: build.query<NewsMonthsList[], null>({
			query: () => ({
				url: `all-news`,
			}),
		}),
		getNewsCategories: build.query<CategoryItem[], null>({
			query: () => ({
				url: 'news-categories',
			}),
		}),
		getNewsById: build.query<NewsItem, string>({
			query: (newsId) => ({
				url: `news/${newsId}`,
			}),
		}),
	}),
})

export const {
	useGetAllNewsMonthsQuery,
	useGetNewsCategoriesQuery,
	useGetNewsMonthsQuery,
	useGetNewsByIdQuery,
} = newsApi
