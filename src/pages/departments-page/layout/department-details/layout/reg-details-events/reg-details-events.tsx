import React, { type FC } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from 'src/components/loader/loader'

import { EventsList } from 'src/modules/events-list/events-list'
import { useGetRegionByCodeQuery } from 'src/store/regions/regions.api'

export const RegDetailsEvents: FC = () => {
	const { id } = useParams()
	const { data: regionDetails, isLoading } = useGetRegionByCodeQuery(id ?? '')
	if (isLoading) return <Loader />
	return (
		<section>
			<EventsList eventsData={regionDetails?.events} />
		</section>
	)
}
