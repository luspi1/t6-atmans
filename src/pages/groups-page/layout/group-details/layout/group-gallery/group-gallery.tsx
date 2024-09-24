import { type FC } from 'react'

import { useParams } from 'react-router-dom'

import { useGetGroupPhotoQuery } from 'src/store/groups/groups.api'
import { GalleryImg } from 'src/components/image-gallery/image-gallery'

import styles from './index.module.scss'
import mainGroupsStyles from '../index.module.scss'

export const GroupGallery: FC = () => {
	const { id } = useParams()

	const { data: photosData } = useGetGroupPhotoQuery(id ?? '')

	return (
		<div className={mainGroupsStyles.groupTabContent}>
			<section className={styles.groupGallery}>
				<p className={styles.galleryLengthInfo}>
					Всего фото: <b>{photosData?.length}</b>
				</p>
				<GalleryImg className={styles.groupPhotos} images={photosData} limit={12} limitController />
			</section>
		</div>
	)
}
