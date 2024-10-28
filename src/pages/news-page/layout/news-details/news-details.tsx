import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { type CardNewsItem } from 'src/types/news'

import { PageContent } from 'src/components/page-content/page-content'
import { useGetAllNewsMonthsQuery, useGetNewsByIdQuery } from 'src/store/news/news.api'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'
import { formatDateRange, mainFormatDate } from 'src/helpers/utils'
import { GalleryImg } from 'src/components/image-gallery/image-gallery'
import { AppRoute } from 'src/routes/main-routes/consts'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'
import { AsideNews } from 'src/components/aside-news/aside-news'

import styles from './index.module.scss'

export const NewsDetails = () => {
	const { id } = useParams()
	const { data: allNews, isSuccess: isSuccessAllNews } = useGetAllNewsMonthsQuery(null)
	const { data: newsItemData } = useGetNewsByIdQuery(id ?? '')
	useAdditionalCrumbs(newsItemData?.title)

	const [newsArray, setNewsArray] = useState<CardNewsItem[]>([])

	useEffect(() => {
		if (isSuccessAllNews) {
			const flattenedNewsArray = Object.values(allNews).flat() as unknown as CardNewsItem[]
			setNewsArray(flattenedNewsArray)
		}
	}, [isSuccessAllNews, allNews])
	if (!newsItemData) return null

	return (
		<div className={styles.newsItemPage}>
			<PageContent className={styles.newsItemPageContent}>
				<h2>{newsItemData.title}</h2>
				<span className={styles.newsItemDate}>
					{newsItemData.date.length > 1
						? formatDateRange(newsItemData.date as [Date, Date])
						: mainFormatDate(newsItemData?.date[0])}
				</span>
				<div className={styles.newsItemMainImg}>
					<img src={newsItemData?.preview} alt={newsItemData?.title} />
				</div>
				<RenderedArray
					className={styles.newsDescs}
					strArray={newsItemData?.textNews}
					asStr='p'
					as='div'
				/>
				<GalleryImg listClassName={styles.newsGallery} images={newsItemData.imgGallery} />
				<div className={styles.allNewsBlock}>
					<Link to={`/${AppRoute.News}`}>Все новости</Link>
				</div>
			</PageContent>
			<AsideNews currentNewsId={id ?? ''} newsList={newsArray} />
		</div>
	)
}
