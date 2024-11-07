import React, { type FC } from 'react'

import { Outlet } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { BreadCrumbs } from 'src/modules/bread-crumbs/bread-crumbs'
import { PageContent } from 'src/components/page-content/page-content'

import styles from './index.module.scss'

export const VideosLayout: FC = () => {
	return (
		<>
			<Container className={styles.videosContainer}>
				<BreadCrumbs
					crumbsLinksMap={[
						{
							title: 'Видеолента',
							link: 'videos',
						},
					]}
				/>
				<PageContent className={styles.videosPageContent}>
					<Outlet />
				</PageContent>
			</Container>
		</>
	)
}
