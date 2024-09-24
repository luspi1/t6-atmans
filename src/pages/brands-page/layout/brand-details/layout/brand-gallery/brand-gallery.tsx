import { type FC } from 'react'

import { useParams } from 'react-router-dom'

import { GalleryImg } from 'src/components/image-gallery/image-gallery'

import { useGetBrandEventPhotosQuery } from 'src/store/brandEvents/brand-events.api'

import styles from './index.module.scss'

export const BrandGallery: FC = () => {
	const { id } = useParams()

	const { data: photosData } = useGetBrandEventPhotosQuery(id ?? '')

	return (
		<div>
			<section className={styles.brandGallery}>
				<p className={styles.galleryLengthInfo}>
					Всего фото: <b>{photosData?.length}</b>
				</p>
				<GalleryImg className={styles.brandPhotos} images={photosData} limit={12} limitController />
			</section>
		</div>
	)
}
