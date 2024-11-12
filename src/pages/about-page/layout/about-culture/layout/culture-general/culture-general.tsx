import React, { type FC } from 'react'

import { galleryContent } from 'src/pages/about-page/layout/about-general/consts'
import { useGetAllCulturesQuery } from 'src/store/cultures/cultures.api'
import { useBreakPoint } from 'src/hooks/useBreakPoint/useBreakPoint'

import { CultureElement } from 'src/components/culture-element/culture-element'
import { GalleryImg } from 'src/components/image-gallery/image-gallery'

import styles from './index.module.scss'
import cultureStyles from '../../index.module.scss'

export const CultureGeneral: FC = () => {
	const { data: culturesList } = useGetAllCulturesQuery(null)
	const breakpoint = useBreakPoint()
	return (
		<div>
			<h2>Материальная культура</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
				Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
				sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
				mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
				pronin sapien nunc accuan eget.
			</p>
			<GalleryImg
				variant={breakpoint === 'M' ? 'list' : 'slider'}
				className={cultureStyles.galleryPhotos}
				images={galleryContent}
			/>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
				Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
				sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
				mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
				pronin sapien nunc accuan eget.
			</p>
			{culturesList?.length && (
				<div className={styles.culturesList}>
					<h5>Культурные элементы</h5>
					{culturesList.map(({ id, desc, title }) => (
						<CultureElement key={id} id={id} title={title} desc={desc} />
					))}
				</div>
			)}
		</div>
	)
}
