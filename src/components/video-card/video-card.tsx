import { type CardVideoItem } from 'src/types/videos'
import { type FC } from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import { AppRoute } from 'src/routes/main-routes/consts'

import styles from './index.module.scss'

type VideoCardProps = {
	className?: string
} & CardVideoItem

export const VideoCard: FC<VideoCardProps> = ({ className, id, title, thumb, duration }) => {
	return (
		<Link className={cn(styles.videoCard, className)} to={`/${AppRoute.Videos}/${id}`}>
			<div className={styles.videoThumbWrapper}>
				<img src={thumb} alt={title} />
				<span className={styles.videoDuration}>{duration}</span>
			</div>
			<p>{title}</p>
		</Link>
	)
}
