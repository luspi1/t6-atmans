import React, { type FC } from 'react'

import cn from 'classnames'
import { Outlet } from 'react-router-dom'
import { NewsNavigation } from 'src/components/news-navigation/news-navigation'

import mainGroupsStyles from 'src/pages/groups-page/layout/group-details/layout/index.module.scss'
import styles from './index.module.scss'

export const RegNewsLayout: FC = () => {
	return (
		<div className={cn(mainGroupsStyles.groupTabContent, styles.newsTabContent)}>
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
