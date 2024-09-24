import React, { type FC } from 'react'
import { type VideoItem } from 'src/types/videos'
import cnBind from 'classnames/bind'
import { Link, useLocation } from 'react-router-dom'

import { mainFormatDate } from 'src/helpers/utils'

import styles from './index.module.scss'

type AsideVideosProps = {
	previewCount?: number
	videosList?: VideoItem[]
	orient?: 'horizontal' | 'vertical'
	title?: string
}
export const AsideVideos: FC<AsideVideosProps> = ({
	previewCount = 3,
	videosList,
	title,
	orient = 'vertical',
}) => {
	const location = useLocation()
	const baseUrl = location.pathname.split('/').slice(0, -1).join('/')

	const cx = cnBind.bind(styles)

	if (!videosList) return null
	return (
		<aside className={cx(styles.asideVideos, { [styles._horizontal]: orient === 'horizontal' })}>
			{title && <h4>{title}</h4>}
			<ul>
				{[...videosList].slice(0, previewCount).map((videoEl) => (
					<li key={videoEl.id}>
						<iframe
							src={videoEl.url}
							allow='encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'
							allowFullScreen
						></iframe>
						<Link to={`${baseUrl}/${videoEl.id}`}>{videoEl.title}</Link>
						<span>{mainFormatDate(videoEl.date)}</span>
					</li>
				))}
			</ul>
		</aside>
	)
}
