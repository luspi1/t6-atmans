import React, { type FC } from 'react'
import { useParams } from 'react-router-dom'

import { GalleryImg } from 'src/components/image-gallery/image-gallery'
import { useGetObjectPhotosQuery } from 'src/store/objects/objects.api'

import styles from './index.module.scss'
import { Pagination } from 'src/components/pagination/pagination'

export const ObjDetailsGallery: FC = () => {
	const { id } = useParams()
	const { data: photos } = useGetObjectPhotosQuery(id ?? '')

	return (
		<div className={styles.galleryPage}>
			<p className={styles.itemsCount}>Всего фото: {photos?.length}</p>
			<GalleryImg className={styles.objPhotos} images={photos} limit={10} />
			<Pagination pagesCount={7} activePage={2} />
		</div>
	)
}
