import { type FC } from 'react'

import { HomeEvent } from 'src/pages/home-page/components/events-section/components/home-event/home-event'

import styles from './index.module.scss'
import { useGetHomeEventMonthsQuery } from 'src/store/home/home.api'

export const HomeEventsList: FC = () => {
	const { data: homeEvents } = useGetHomeEventMonthsQuery({ month: 7, category: '0' })

	return (
		<ul className={styles.eventsList}>
			{homeEvents?.map((item) => <HomeEvent key={item.id} {...item} />)}
		</ul>
	)
}
