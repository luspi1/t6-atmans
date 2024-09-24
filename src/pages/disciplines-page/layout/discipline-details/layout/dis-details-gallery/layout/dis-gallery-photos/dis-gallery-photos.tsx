import React, { type FC } from 'react'
import { useParams } from 'react-router-dom'
import { useGetDisciplineByIdQuery } from 'src/store/disciplines/disciplines.api'
import { Loader } from 'src/components/loader/loader'

import styles from './index.module.scss'
import { GalleryImg } from 'src/components/image-gallery/image-gallery'
export const DisGalleryPhotos: FC = () => {
	const { id } = useParams()
	const { data: disDetails, isLoading } = useGetDisciplineByIdQuery(id ?? '')
	if (isLoading) return <Loader />
	return (
		<section>
			<p className={styles.disGalleryDesc}>
				Всего фото: <b>{disDetails?.photos?.length}</b>
			</p>
			<GalleryImg images={disDetails?.photos} limit={10} limitController />
		</section>
	)
}
