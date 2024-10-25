import styles from './index.module.scss'

import { PageContent } from 'src/components/page-content/page-content'

export const NewsDetails = () => {
	// const { id } = useParams()
	// const { data: newsItemData, isLoading } = useGetNewsByIdQuery(id ?? '')
	// useAdditionalCrumbs(newsItemData?.title)

	// if (isLoading) return <Loader />
	// if (!newsItemData) return null
	return (
		<div className={styles.newsItemPage}>
			<PageContent className={styles.newsItemPageContent} $padding='30px 40px 55px 30px'>
				<h2>Страница одной новости в работе...</h2>
				{/* <span className={styles.newsItemDate}> */}
				{/* 	{customFormatDate(newsItemData?.date, { */}
				{/* 		day: 'numeric', */}
				{/* 		month: 'long', */}
				{/* 		year: 'numeric', */}
				{/* 	})} */}
				{/* </span> */}
				{/* <div className={styles.newsItemMainImg}> */}
				{/* 	<img src={newsItemData?.preview} alt={newsItemData?.title} /> */}
				{/* </div> */}
				{/* {newsItemData?.textNews?.map((textEl, idx) => ( */}
				{/* 	<p className={styles.newsText} key={idx}> */}
				{/* 		{textEl} */}
				{/* 	</p> */}
				{/* ))} */}
				{/* <GalleryImg listClassName={styles.newsGallery} images={newsItemData.imgGallery} /> */}
				{/* <div className={styles.allNewsBlock}> */}
				{/* 	<Link to={`/${AppRoute.News}`}>Все новости</Link> */}
				{/* </div> */}
			</PageContent>
		</div>
	)
}
