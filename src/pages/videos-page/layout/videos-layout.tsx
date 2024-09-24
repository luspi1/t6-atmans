import React, { type FC } from 'react'
import { Container } from 'src/UI/Container/Container'
import { BreadCrumbs } from 'src/modules/bread-crumbs/bread-crumbs'
import { Outlet } from 'react-router-dom'
import { NewsNavigation } from 'src/components/news-navigation/news-navigation'

import { PageContent } from 'src/components/page-content/page-content'
import styles from './index.module.scss'

export const VideosLayout: FC = () => {
	return (
		<Container>
			<BreadCrumbs
				crumbsLinksMap={[
					{
						title: 'Все новости',
						link: 'news',
					},
					{
						title: 'Видеолента',
						link: 'videos',
					},
				]}
			/>
			<PageContent $padding='30px 40px 55px 30px' $maxWidth='100%'>
				<NewsNavigation className={styles.newsLayoutNav} />
				<Outlet />
			</PageContent>
		</Container>
	)
}
