import { type ObjectItem } from 'src/types/objects'
import { type FC } from 'react'
import { AppRoute } from 'src/routes/main-routes/consts'
import { Link } from 'react-router-dom'

import styles from './index.module.scss'

type ObjectCardProps = ObjectItem

export const ObjectCard: FC<ObjectCardProps> = ({ id, logo, title, address, mainDesc }) => {
	return (
		<Link className={styles.objCard} to={`/${AppRoute.Objects}/${id}`}>
			<div className={styles.objTop}>
				<img src={logo} alt={title} />
			</div>
			<div className={styles.objInfo}>
				<h6>{title}</h6>
				<p className={styles.objAddress}>{address}</p>
				<p className={styles.objDesc}>{mainDesc}</p>
			</div>
		</Link>
	)
}
