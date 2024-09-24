import { type FC } from 'react'

import { useParams } from 'react-router-dom'

import { GalleryImg } from 'src/components/image-gallery/image-gallery'
import { useGetEventPhotoQuery } from 'src/store/events/events.api'

import styles from './index.module.scss'

export const EventGallery: FC = () => {
	const { id } = useParams()

	const { data: photosData } = useGetEventPhotoQuery(id ?? '')

	return (
		<div className={styles.eventGallery}>
			<p className={styles.galleryLengthInfo}>
				Всего фото: <b>{photosData?.length}</b>
			</p>
			<GalleryImg className={styles.eventPhotos} images={photosData} limit={12} limitController />
		</div>
	)
}
