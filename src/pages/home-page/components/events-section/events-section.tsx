import { type FC } from 'react'

import { Link } from 'react-router-dom'

import { AppRoute } from 'src/routes/main-routes/consts'
import { Container } from 'src/UI/Container/Container'
import { HomeEventsList } from 'src/pages/home-page/components/events-section/components/home-events-list/home-events-list'

import styles from './index.module.scss'

export const EventsSection: FC = () => {
	return (
		<section className={styles.eventsSection}>
			<Container>
				<h4>События</h4>
				<HomeEventsList />
				<Link className={styles.allEventsLink} to={AppRoute.Events}>
					Все события
				</Link>
			</Container>
		</section>
	)
}
