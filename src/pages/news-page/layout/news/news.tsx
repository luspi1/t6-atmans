import React, { type FC } from 'react'

import { PageContent } from 'src/components/page-content/page-content'

import styles from './index.module.scss'

import { FilteredNewsList } from 'src/pages/news-page/layout/news/components/filtered-news-list/filtered-news-list'

export const News: FC = () => {
	return (
		<PageContent className={styles.newsListPage}>
			<FilteredNewsList />
		</PageContent>
	)
}
