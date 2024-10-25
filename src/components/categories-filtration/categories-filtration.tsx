import { type CategoryItem } from 'src/types/global'
import { type FC } from 'react'
import cn from 'classnames'

import styles from './index.module.scss'

type CategoriesFiltrationProps = {
	activeCatId: string
	changeActiveCatId: (arg: string) => void
	categories: CategoryItem[]
}

export const CategoriesFiltration: FC<CategoriesFiltrationProps> = ({
	categories,
	changeActiveCatId,
	activeCatId,
}) => {
	if (!categories?.length) return
	return (
		<ul className={styles.categoriesFiltration}>
			{categories.map((catEl) => (
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
