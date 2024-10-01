import { type FC } from 'react'

import { Container } from 'src/UI/Container/Container'
import { MonthsSlider } from 'src/pages/home-page/components/events-section/components/months-slider/months-slider'

import styles from './index.module.scss'

export const EventsSection: FC = () => {
	return (
		<section className={styles.eventsSection}>
			<Container>
				<h4>События 2024</h4>
				<MonthsSlider />
			</Container>
		</section>
	)
}
