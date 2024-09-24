import React, { type FC } from 'react'
import { useGetNewsVideoByIdQuery } from 'src/store/news/news.api'
import { useParams } from 'react-router-dom'
import styles from './index.module.scss'
import { CustomText } from 'src/components/custom-text/custom-text'
import { mainFormatDate } from 'src/helpers/utils'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'
import { AsideVideos } from 'src/components/aside-videos/aside-videos'

export const VideoDetails: FC = () => {
	const { id } = useParams()
	const { data: videoDetails } = useGetNewsVideoByIdQuery(id ?? '')

	useAdditionalCrumbs(videoDetails?.title)

	if (!videoDetails) return

	return (
		<div className={styles.videoDetailPage}>
			<h2>{videoDetails?.title}</h2>
			<CustomText $fontSize='16px' $color='#9D9D9D' $margin='0 0 20px 0'>
				{mainFormatDate(videoDetails?.date)}
			</CustomText>
			<div className={styles.mainVideo}>
				<iframe
					src={videoDetails?.url}
					allow='encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'
					allowFullScreen
				></iframe>
			</div>
			<AsideVideos
				videosList={videoDetails?.similarVideos}
				title='Похожие видео'
				previewCount={4}
				orient='horizontal'
			/>
		</div>
	)
}
