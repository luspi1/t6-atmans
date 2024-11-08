import React, { type FC } from 'react'

import { Outlet } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { BreadCrumbs } from 'src/modules/bread-crumbs/bread-crumbs'
import { PageContent } from 'src/components/page-content/page-content'

import styles from './index.module.scss'

export const VideosLayout: FC = () => {
	return (
		<>
			<Container>
				<BreadCrumbs
					crumbsLinksMap={[
						{
							title: 'Видеолента',
							link: 'videos',
						},
					]}
				/>
			</Container>
			<Container className={styles.videosContainer} $paddingAdaptive='0'>
				<PageContent className={styles.videosPageContent}>
					<Outlet />
				</PageContent>
			</Container>
		</>
	)
}
