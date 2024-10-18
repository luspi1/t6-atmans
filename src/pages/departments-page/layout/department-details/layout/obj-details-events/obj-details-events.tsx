import React, { type FC } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from 'src/components/loader/loader'
import { useGetObjectByCodeQuery } from 'src/store/objects/objects.api'

import { EventsList } from 'src/modules/events-list/events-list'

export const ObjDetailsEvents: FC = () => {
	const { id } = useParams()
	const { data: objectDetails, isLoading } = useGetObjectByCodeQuery(id ?? '')
	if (isLoading) return <Loader />
	return (
		<section>
			<EventsList eventsData={objectDetails?.events} />
		</section>
	)
}
