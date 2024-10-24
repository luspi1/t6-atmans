import { type FC } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { PageContent } from 'src/components/page-content/page-content'
import { AppRoute } from 'src/routes/main-routes/consts'
import { ObjectHeader } from 'src/pages/objects-page/layout/object-details/components/object-header/object-header'

import styles from './index.module.scss'

export const ObjectDetails: FC = () => {
	return (
		<PageContent $padding='30px 35px 30px 30px'>
			<ObjectHeader />
			<Outlet />
			<Link className={styles.pageMainLink} to={`/${AppRoute.Objects}`}>
				На страницу списка объектов
			</Link>
		</PageContent>
	)
}
