import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet, useParams } from 'react-router-dom'

import { PageContent } from 'src/components/page-content/page-content'
import { useGetDisciplineByIdQuery } from 'src/store/disciplines/disciplines.api'
import { Loader } from 'src/components/loader/loader'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'
import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import { TabNav } from 'src/components/tab-nav/tab-nav'
import { DisciplineDetailsNavItems } from 'src/pages/disciplines-page/layout/discipline-details/consts'

import styles from './index.module.scss'
export const DisciplineDetails = () => {
	const { id } = useParams()
	const { data: disciplineItem, isLoading } = useGetDisciplineByIdQuery(id ?? '')

	useAdditionalCrumbs(disciplineItem?.title)

	if (isLoading) return <Loader />
	return (
		<PageContent $padding='30px 70px 35px 30px' $maxWidth='100%'>
			<Helmet>
				<title>Одна дисциплина</title>
			</Helmet>
			<h2>{disciplineItem?.title}</h2>
			<div className={styles.disciplineTop}>
				<div className={styles.disciplineImg}>
					<img src={disciplineItem?.imgUrl} alt={disciplineItem?.title} />
				</div>
				<div className={styles.disciplineContent}>
					<p>{disciplineItem?.mainDesc}</p>
					<InfoRow title='Направление:' label={disciplineItem?.direction} $titleWidth='106px' />
					<InfoRow title='Раздел:' label={disciplineItem?.chapter} $titleWidth='106px' />
					<InfoRow title='Участие:' label={disciplineItem?.participation} $titleWidth='106px' />
					<InfoRow title='Пол:' label={disciplineItem?.gender} $titleWidth='106px' />
					<InfoRow title='Категория:' label={disciplineItem?.category} $titleWidth='106px' />
				</div>
			</div>
			<TabNav className={styles.disciplineNav} navItems={DisciplineDetailsNavItems} isTitle />
			<Outlet />
		</PageContent>
	)
}
