import React, { type FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AppRoute } from 'src/routes/main-routes/consts'

import { EventsList } from 'src/modules/events-list/events-list'

import styles from './index.module.scss'
import { useGetEthnosportByIdQuery } from 'src/store/ethnosport/ethnosport.api'
import { Loader } from 'src/components/loader/loader'

export const EthnoDetailsEvents: FC = () => {
	const { id } = useParams()
	const { data: ethnoDetails, isLoading } = useGetEthnosportByIdQuery(id ?? '')
	if (isLoading) return <Loader />
	return (
		<section>
			<EventsList eventsData={ethnoDetails?.events} />
			<Link className={styles.allEventsLink} to={`/${AppRoute.Events}`}>
				Перейти в раздел Все события
			</Link>
		</section>
	)
}
