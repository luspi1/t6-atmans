import { type FC } from 'react'
import { type ContentNav } from 'src/types/navigation'

import { Outlet, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { PageContent } from 'src/components/page-content/page-content'
import { useLocationMatch } from 'src/hooks/location-match'
import { AppRoute } from 'src/routes/main-routes/consts'
import { UserInfo } from 'src/pages/participation-page/layout/user-details/components/user-info/user-info'
import { TabNav } from 'src/components/tab-nav/tab-nav'
import { UserInfoNavItems } from 'src/pages/participation-page/layout/user-details/layout/consts'

import styles from './index.module.scss'
export const UserDetailsLayout: FC = () => {
	const [matchesLocation] = useLocationMatch<ContentNav>([`${AppRoute.Users}/:id`])

	if (matchesLocation) return <Navigate to={AppRoute.UserInfo} replace />
	return (
		<PageContent
			className={styles.userDetailsContent}
			$padding='30px 30px 40px 30px'
			$maxWidth='1220px'
		>
			<Helmet>
				<title>Информация о пользователе</title>
			</Helmet>
			<UserInfo />
			<TabNav className={styles.userTabs} navItems={UserInfoNavItems} isTitle />
			<Outlet />
			<Link className={styles.usersListLink} to={`/${AppRoute.Users}`}>
				На страницу списка участников
			</Link>
		</PageContent>
	)
}
