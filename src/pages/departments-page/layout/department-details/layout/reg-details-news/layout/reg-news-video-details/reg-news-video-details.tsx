import React, { type FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import cn from 'classnames'

import { CustomText } from 'src/components/custom-text/custom-text'
import { mainFormatDate } from 'src/helpers/utils'
import { AsideVideos } from 'src/components/aside-videos/aside-videos'
import { AppRoute } from 'src/routes/main-routes/consts'
import { useGetRegionNewsVideoByIdQuery } from 'src/store/regions/regions.api'

import mainGroupsStyles from 'src/pages/groups-page/layout/group-details/layout/index.module.scss'
import styles from './index.module.scss'

export const RegNewsVideoDetails: FC = () => {
	const { id, vidId } = useParams()
	const { data: videoDetails } = useGetRegionNewsVideoByIdQuery({ regCode: id, videoId: vidId })

	if (!videoDetails) return

	return (
		<div className={cn(mainGroupsStyles.groupTabContent, styles.videoDetailTab)}>
			<h2>{videoDetails?.title}</h2>
			<CustomText $fontSize='16px' $color='#9D9D9D' $margin='0 0 28px 0'>
				{mainFormatDate(videoDetails?.date)}
			</CustomText>
			<div className={styles.videoContentWrapper}>
				<div className={styles.mainVideo}>
					<iframe
						src={videoDetails?.url}
						allow='encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'
						allowFullScreen
					></iframe>
				</div>
				<AsideVideos videosList={videoDetails.similarVideos} />
			</div>
			<Link
				className={mainGroupsStyles.groupsListLink}
				to={`/${AppRoute.Departments}/${id}/${AppRoute.News}/${AppRoute.Videos}`}
			>
				К видеозаписям отделения
			</Link>
		</div>
	)
}
