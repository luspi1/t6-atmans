import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { PageContent } from 'src/components/page-content/page-content'
import { AppRoute } from 'src/routes/main-routes/consts'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'

import { useGetRegionsInfoQuery } from 'src/store/regions/regions.api'

import styles from './index.module.scss'

export const DepartmentsAbout: FC = () => {
	const { data: regionsInfo } = useGetRegionsInfoQuery(null)

	return (
		<PageContent className={styles.aboutDepartmentContainer} $padding='30px 55px 25px 30px'>
			<Helmet>
				<title>О региональных отделениях</title>
			</Helmet>

			<h2>О региональных отделениях</h2>
			<Link to={`/${AppRoute.Departments}`}>На страницу списка отделений</Link>
			<RenderedArray strArray={regionsInfo?.aboutDescriptions} as='div' asStr='p' separator='' />

			<figure className={styles.image}>
				<img src={regionsInfo?.aboutPhoto?.url} alt={regionsInfo?.aboutPhoto?.caption} />
				<figcaption>{regionsInfo?.aboutPhoto?.caption}</figcaption>
			</figure>

			<RenderedArray
				strArray={regionsInfo?.secondaryDescriptions}
				as='div'
				asStr='p'
				separator=''
			/>

			<Link to={`/${AppRoute.Departments}`}>На страницу списка отделений</Link>
		</PageContent>
	)
}
