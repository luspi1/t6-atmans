import { type FC } from 'react'

import cn from 'classnames'
import { Link } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { AppRoute } from 'src/routes/main-routes/consts'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { useGetHomeNewsQuery } from 'src/store/home/home.api'
import { formatDateRange, mainFormatDate } from 'src/helpers/utils'

import styles from './index.module.scss'

export const NewsSection: FC = () => {
	const { data: newsList } = useGetHomeNewsQuery(null)

	return (
		<section className={cn(styles.newsSection, '_bordered')}>
			<Container>
				<FlexRow $margin='0 0 10px 0' $alignItems='center' $justifyContent='space-between'>
					<h4>Новости</h4>
					<MainButton as='route' to={AppRoute.News}>
						Все новости
					</MainButton>
				</FlexRow>
				{newsList?.length && (
					<div className={styles.newsList}>
						{newsList.map((newsEl) => (
							<Link
								className={styles.newsItem}
								to={`${AppRoute.News}/${newsEl.id}`}
								key={newsEl.id}
							>
								<div className={styles.newsImgWrapper}>
									<img src={newsEl.imgUrl} alt={newsEl.title} />
								</div>
								<div className={styles.newsItemContent}>
									<h6>{newsEl.title}</h6>
									<p className={styles.newsDate}>
										{newsEl.date.length > 1
											? formatDateRange(newsEl.date as [Date, Date])
											: mainFormatDate(newsEl.date[0])}
									</p>
									<p>{newsEl?.desc}</p>
								</div>
							</Link>
						))}
					</div>
				)}
			</Container>
		</section>
	)
}
