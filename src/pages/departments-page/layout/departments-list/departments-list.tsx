import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { DepartmentsTable } from 'src/pages/departments-page/layout/departments-list/components/departments-table/departments-table'
import { Pagination } from 'src/components/pagination/pagination'
import { PageContent } from 'src/components/page-content/page-content'
import { useGetRegionsInfoQuery } from 'src/store/regions/regions.api'

import { AppRoute } from 'src/routes/main-routes/consts'

import styles from './index.module.scss'
export const DepartmentsList: FC = () => {
	const { data: regionsInfo } = useGetRegionsInfoQuery(null)
	return (
		<PageContent className={styles.departmentListPage} $padding='30px 30px 50px 30px'>
			<Helmet>
				<title>Региональные отделения</title>
			</Helmet>

			<h2>Региональные отделения</h2>

			<p className={styles.departmentListText}>{regionsInfo?.mainDescription}</p>
			<Link to={AppRoute.DepartmentsAbout}>Подробнее об отделениях</Link>
			<DepartmentsTable />
			<Pagination pagesCount={7} activePage={2} />
		</PageContent>
	)
}
