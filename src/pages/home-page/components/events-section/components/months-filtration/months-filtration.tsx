import { useGetHomeEventCategoriesQuery } from 'src/store/home/home.api'
import { useState } from 'react'
import cn from 'classnames'

import styles from './index.module.scss'

export const MonthsFiltration = () => {
	const { data: categories } = useGetHomeEventCategoriesQuery(null)

	const [activeCatId, setActiveCatId] = useState<string>('0')

	if (!categories?.length) return
	return (
		<ul className={styles.categoriesFiltration}>
			{[{ id: '0', title: 'Все события' }, ...categories].map((catEl) => (
				<li
					className={cn({ [styles._active]: activeCatId === catEl.id })}
					key={catEl.id}
					onClick={() => setActiveCatId(catEl.id)}
				>
					{catEl.title}
				</li>
			))}
		</ul>
	)
}
