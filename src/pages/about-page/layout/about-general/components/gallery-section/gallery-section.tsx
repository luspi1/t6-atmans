import React, { type FC } from 'react'

import { galleryContent } from 'src/pages/about-page/layout/about-general/consts'
import { GalleryImg } from 'src/components/image-gallery/image-gallery'

import styles from './index.module.scss'

export const GallerySection: FC = () => {
	return (
		<section className={styles.gallerySection}>
			<h5>Фотогалерея</h5>
			<GalleryImg images={galleryContent} variant='slider' />
		</section>
	)
}
