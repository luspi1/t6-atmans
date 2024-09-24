import React, { type FC } from 'react'
import { type NavigationItem } from 'src/types/navigation'

import { useLocation } from 'react-router-dom'

import { TabNav } from 'src/components/tab-nav/tab-nav'
import cn from 'classnames'

import styles from './index.module.scss'

type NewsNavigationProps = {
	className?: string
	customNav?: NavigationItem[]
}

export const NewsNavigation: FC<NewsNavigationProps> = ({ className, customNav }) => {
	const location = useLocation()
	const isDetailPage =
		/\/news\/\d+$/.test(location.pathname) || /\/videos\/\d+$/.test(location.pathname)
	return (
		<div className={cn(styles.newsNav, className)}>
			{!isDetailPage && (
				<TabNav
					className={styles.newsTabs}
					activeClassName={styles.activeNewsTab}
					navItems={
						customNav ?? [
							{ title: 'Новости', link: '/news', exact: true },
							{ title: 'Видеолента', link: '/videos' },
						]
					}
				/>
			)}
		</div>
	)
}
