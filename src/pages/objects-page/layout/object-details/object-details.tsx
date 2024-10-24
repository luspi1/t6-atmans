import { type FC } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { PageContent } from 'src/components/page-content/page-content'
import { AppRoute } from 'src/routes/main-routes/consts'
import { ObjectHeader } from 'src/pages/objects-page/layout/object-details/components/object-header/object-header'

import styles from './index.module.scss'
import { ObjDetailsGallery } from 'src/pages/objects-page/layout/object-details/components/obj-details-gallery/obj-details-gallery'
import { ObjDetailsNews } from 'src/pages/objects-page/layout/object-details/components/obj-details-news/obj-details-news'

export const ObjectDetails: FC = () => {
	return (
		<PageContent className={styles.objDetailsPage}>
			<ObjectHeader />
			<ObjDetailsGallery />
			<ObjDetailsNews />
			<Outlet />
			<Link className={styles.pageMainLink} to={`/${AppRoute.Objects}`}>
				На страницу списка объектов
			</Link>
		</PageContent>
	)
}
