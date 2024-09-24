import React, { type FC } from 'react'
import { type EthnosportDisciplineItem } from 'src/types/ethnosportDiscipline'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import styles from './index.module.scss'

type DisciplinesListProps = {
	disciplinesData?: EthnosportDisciplineItem[]
	className?: string
}
export const DisciplinesList: FC<DisciplinesListProps> = ({ disciplinesData, className }) => {
	if (!disciplinesData?.length) return null
	return (
		<ul className={cn(styles.disciplinesList, className)}>
			{disciplinesData?.map((disciplineEl) => (
				<li key={disciplineEl.id}>
					<div className={styles.disciplineElContent}>
						<h5>{disciplineEl.title}</h5>
						<div className={styles.disciplineElCategories}>
							{disciplineEl?.categories?.map((category, idx) => <span key={idx}>{category}</span>)}
						</div>
						<p className={styles.disciplineElDesc}>{disciplineEl.mainDesc}</p>
						<div className={styles.disciplineElBottom}>
							<Link to={`/disciplines/${disciplineEl.id}`}>Перейти на страницу дисциплины</Link>
							<ul>
								<li>Отделений: 7</li>
								<li>Участников: 20</li>
								<li>Событий: 19</li>
							</ul>
						</div>
					</div>
					<div className={styles.disciplineElImg}>
						<img src={disciplineEl.imgUrl} alt={disciplineEl.title} />
					</div>
				</li>
			))}
		</ul>
	)
}
