import { type CardNewsItem } from 'src/types/news'
import { type FC } from 'react'
import { Link } from 'react-router-dom'
import { AppRoute } from 'src/routes/main-routes/consts'
import { formatDateRange, mainFormatDate } from 'src/helpers/utils'

import styles from './index.module.scss'

type NewsCardProps = {
	className?: string
} & CardNewsItem

export const NewsCard: FC<NewsCardProps> = ({ id, imgUrl, title, date, desc }) => {
	return (
		<Link className={styles.newsItem} to={`/${AppRoute.News}/${id}`}>
			<div className={styles.newsImgWrapper}>
				<img src={imgUrl} alt={title} />
			</div>
			<div className={styles.newsItemContent}>
				<h6>{title}</h6>
				<p className={styles.newsDate}>
					{date.length > 1 ? formatDateRange(date as [Date, Date]) : mainFormatDate(date[0])}
				</p>
				<p className={styles.newsDesc}>{desc}</p>
			</div>
		</Link>
	)
}
