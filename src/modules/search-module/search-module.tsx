import { type FC, useEffect, useState } from 'react'
import { type SearchItem } from 'src/types/search'
import { SearchElement } from 'src/modules/search-module/components/search-element/search-element'
import { SearchCloseSvg } from 'src/UI/icons/searchCloseSVG'

import styles from './index.module.scss'

type SearchModuleProps = {
	searchElements: SearchItem[]
}

export const SearchModule: FC<SearchModuleProps> = ({ searchElements }) => {
	const [isShowSearch, setIsShowSearch] = useState(false)

	useEffect(() => {
		setIsShowSearch(!!searchElements?.length)
	}, [searchElements])

	return (
		<div className={styles.searchWrapper}>
			{isShowSearch && (
				<div className={styles.searchList}>
					<button
						className={styles.searchCloseBtn}
						type='button'
						onClick={() => setIsShowSearch(false)}
					>
						<SearchCloseSvg />
					</button>
					<h5>Результаты поиска</h5>
					{searchElements?.map((el) => <SearchElement key={el.id} {...el} />)}
				</div>
			)}
		</div>
	)
}
