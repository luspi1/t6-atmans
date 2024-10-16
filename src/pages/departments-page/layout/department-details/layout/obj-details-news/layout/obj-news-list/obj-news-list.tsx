import { type FC, useState } from 'react'

import { NewsList } from 'src/modules/news-list/news-list'
import { useParams } from 'react-router-dom'
import { useGetObjectAllNewsQuery } from 'src/store/objects/objects.api'

export const ObjNewsList: FC = () => {
	const { id } = useParams()

	const [yearsValue, setYearsValue] = useState<string>('')

	const { data: newsList, isSuccess } = useGetObjectAllNewsQuery({ objCode: id, year: yearsValue })

	return (
		<div>
			<NewsList
				newsItems={newsList ?? []}
				title='Новости объекта'
				setYearsValue={setYearsValue}
				yearsValue={yearsValue}
				isSuccess={isSuccess}
			/>
		</div>
	)
}
