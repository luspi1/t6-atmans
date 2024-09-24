import { type FC, useState } from 'react'

import { NewsList } from 'src/modules/news-list/news-list'
import { useGetGroupAllNewsQuery } from 'src/store/groups/groups.api'
import { useParams } from 'react-router-dom'

export const GroupNewsList: FC = () => {
	const { id } = useParams()

	const [yearsValue, setYearsValue] = useState<string>('')

	const { data: newsList, isSuccess } = useGetGroupAllNewsQuery({ groupId: id, year: yearsValue })

	return (
		<div>
			<NewsList
				newsItems={newsList ?? []}
				title='Новости группы'
				setYearsValue={setYearsValue}
				yearsValue={yearsValue}
				isSuccess={isSuccess}
			/>
		</div>
	)
}
