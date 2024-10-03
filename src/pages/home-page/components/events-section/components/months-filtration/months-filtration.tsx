import { type FC } from 'react'
import cn from 'classnames'

import { useGetHomeEventCategoriesQuery } from 'src/store/home/home.api'

import styles from './index.module.scss'

type MonthsFiltrationProps = {
	activeCatId: string
	changeActiveCatId: (arg: string) => void
}

export const MonthsFiltration: FC<MonthsFiltrationProps> = ({ activeCatId, changeActiveCatId }) => {
	const { data: categories } = useGetHomeEventCategoriesQuery(null)

	if (!categories?.length) return
	return (
		<ul className={styles.categoriesFiltration}>
			{[{ id: '0', title: 'Все события' }, ...categories].map((catEl) => (
				<li
					className={cn({ [styles._active]: activeCatId === catEl.id })}
					key={catEl.id}
					onClick={() => changeActiveCatId(catEl.id)}
				>
					{catEl.title}
				</li>
			))}
		</ul>
	)
}
