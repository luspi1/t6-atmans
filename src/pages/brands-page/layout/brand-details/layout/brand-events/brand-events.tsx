import React, { type FC, useState } from 'react'

import { useParams } from 'react-router-dom'

import { useDebounce } from 'src/hooks/debounce/debounce'

import { Loader } from 'src/components/loader/loader'
import { EventsList } from 'src/modules/events-list/events-list'

import { useGetEventsByBrandsQuery } from 'src/store/brandEvents/brand-events.api'

import styles from './index.module.scss'

export const BrandEvents: FC = () => {
	const [searchEvents] = useState<string>('')
	const debouncedSearch = useDebounce(searchEvents)

	const { id } = useParams()

	const { data: eventList, isLoading } = useGetEventsByBrandsQuery([debouncedSearch, id ?? ''])

	if (isLoading || !eventList) return <Loader />

	return (
		<div>
			<section className={styles.brandEventsSection}>
				<EventsList eventsData={eventList} typeEventInfo='designation' />
			</section>
		</div>
	)
}
