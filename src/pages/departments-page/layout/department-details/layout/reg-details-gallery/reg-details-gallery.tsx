import React, { type FC } from 'react'
import { useParams } from 'react-router-dom'

import { useGetRegionPhotosQuery } from 'src/store/regions/regions.api'
import { GalleryImg } from 'src/components/image-gallery/image-gallery'
import styles from './index.module.scss'

export const RegDetailsGallery: FC = () => {
	const { id } = useParams()
	const { data: photos } = useGetRegionPhotosQuery(id ?? '')

	return (
		<div className={styles.galleryPage}>
			<p className={styles.itemsCount}>Всего фото: {photos?.length}</p>
			<GalleryImg className={styles.groupPhotos} images={photos} limit={12} limitController />
		</div>
	)
}
