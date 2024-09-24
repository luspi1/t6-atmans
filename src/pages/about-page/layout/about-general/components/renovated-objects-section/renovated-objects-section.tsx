import { type FC } from 'react'

import { renovatedObject } from 'src/pages/about-page/layout/about-general/consts'

import styles from './index.module.scss'

export const RenovatedObjectsSection: FC = () => {
	return (
		<section>
			<h4>Крупнейшие этноспортивные направления России</h4>
			<ul className={styles.linkList}>
				{renovatedObject.map((item) => (
					<li key={item.id}>
						<a href={item.link}>{item.title}</a>
					</li>
				))}
			</ul>
		</section>
	)
}
