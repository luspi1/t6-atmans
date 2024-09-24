import { type FC } from 'react'
import { type EthnosportDirection } from 'src/types/ethnosport'

import styles from './index.module.scss'
import { Link } from 'react-router-dom'

type DirectionsSectionProps = {
	directionsList: EthnosportDirection[]
}
export const DirectionsSection: FC<DirectionsSectionProps> = ({ directionsList = [] }) => {
	return (
		<section className={styles.directionsSection}>
			<h5>направления этноспорта</h5>
			<ul className={styles.directionsList}>
				{directionsList?.map((directionItem) => (
					<li key={directionItem.id}>
						<h6>{directionItem.title}</h6>
						<p>{directionItem.mainDesc}</p>
						<div className={styles.directionItemBottom}>
							<Link to={directionItem.id}>Перейти на страницу направления</Link>
							<div className={styles.directionItemInfo}>
								<span>Дисциплин: {directionItem.disciplines?.length ?? '0'}</span>
								<span>Отделений: 7</span>
								<span>Участников: {directionItem.participants?.length ?? '0'}</span>
								<span>Событий: {directionItem.events?.length ?? '0'}</span>
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}
