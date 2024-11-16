import React, { type FC } from 'react'

import { GalleryImg } from 'src/components/image-gallery/image-gallery'
import { useGetAboutGeneralQuery } from 'src/store/about/about.api'

import styles from './index.module.scss'

export const GallerySection: FC = () => {
	const { data: aboutPageData } = useGetAboutGeneralQuery(null)
	if (!aboutPageData) return null

	return (
		<section className={styles.gallerySection}>
			<h5>Фотогалерея</h5>
			<GalleryImg images={aboutPageData.photoGallery} variant='slider' />
		</section>
	)
}
