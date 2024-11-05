import React, { type FC } from 'react'

import { galleryContent } from 'src/pages/about-page/layout/about-general/consts'

import styles from './index.module.scss'
import { GalleryImg } from 'src/components/image-gallery/image-gallery'

export const GallerySection: FC = () => {
	return (
		<section className={styles.gallerySection}>
			<h5>Фотогалерея</h5>
			<GalleryImg className={styles.galleryPhotos} images={galleryContent} variant='slider' />
		</section>
	)
}
