import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { ContactsMap } from 'src/components/contacts-map/contacts-map'
import { ContactsInfo } from './components/contacts-info/contacts-info'

import styles from './index.module.scss'
export const AboutContacts: FC = () => {
	return (
		<div className={styles.contactsPageContent}>
			<Helmet>
				<title>Карта и маршруты</title>
			</Helmet>
			<h2>Карта и маршруты</h2>
			<ContactsMap className={styles.aboutMap} points={[55.745032, 37.599139]} zoom={17} />
			<ContactsInfo />
		</div>
	)
}
