import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { type SearchWithTagInputs } from 'src/pages/search-page/schema'
import { Helmet } from 'react-helmet-async'

import { Container } from 'src/UI/Container/Container'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { TagsList } from 'src/pages/search-page/consts'

import styles from './index.module.scss'

export const SearchPage = () => {
	const methods = useForm<SearchWithTagInputs>({
		mode: 'onBlur',
	})

	const setTagOnSearch = (e: React.MouseEvent<HTMLLIElement>) => {
		methods.setValue('search', e.currentTarget.textContent ?? '')
	}

	const onSubmit: SubmitHandler<SearchWithTagInputs> = (data) => {
		console.log(data)
	}
	return (
		<Container className={styles.searchContainer}>
			<Helmet>
				<title>Поиск</title>
			</Helmet>
			<div className={styles.searchBox}>
				<div className={styles.searchWrapper}>
					<FormProvider {...methods}>
						<form onSubmit={methods.handleSubmit(onSubmit)}>
							<ControlledInput
								className={styles.searchInput}
								name='search'
								placeholder='Название события, объекта, места'
								required
							/>
							<MainButton className={styles.searchBtn} as='button' type='submit'>
								найти
							</MainButton>
						</form>
					</FormProvider>
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
