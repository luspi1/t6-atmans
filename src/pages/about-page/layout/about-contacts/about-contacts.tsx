import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { ContactsMap } from 'src/components/contacts-map/contacts-map'
import { ContactsInfo } from './components/contacts-info/contacts-info'

import styles from './index.module.scss'
import { useGetAboutContactsQuery } from 'src/store/about/about.api'
export const AboutContacts: FC = () => {
	const { data: aboutContactsData } = useGetAboutContactsQuery(null)

	return (
		<div className={styles.contactsPageContent}>
			<Helmet>
				<title>Карта и маршруты</title>
			</Helmet>
			<h2>Карта и маршруты</h2>
			<ContactsMap className={styles.aboutMap} points={aboutContactsData?.map_coords} zoom={17} />
			<ContactsInfo />
		</div>
	)
}
