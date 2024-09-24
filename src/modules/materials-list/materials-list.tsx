import React, { type FC } from 'react'
import { type MaterialItem } from 'src/types/materials'
import { type MaterialsSearchInputs } from 'src/modules/materials-list/schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import cn from 'classnames'

import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { MainButton } from 'src/UI/MainButton/MainButton'

import { DOCIconSvg } from 'src/UI/icons/docIconSVG'
import { PDFIconSvg } from 'src/UI/icons/pdfIconSVG'
import { mainFormatDate } from 'src/helpers/utils'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'
import { SimpleLink } from 'src/components/simple-link/simple-link'

import styles from './index.module.scss'

type MaterialsListProps = {
	materialsData?: MaterialItem[]
	className?: string
}
export const MaterialsList: FC<MaterialsListProps> = ({ materialsData, className }) => {
	const methods = useForm<MaterialsSearchInputs>({
		mode: 'onBlur',
	})

	const onSubmit: SubmitHandler<MaterialsSearchInputs> = (data) => {
		console.log(data)
	}

	if (!materialsData?.length) return null

	return (
		<div className={cn(styles.materialsListWrapper, className)}>
			<div className={styles.materialsTop}>
				<p>
					Всего материалов: <b>{materialsData.length}</b>
				</p>
				<FormProvider {...methods}>
					<form className={styles.materialsSearchForm} onSubmit={methods.handleSubmit(onSubmit)}>
						<ControlledInput
							className={styles.materialsSearchInput}
							name='title'
							placeholder='Поиск по названию'
						/>
						<ControlledSelect
							className={styles.materialsSearchSelect}
							selectOptions={[
								{ label: 'Порядок показа', value: '0' },
								{ label: 'Порядок 1', value: '1' },
								{ label: 'Порядок 2', value: '2' },
							]}
							name='order'
						/>
						<ControlledSelect
							className={styles.materialsSearchSelect}
							selectOptions={[
								{ label: 'Монографии', value: '1' },
								{ label: 'Статьи', value: '2' },
							]}
							name='type'
						/>
						<MainButton as='button' type='submit'>
							Найти
						</MainButton>
					</form>
				</FormProvider>
			</div>

			<ul className={styles.materialsList}>
				{materialsData?.map((materialEl) => (
					<li key={materialEl.id}>
						{materialEl.format === 'pdf' ? <PDFIconSvg /> : <DOCIconSvg />}
						<div>
							<p className={styles.materialsItemTitle}>
								<span>{materialEl.type}: </span>
								<a href={materialEl.downloadLink}>{materialEl.title}</a>
							</p>
							<div className={styles.materialsItemInfo}>
								<span>
									{materialEl.format}-файл, {materialEl.size}
								</span>
								<span className={styles.materialsItemPub}>
									Публикация: {mainFormatDate(materialEl.publicationDate, 'dd.MM.yyyy')},{' '}
									{materialEl.edition}
								</span>
								<span>
									Размещен на сайте: {mainFormatDate(materialEl.postingDate, 'dd.MM.yyyy')}
								</span>
								<span>
									Соавторы:{' '}
									{materialEl.coAuthors?.length > 0 ? (
										<RenderedArray strArray={materialEl.coAuthors} as='span' limit={2} />
									) : (
										'нет'
									)}
								</span>
							</div>
						</div>
					</li>
				))}
			</ul>
			<SimpleLink
				className={styles.allMaterialsLink}
				title={
					<>
						Показать все авторские материалы <b>({materialsData?.length})</b>
					</>
				}
				link='#'
			/>
		</div>
	)
}
