import { type FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { type NewsItem } from 'src/types/news'

import { customFormatDate } from 'src/helpers/utils'

import styles from './index.module.scss'

type AsideNewsProps = {
	previewCount?: number
	currentNewsId?: string
	newsList?: NewsItem[]
}
export const AsideNews: FC<AsideNewsProps> = ({
	previewCount = 4,
	currentNewsId = '',
	newsList,
}) => {
	const location = useLocation()
	const baseUrl = location.pathname.split('/').slice(0, -1).join('/')

	if (!newsList) return null
	return (
		<aside className={styles.asideNews}>
			<h6>Другие новости:</h6>
			<ul>
				{[...newsList]
					.filter((el) => el.id !== currentNewsId)
					.reverse()
					.slice(0, previewCount)
					.map((newsEl) => (
						<li key={newsEl.id}>
							<span>{customFormatDate(newsEl.date, { day: 'numeric', month: 'long' })}</span>
							<Link to={`${baseUrl}/${newsEl.id}`}>{newsEl.title}</Link>
						</li>
					))}
			</ul>
		</aside>
	)
}
