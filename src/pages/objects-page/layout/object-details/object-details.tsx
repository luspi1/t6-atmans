import { type FC } from 'react'
import { Link } from 'react-router-dom'

import { PageContent } from 'src/components/page-content/page-content'
import { AppRoute } from 'src/routes/main-routes/consts'
import { ObjectHeader } from 'src/pages/objects-page/layout/object-details/components/object-header/object-header'
import { ObjDetailsGallery } from 'src/pages/objects-page/layout/object-details/components/obj-details-gallery/obj-details-gallery'
import { ObjDetailsNews } from 'src/pages/objects-page/layout/object-details/components/obj-details-news/obj-details-news'
import { ObjDetailsMap } from 'src/pages/objects-page/layout/object-details/components/obj-details-map/obj-details-map'
import { ObjDetailsVideos } from 'src/pages/objects-page/layout/object-details/components/obj-details-videos/obj-details-videos'
import { ObjDetailsEvents } from 'src/pages/objects-page/layout/object-details/components/obj-details-events/obj-details-events'

import styles from './index.module.scss'

export const ObjectDetails: FC = () => {
	return (
		<PageContent className={styles.objDetailsPage}>
			<ObjectHeader />
			<ObjDetailsGallery />
			<ObjDetailsEvents />
			<ObjDetailsNews />
			<ObjDetailsVideos />
			<ObjDetailsMap />
			<Link className={styles.pageMainLink} to={`/${AppRoute.Objects}`}>
				На страницу списка объектов
			</Link>
		</PageContent>
	)
}
