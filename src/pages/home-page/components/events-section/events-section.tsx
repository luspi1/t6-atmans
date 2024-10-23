import { type FC } from 'react'

import cn from 'classnames'

import { Container } from 'src/UI/Container/Container'
import { HomeEventsList } from 'src/pages/home-page/components/events-section/components/home-events-list/home-events-list'
import { useGetHomeEventsQuery } from 'src/store/home/home.api'

import styles from './index.module.scss'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { AppRoute } from 'src/routes/main-routes/consts'

export const EventsSection: FC = () => {
	const { data: homeEvents } = useGetHomeEventsQuery(null)

	return (
		<section className={cn(styles.eventsSection, '_bordered')}>
			<Container>
				<FlexRow $margin='0 0 23px 0' $alignItems='center' $justifyContent='space-between'>
					<h4>События</h4>
					<MainButton as='route' to={AppRoute.Events}>
						Все события
					</MainButton>
				</FlexRow>

				<HomeEventsList homeEvents={homeEvents ?? []} />
			</Container>
		</section>
	)
}
