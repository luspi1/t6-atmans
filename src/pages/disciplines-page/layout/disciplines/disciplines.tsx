import { DisciplinesList } from 'src/modules/disciplines-list/disciplines-list'
import React, { type FC } from 'react'
import { Loader } from 'src/components/loader/loader'
import { useGetAllDisciplinesQuery } from 'src/store/disciplines/disciplines.api'
import { PageContent } from 'src/components/page-content/page-content'
import { Helmet } from 'react-helmet-async'

export const Disciplines: FC = () => {
	const { data: allDisciplines, isLoading } = useGetAllDisciplinesQuery(null)
	if (isLoading) return <Loader />
	return (
		<PageContent $padding='30px 40px 55px 30px' $maxWidth='100%'>
			<Helmet>
				<title>Все дисциплины</title>
			</Helmet>
			<DisciplinesList disciplinesData={allDisciplines} />
		</PageContent>
	)
}
