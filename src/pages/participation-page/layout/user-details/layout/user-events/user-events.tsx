import { type FC, useState } from 'react'

import { useParams } from 'react-router-dom'

import { useDebounce } from 'src/hooks/debounce/debounce'
import { useGetUserEventQuery } from 'src/store/users/users.api'

import { Loader } from 'src/components/loader/loader'
import { EventsList } from 'src/modules/events-list/events-list'

import styles from './index.module.scss'

export const UserEvents: FC = () => {
	const [searchEvents] = useState<string>('')
	const debouncedSearch = useDebounce(searchEvents)

	const { id } = useParams()

	const { data: eventList, isLoading } = useGetUserEventQuery([debouncedSearch, id ?? ''])

	if (isLoading || !eventList) return <Loader />

	return (
		<section className={styles.userEventsSection}>
			<EventsList eventsData={eventList} typeEventInfo='designation' />
		</section>
	)
}
