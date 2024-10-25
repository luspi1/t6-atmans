import React, { useState } from 'react'
import { MonthsFilterSlider } from 'src/components/months-filter-slider/months-filter-slider'
import { CategoriesFiltration } from 'src/components/categories-filtration/categories-filtration'
import { NewsCard } from 'src/components/news-card/news-card'

import {
	useGetAllNewsMonthsQuery,
	useGetNewsCategoriesQuery,
	useGetNewsMonthsQuery,
} from 'src/store/news/news.api'

import styles from './index.module.scss'
import { getYear } from 'date-fns'

export const FilteredNewsList = () => {
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
		<div>
			<h2>Новости {getYear(new Date(activeMonth))}</h2>

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
		</div>
	)
}
