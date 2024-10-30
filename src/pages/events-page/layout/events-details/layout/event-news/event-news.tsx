import React, { type FC } from 'react'

import { GridRow } from 'src/components/grid-row/grid-row'
import { useGetHomeNewsQuery } from 'src/store/home/home.api'
import { NewsCard } from 'src/components/news-card/news-card'

export const EventNews: FC = () => {
	const { data: newsList } = useGetHomeNewsQuery(null)
	return (
		<>
			<h4>Новости события</h4>
			<GridRow $template='auto / repeat(auto-fit, minmax(280px, 280px))' $gap='20px'>
				{newsList?.map((newsEl) => <NewsCard key={newsEl.id} {...newsEl} />)}
			</GridRow>
		</>
	)
}
