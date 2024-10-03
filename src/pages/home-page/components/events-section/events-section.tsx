import { type FC, useState } from 'react'

import { Container } from 'src/UI/Container/Container'
import { MonthsSlider } from 'src/pages/home-page/components/events-section/components/months-slider/months-slider'
import { MonthsFiltration } from 'src/pages/home-page/components/events-section/components/months-filtration/months-filtration'
import { HomeEventsList } from 'src/pages/home-page/components/events-section/components/home-events-list/home-events-list'
import { useGetHomeEventMonthsQuery } from 'src/store/home/home.api'

import styles from './index.module.scss'

export const EventsSection: FC = () => {
	const [activeMonth, setActiveMonth] = useState(7)
	const [activeCategory, setActiveCategory] = useState('0')
	const { data: homeEvents } = useGetHomeEventMonthsQuery({
		month: activeMonth,
		category: activeCategory,
	})

	const handleChangeActiveMonth = (newMonth: number) => {
		setActiveMonth(newMonth)
	}
	const handleChangeActiveCategory = (newCategory: string) => {
		setActiveCategory(newCategory)
	}

	return (
		<section className={styles.eventsSection}>
			<Container>
				<h4>События 2024</h4>
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
