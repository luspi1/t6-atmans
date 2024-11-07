import React, { type FC } from 'react'
import { useParams } from 'react-router-dom'
import { createBreakpoint } from 'react-use'

import { CustomText } from 'src/components/custom-text/custom-text'
import { mainFormatDate } from 'src/helpers/utils'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'
import { AsideVideos } from 'src/components/aside-videos/aside-videos'
import { useGetVideoByIdQuery } from 'src/store/videos/videos.api'
import { DisplayBreakpoints } from 'src/helpers/consts'

import styles from './index.module.scss'

const useBreakPoint = createBreakpoint({ M: DisplayBreakpoints.Md, S: DisplayBreakpoints.Sm })

export const VideoDetails: FC = () => {
	const { id } = useParams()
	const { data: videoDetails } = useGetVideoByIdQuery(id ?? '')
	const breakpoint = useBreakPoint()
	useAdditionalCrumbs(videoDetails?.title)

	if (!videoDetails) return

	return (
		<div className={styles.videoDetailPage}>
			<h2>{videoDetails?.title}</h2>
			<CustomText
				$fontSize={breakpoint !== 'M' ? '18px' : '16px'}
				$color={breakpoint !== 'M' ? '#DE0008' : '#9D9D9D'}
				$margin={breakpoint !== 'M' ? '0 0 30px 0' : '0 0 20px 0'}
			>
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
