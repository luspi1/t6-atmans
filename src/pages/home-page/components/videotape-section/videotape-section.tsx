import { type FC } from 'react'

import cn from 'classnames'

import { Container } from 'src/UI/Container/Container'
import { AppRoute } from 'src/routes/main-routes/consts'
import { useGetHomeVideosQuery } from 'src/store/home/home.api'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { VideoCard } from 'src/components/video-card/video-card'

import styles from './index.module.scss'

export const VideotapeSection: FC = () => {
	const { data: videos } = useGetHomeVideosQuery(null)

	return (
		<section className={cn(styles.videotapeSection, '_bordered')}>
			<Container className={styles.videotapeTop}>
				<FlexRow $margin='0 0 25px 0' $alignItems='center' $justifyContent='space-between'>
					<h4>Видеолента</h4>
					<MainButton as='route' to={AppRoute.Videos}>
						Все видео
					</MainButton>
				</FlexRow>
				<div className={styles.videosList}>
					{videos?.map((videoItem) => <VideoCard key={videoItem.id} {...videoItem} />)}
				</div>
			</Container>
		</section>
	)
}
