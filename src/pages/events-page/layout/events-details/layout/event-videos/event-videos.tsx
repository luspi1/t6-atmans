import React, { type FC } from 'react'

import { GridRow } from 'src/components/grid-row/grid-row'
import { useGetHomeVideosQuery } from 'src/store/home/home.api'
import { VideoCard } from 'src/components/video-card/video-card'

import styles from './index.module.scss'

export const EventVideos: FC = () => {
	const { data: videos } = useGetHomeVideosQuery(null)

	return (
		<div className={styles.videosTabContent}>
			<h4>Видеозаписи события</h4>
			<GridRow $template='auto / repeat(auto-fit, minmax(280px, 280px))' $gap='20px'>
				{videos?.map((videoEl) => <VideoCard key={videoEl.id} {...videoEl} />)}
			</GridRow>
		</div>
	)
}
