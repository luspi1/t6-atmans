import React, { type FC } from 'react'
import { useParams } from 'react-router-dom'

import { GalleryImg } from 'src/components/image-gallery/image-gallery'
import { useGetObjectPhotosQuery } from 'src/store/objects/objects.api'

import styles from './index.module.scss'

export const ObjDetailsGallery: FC = () => {
	const { id } = useParams()
	const { data: photos } = useGetObjectPhotosQuery(id ?? '')

	return (
		<div className={styles.galleryPage}>
			<p className={styles.itemsCount}>Всего фото: {photos?.length}</p>
			<GalleryImg className={styles.groupPhotos} images={photos} limit={12} limitController />
		</div>
	)
}
