import { type FC } from 'react'
import { type ContentNav } from 'src/types/navigation'

import { Outlet, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { PageContent } from 'src/components/page-content/page-content'
import { useLocationMatch } from 'src/hooks/location-match'
import { AppRoute } from 'src/routes/main-routes/consts'
import { TabNav } from 'src/components/tab-nav/tab-nav'
import { BrandInfo } from 'src/pages/brands-page/layout/brand-details/components/brand-info/brand-info'
import { BrandInfoNavItems } from 'src/pages/brands-page/layout/brand-details/layout/consts'

import styles from './index.module.scss'

export const BrandDetailsLayout: FC = () => {
	const [matchesLocation] = useLocationMatch<ContentNav>([`${AppRoute.Brands}/:id`])

	if (matchesLocation) return <Navigate to={AppRoute.News} replace />
	return (
		<PageContent
			className={styles.brandDetailsContent}
			$padding='30px 30px 40px 30px'
			$maxWidth='1220px'
		>
			<Helmet>
				<title>Информация о бренде</title>
			</Helmet>
			<BrandInfo />
			<TabNav className={styles.brandTabs} navItems={BrandInfoNavItems} />
			<Outlet />
			<Link className={styles.brandsListLink} to={`/${AppRoute.Brands}`}>
				На страницу списка брендов событий
			</Link>
		</PageContent>
	)
}
