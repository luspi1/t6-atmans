import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet, useParams } from 'react-router-dom'

import { useGetEthnosportByIdQuery } from 'src/store/ethnosport/ethnosport.api'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'
import { Loader } from 'src/components/loader/loader'
import { PageContent } from 'src/components/page-content/page-content'
import { TabNav } from 'src/components/tab-nav/tab-nav'

import { EthnoDetailsNavItems } from 'src/pages/ethnosport-page/layout/ethno-details/consts'

import styles from './index.module.scss'

export const EthnoDetails: FC = () => {
	const { id } = useParams()
	const { data: ethnoDetails, isLoading } = useGetEthnosportByIdQuery(id ?? '')
	useAdditionalCrumbs(ethnoDetails?.title)

	if (isLoading) return <Loader />
	if (!ethnoDetails) return null
	return (
		<PageContent $padding='30px 65px 100px 30px'>
			<Helmet>
				<title>{ethnoDetails.title}</title>
			</Helmet>

			<h2>{ethnoDetails.title}</h2>
			<div className={styles.ethnoDetailsInfo}>
				<div className={styles.ethnoDetailsLogo}>
					<img src={ethnoDetails.logo} alt={ethnoDetails.title} />
				</div>
				<p>{ethnoDetails.mainDesc}</p>
			</div>
			<TabNav navItems={EthnoDetailsNavItems} />
			<Outlet />
		</PageContent>
	)
}
