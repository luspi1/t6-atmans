import React, { useState } from 'react'

import { MonthsFilterSlider } from 'src/components/months-filter-slider/months-filter-slider'
import { CategoriesFiltration } from 'src/components/categories-filtration/categories-filtration'
import { EventCard } from 'src/components/event-card/event-card'
import {
	useGetAllEventsMonthsQuery,
	useGetEventsCategoriesQuery,
	useGetEventsMonthsQuery,
} from 'src/store/events/events.api'

import styles from './index.module.scss'
import { getYear } from 'date-fns'

export const FilteredEventsList = () => {
	const [activeMonth, setActiveMonth] = useState('')
	const [activeCategory, setActiveCategory] = useState('0')

	const { data: eventsMonthsList, isSuccess: isMonthsSuccess } = useGetAllEventsMonthsQuery(null)
	const { data: eventsCategories } = useGetEventsCategoriesQuery(null)
	const { data: eventsList } = useGetEventsMonthsQuery({
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
		<div className={styles.filteredListWrapper}>
			<h4>Cобытия {getYear(new Date(activeMonth))}</h4>
			<MonthsFilterSlider
				monthsList={eventsMonthsList ?? []}
				changeActiveMonth={handleChangeActiveMonth}
				activeMonth={activeMonth}
				isSuccess={isMonthsSuccess}
			/>
			<CategoriesFiltration
				activeCatId={activeCategory}
				changeActiveCatId={handleChangeActiveCategory}
				categories={eventsCategories ?? []}
			/>
			<div className={styles.eventsList}>
				{eventsList?.map((eventEl) => <EventCard key={eventEl.id} {...eventEl} />)}
			</div>
		</div>
	)
}
