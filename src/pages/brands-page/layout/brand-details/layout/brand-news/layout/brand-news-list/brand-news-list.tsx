import { type FC, useState } from 'react'

import { NewsList } from 'src/modules/news-list/news-list'
import { useParams } from 'react-router-dom'
import { useGetBrandEventAllNewsQuery } from 'src/store/brandEvents/brand-events.api'

export const BrandNewsList: FC = () => {
	const { id } = useParams()

	const [yearsValue, setYearsValue] = useState<string>('')

	const { data: newsList, isSuccess } = useGetBrandEventAllNewsQuery({
		brandEventId: id,
		year: yearsValue,
	})

	return (
		<div>
			<NewsList
				newsItems={newsList ?? []}
				title='Новости бренда событий'
				setYearsValue={setYearsValue}
				yearsValue={yearsValue}
				isSuccess={isSuccess}
			/>
		</div>
	)
}
