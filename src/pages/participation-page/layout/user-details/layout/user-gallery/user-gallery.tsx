import { type FC } from 'react'

import { Link, useParams } from 'react-router-dom'

import { useGetUserPhotoQuery, useGetUserVideoQuery } from 'src/store/users/users.api'
import { VideosList } from 'src/pages/participation-page/layout/user-details/layout/user-gallery/components/videos-list/videos-list'

import { GalleryImg } from 'src/components/image-gallery/image-gallery'
import styles from './index.module.scss'

export const UserGallery: FC = () => {
	const { id } = useParams()

	const { data: photosData } = useGetUserPhotoQuery(id ?? '')
	const { data: videosData } = useGetUserVideoQuery(id ?? '')

	return (
		<section className={styles.userGallery}>
			<div className={styles.galleryHeader}>
				<p className={styles.galleryLengthInfo}>
					Всего альбомов и видео: <b>({Number(photosData?.length) + Number(videosData?.length)})</b>
				</p>
			</div>

			<h4>Фото</h4>
			<GalleryImg className={styles.userPhotos} images={photosData} />
			<h4>Видео</h4>
			<VideosList videos={videosData} />

			<Link className={styles.allAlbumsLink} to='/'>
				Показать все альбомы и видео{' '}
				<b>({Number(photosData?.length) + Number(videosData?.length)})</b>
			</Link>
		</section>
	)
}
