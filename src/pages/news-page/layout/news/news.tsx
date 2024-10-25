import React, { type FC, useState } from 'react'

import { PageContent } from 'src/components/page-content/page-content'

import styles from './index.module.scss'
import { MonthsFilterSlider } from 'src/components/months-filter-slider/months-filter-slider'
import {
	useGetAllNewsMonthsQuery,
	useGetNewsCategoriesQuery,
	useGetNewsMonthsQuery,
} from 'src/store/news/news.api'
import { CategoriesFiltration } from 'src/components/categories-filtration/categories-filtration'
import { NewsCard } from 'src/components/news-card/news-card'

export const News: FC = () => {
	const [activeMonth, setActiveMonth] = useState('')
	const [activeCategory, setActiveCategory] = useState('0')

	const { data: newsMonthsList, isSuccess: isMonthsSuccess } = useGetAllNewsMonthsQuery(null)
	const { data: newsCategories } = useGetNewsCategoriesQuery(null)
	const { data: newsList } = useGetNewsMonthsQuery({
		date: activeMonth,
		category: activeCategory,
	})

	const handleChangeActiveMonth = (newMonth: string) => {
		setActiveMonth(newMonth)
	}
	const handleChangeActiveCategory = (newCategory: string) => {
		setActiveCategory(newCategory)
	}

	return (
		<PageContent className={styles.newsListPage}>
			<MonthsFilterSlider
				monthsList={newsMonthsList ?? []}
				changeActiveMonth={handleChangeActiveMonth}
				activeMonth={activeMonth}
				isSuccess={isMonthsSuccess}
			/>
			<CategoriesFiltration
				activeCatId={activeCategory}
				changeActiveCatId={handleChangeActiveCategory}
				categories={newsCategories ?? []}
			/>
			<div className={styles.newsList}>
				{newsList?.map((newsEl) => <NewsCard key={newsEl.id} {...newsEl} />)}
			</div>
		</PageContent>
	)
}
