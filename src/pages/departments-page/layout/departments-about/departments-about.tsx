import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { PageContent } from 'src/components/page-content/page-content'
import { AppRoute } from 'src/routes/main-routes/consts'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'
import { useGetObjectsInfoQuery } from 'src/store/objects/objects.api'

import styles from './index.module.scss'

export const DepartmentsAbout: FC = () => {
	const { data: regionsInfo } = useGetObjectsInfoQuery(null)

	return (
		<PageContent className={styles.aboutDepartmentContainer} $padding='30px 55px 25px 30px'>
			<Helmet>
				<title>Об объектах</title>
			</Helmet>

			<h2>Об объектах</h2>
			<Link to={`/${AppRoute.Departments}`}>На страницу списка объектов</Link>
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

			<Link to={`/${AppRoute.Departments}`}>На страницу списка объектов</Link>
		</PageContent>
	)
}
