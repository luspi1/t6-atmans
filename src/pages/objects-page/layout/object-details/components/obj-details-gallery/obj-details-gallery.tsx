import React, { type FC } from 'react'
import { useParams } from 'react-router-dom'

import { GalleryImg } from 'src/components/image-gallery/image-gallery'
import { useGetObjectByIdQuery } from 'src/store/objects/objects.api'

import styles from './index.module.scss'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'

export const ObjDetailsGallery: FC = () => {
	const { id } = useParams()

	const { data: objectData } = useGetObjectByIdQuery(id ?? '')

	return (
		<section className={styles.gallerySection}>
			<GalleryImg className={styles.objPhotos} images={objectData?.photos} limit={9} />
			<RenderedArray
				className={styles.galleryDescs}
				strArray={objectData?.descList}
				asStr='p'
				as='div'
			/>
		</section>
	)
}
