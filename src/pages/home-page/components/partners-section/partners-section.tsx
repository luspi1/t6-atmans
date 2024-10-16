import { type FC } from 'react'

import cn from 'classnames'

import { Container } from 'src/UI/Container/Container'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { AppRoute } from 'src/routes/main-routes/consts'
import { useGetHomePartnersQuery } from 'src/store/home/home.api'

import styles from './index.module.scss'

export const PartnersSection: FC = () => {
	const { data: partners } = useGetHomePartnersQuery(null)
	return (
		<section className={cn(styles.partnersSection, '_bordered')}>
			<Container>
				<FlexRow
					className={styles.partnersTop}
					$margin='0 0 10px 0'
					$justifyContent='space-between'
				>
					<h4>Партнеры</h4>
					<MainButton as='route' to={AppRoute.Home} $variant='light'>
						Все партнеры
					</MainButton>
				</FlexRow>
				{partners?.length && (
					<ul className={styles.partnersList}>
						{partners.map((partnerEl) => (
							<li key={partnerEl.id}>
								<a href={partnerEl.link}>
									<img src={partnerEl.imgUrl} alt='partner' />
								</a>
							</li>
						))}
					</ul>
				)}
			</Container>
		</section>
	)
}
