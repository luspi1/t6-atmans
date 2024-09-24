import { Link, useParams } from 'react-router-dom'

import { customFormatDate } from 'src/helpers/utils'
import { Loader } from 'src/components/loader/loader'
import { AppRoute } from 'src/routes/main-routes/consts'

import styles from './index.module.scss'
import { useGetGroupAllNewsQuery, useGetGroupNewsByIdQuery } from 'src/store/groups/groups.api'
import { AsideNews } from 'src/components/aside-news/aside-news'

export const GroupNewsDetails = () => {
	const { id, newsId } = useParams()
	const { data: newsList } = useGetGroupAllNewsQuery({ groupId: id })
	const { data: newsItemData, isLoading } = useGetGroupNewsByIdQuery({
		groupId: id,
		newsId,
	})

	if (isLoading) return <Loader />
	if (!newsItemData) return null
	return (
		<div className={styles.newsItemPage}>
			<div className={styles.newsItemPageContent}>
				<h2>{newsItemData?.title}</h2>
				<span className={styles.newsItemDate}>
					{customFormatDate(newsItemData?.date, {
						day: 'numeric',
						month: 'long',
						year: 'numeric',
					})}
				</span>
				<div className={styles.newsItemMainImg}>
					<img src={newsItemData?.preview} alt={newsItemData?.title} />
				</div>
				{newsItemData?.textNews?.map((textEl, idx) => (
					<p className={styles.newsText} key={idx}>
						{textEl}
					</p>
				))}
				<ul className={styles.newsGallery}>
					{newsItemData?.imgGallery?.map((imgEl, idx) => (
						<li className={styles.galleryImg} key={idx}>
							<img src={imgEl} alt='gallery image' />
						</li>
					))}
				</ul>
				<div className={styles.allNewsBlock}>
					<Link to={`/${AppRoute.Groups}/${id}/${AppRoute.News}`}>К новостям группы</Link>
				</div>
			</div>
			<AsideNews currentNewsId={newsId} newsList={newsList} previewCount={4} />
		</div>
	)
}
