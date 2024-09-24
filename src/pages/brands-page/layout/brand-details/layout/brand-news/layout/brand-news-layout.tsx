import React, { type FC } from 'react'

import { Outlet } from 'react-router-dom'
import { NewsNavigation } from 'src/components/news-navigation/news-navigation'

import styles from './index.module.scss'

export const BrandNewsLayout: FC = () => {
	return (
		<div className={styles.newsTabContent}>
			<NewsNavigation
				customNav={[
					{ title: 'Новости', link: '', exact: true },
					{ title: 'Видеолента', link: 'videos' },
				]}
			/>
			<Outlet />
		</div>
	)
}
