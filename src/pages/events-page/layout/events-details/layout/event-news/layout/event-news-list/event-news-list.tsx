import { type FC, useState } from 'react'

import { NewsList } from 'src/modules/news-list/news-list'
import { useParams } from 'react-router-dom'
import { useGetEventAllNewsQuery } from 'src/store/events/events.api'

export const EventNewsList: FC = () => {
	const { id } = useParams()

	const [yearsValue, setYearsValue] = useState<string>('')

	const { data: newsList, isSuccess } = useGetEventAllNewsQuery({ eventId: id, year: yearsValue })

	return (
		<div>
			<NewsList
				newsItems={newsList ?? []}
				title='Новости события'
				setYearsValue={setYearsValue}
				yearsValue={yearsValue}
				isSuccess={isSuccess}
			/>
		</div>
	)
}
