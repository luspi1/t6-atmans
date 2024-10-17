import { type FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './index.module.scss'

type CultureElementProps = {
	id: string
	title: string
	desc: string
}

export const CultureElement: FC<CultureElementProps> = ({ id, title, desc }) => {
	return (
		<div className={styles.cultureElem}>
			<h6>{title}</h6>
			<p>{desc}</p>
			<Link to={id}>Перейти на страницу культурного элемента</Link>
		</div>
	)
}
