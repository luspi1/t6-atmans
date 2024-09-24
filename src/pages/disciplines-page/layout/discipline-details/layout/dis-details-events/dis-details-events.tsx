import React, { type FC } from 'react'
import { useParams } from 'react-router-dom'
import { useGetDisciplineByIdQuery } from 'src/store/disciplines/disciplines.api'
import { Loader } from 'src/components/loader/loader'
import { EventsList } from 'src/modules/events-list/events-list'

export const DisDetailsEvents: FC = () => {
	const { id } = useParams()
	const { data: disDetails, isLoading } = useGetDisciplineByIdQuery(id ?? '')
	if (isLoading) return <Loader />
	return (
		<section>
			<EventsList eventsData={disDetails?.events} />
		</section>
	)
}
