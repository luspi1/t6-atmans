import { Helmet } from 'react-helmet-async'

import { Container } from 'src/UI/Container/Container'
import { TagsList } from 'src/pages/search-page/consts'
import { useState } from 'react'
import { useGetSearchedQuery } from 'src/store/search/search.api'
import { MainInput } from 'src/UI/MainInput/MainInput'
import { useDebounce } from 'src/hooks/debounce/debounce'

import styles from './index.module.scss'
import cn from 'classnames'

export const SearchPage = () => {
	const [searchVal, setSearchVal] = useState<string>('')
	const debouncedSearch = useDebounce(searchVal)

	useGetSearchedQuery(debouncedSearch)

	const setTagOnSearch = (e: React.MouseEvent<HTMLLIElement>) => {
		setSearchVal(e.currentTarget.textContent ?? '')
	}

	return (
		<Container className={styles.searchContainer}>
			<Helmet>
				<title>Поиск</title>
			</Helmet>
			<div className={styles.searchBox}>
				<div className={styles.searchWrapper}>
					<MainInput
						className={cn(styles.searchInput, { [styles._activeSearch]: searchVal })}
						name='search'
						placeholder='Событие, объект, место'
						value={searchVal}
						onChange={(e) => setSearchVal(e.target.value)}
						required
					/>
				</div>
				<ul className={styles.tagsList}>
					{TagsList?.map((tag) => (
						<li key={tag} onClick={setTagOnSearch}>
							{tag}
						</li>
					))}
				</ul>
			</div>
		</Container>
	)
}
