import React, { type FC, useState } from 'react'

import { NewsList } from 'src/modules/news-list/news-list'
import { useGetAllNewsQuery } from 'src/store/news/news.api'

import styles from './index.module.scss'

export const News: FC = () => {
	const [yearsValue, setYearsValue] = useState<string>('')

	const { data: newsList, isSuccess } = useGetAllNewsQuery({ year: yearsValue })

	return (
		<div className={styles.newsListPage}>
			<NewsList
				newsItems={newsList ?? []}
				title='Все новости'
				setYearsValue={setYearsValue}
				yearsValue={yearsValue}
				isSuccess={isSuccess}
			/>
		</div>
	)
}
