import React, { type FC } from 'react'

import { GridRow } from 'src/components/grid-row/grid-row'
import { NewsCard } from 'src/components/news-card/news-card'
import { useGetEventNewsByIdQuery } from 'src/store/events/events.api'
import { useParams } from 'react-router-dom'

export const EventNews: FC = () => {
	const { id } = useParams()
	const { data: eventNews } = useGetEventNewsByIdQuery(id ?? '')
	return (
		<>
			<h4>Новости события</h4>
			<GridRow $template='auto / repeat(auto-fit, minmax(280px, 280px))' $gap='20px'>
				{eventNews?.map((newsEl) => <NewsCard key={newsEl.id} {...newsEl} />)}
			</GridRow>
		</>
	)
}
