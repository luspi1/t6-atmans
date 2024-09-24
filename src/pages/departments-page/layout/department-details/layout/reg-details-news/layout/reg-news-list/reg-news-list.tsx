import { type FC, useState } from 'react'

import { NewsList } from 'src/modules/news-list/news-list'
import { useParams } from 'react-router-dom'
import { useGetRegionAllNewsQuery } from 'src/store/regions/regions.api'

export const RegNewsList: FC = () => {
	const { id } = useParams()

	const [yearsValue, setYearsValue] = useState<string>('')

	const { data: newsList, isSuccess } = useGetRegionAllNewsQuery({ regCode: id, year: yearsValue })

	return (
		<div>
			<NewsList
				newsItems={newsList ?? []}
				title='Новости отделения'
				setYearsValue={setYearsValue}
				yearsValue={yearsValue}
				isSuccess={isSuccess}
			/>
		</div>
	)
}
