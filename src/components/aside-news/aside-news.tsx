import { type FC } from 'react'
import { type CardNewsItem } from 'src/types/news'
import { Link, useLocation } from 'react-router-dom'

import { mainFormatDate } from 'src/helpers/utils'

import styles from './index.module.scss'

type AsideNewsProps = {
	previewCount?: number
	currentNewsId?: string
	newsList?: CardNewsItem[]
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
							<span>{mainFormatDate(newsEl.date[0])}</span>
							<Link to={`${baseUrl}/${newsEl.id}`}>{newsEl.title}</Link>
						</li>
					))}
			</ul>
		</aside>
	)
}
