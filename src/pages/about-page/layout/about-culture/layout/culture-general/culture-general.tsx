import React, { type FC } from 'react'

import { useBreakPoint } from 'src/hooks/useBreakPoint/useBreakPoint'

import { CultureElement } from 'src/components/culture-element/culture-element'
import { GalleryImg } from 'src/components/image-gallery/image-gallery'
import { useGetAboutCultureQuery } from 'src/store/about/about.api'

import styles from './index.module.scss'
import cultureStyles from '../../index.module.scss'

export const CultureGeneral: FC = () => {
	const { data: aboutPageData } = useGetAboutCultureQuery(null)
	const breakpoint = useBreakPoint()
	if (!aboutPageData) return null

	return (
		<div>
			<h2>Материальная культура</h2>
			<p>{aboutPageData.topDesc}</p>
			<GalleryImg
				variant={breakpoint === 'M' ? 'list' : 'slider'}
				className={cultureStyles.galleryPhotos}
				images={aboutPageData.photoGallery}
			/>
			<p>{aboutPageData.bottomDesc}</p>
			{aboutPageData.cultures?.length && (
				<div className={styles.culturesList}>
					<h5>Культурные элементы</h5>
					{aboutPageData.cultures.map(({ id, desc, title }) => (
						<CultureElement key={id} id={id} title={title} desc={desc} />
					))}
				</div>
			)}
		</div>
	)
}
