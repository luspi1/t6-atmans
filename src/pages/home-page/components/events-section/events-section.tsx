import { type FC, useState } from 'react'

import { getYear } from 'date-fns'
import cn from 'classnames'

import { Container } from 'src/UI/Container/Container'
import { MonthsSlider } from 'src/pages/home-page/components/events-section/components/months-slider/months-slider'
import { MonthsFiltration } from 'src/pages/home-page/components/events-section/components/months-filtration/months-filtration'
import { useGetHomeEventMonthsQuery } from 'src/store/home/home.api'
import { HomeEventsList } from 'src/pages/home-page/components/events-section/components/home-events-list/home-events-list'

import styles from './index.module.scss'

export const EventsSection: FC = () => {
	const [activeMonth, setActiveMonth] = useState('')
	const [activeCategory, setActiveCategory] = useState('0')
	const { data: homeEvents } = useGetHomeEventMonthsQuery({
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
		<section className={cn(styles.eventsSection, '_bordered')}>
			<Container>
				<h4>События {getYear(new Date(activeMonth))}</h4>
				<MonthsSlider changeActiveMonth={handleChangeActiveMonth} activeMonth={activeMonth} />
				<MonthsFiltration
					activeCatId={activeCategory}
					changeActiveCatId={handleChangeActiveCategory}
				/>
				<HomeEventsList homeEvents={homeEvents ?? []} />
			</Container>
		</section>
	)
}
