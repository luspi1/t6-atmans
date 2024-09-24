import React, { type FC } from 'react'
import { useParams } from 'react-router-dom'
import { useGetDisciplineByIdQuery } from 'src/store/disciplines/disciplines.api'
import { Loader } from 'src/components/loader/loader'
import { VideoGallery } from 'src/components/video-gallery/video-gallery'

import styles from './index.module.scss'
export const DisGalleryVideos: FC = () => {
	const { id } = useParams()
	const { data: disDetails, isLoading } = useGetDisciplineByIdQuery(id ?? '')
	if (isLoading) return <Loader />
	return (
		<section>
			<p className={styles.disGalleryDesc}>
				Всего видеозаписей: <b>{disDetails?.videos?.length}</b>
			</p>
			<VideoGallery videos={disDetails?.videos} />
		</section>
	)
}
