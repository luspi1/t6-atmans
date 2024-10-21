import React, { type FC, useState } from 'react'

import { NewsList } from 'src/modules/news-list/news-list'
import { useGetAllNewsQuery } from 'src/store/news/news.api'
import { PageContent } from 'src/components/page-content/page-content'

import styles from './index.module.scss'

export const News: FC = () => {
	const [yearsValue, setYearsValue] = useState<string>('')
	const [monthsValue, setMonthsValue] = useState<string>('')

	const { data: newsList, isSuccess } = useGetAllNewsQuery({ year: yearsValue })

	return (
		<PageContent className={styles.newsListPage} $padding='30px 40px 55px 30px' $maxWidth='100%'>
			<NewsList
				newsItems={newsList ?? []}
				title='Все новости'
				setYearsValue={setYearsValue}
				yearsValue={yearsValue}
				setMonthsValue={setMonthsValue}
				monthsValue={monthsValue}
				isSuccess={isSuccess}
			/>
		</PageContent>
	)
}
