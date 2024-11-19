import { type FC } from 'react'

import { useGetAboutContactsQuery } from 'src/store/about/about.api'

import styles from './index.module.scss'

export const ContactsInfo: FC = () => {
	const { data: aboutContactsData } = useGetAboutContactsQuery(null)
	return (
		<>
			{aboutContactsData?.mailAddress && (
				<div className={styles.contactsBlock}>
					<h4>Почтовый адрес</h4>
					<p>{aboutContactsData.mailAddress}</p>
				</div>
			)}

			{aboutContactsData?.phone?.contact && (
				<div className={styles.contactsBlock}>
					<h4>Телефон</h4>
					<p>{aboutContactsData.phone.contact}</p>
					<a href={`tel:${aboutContactsData.phone.phoneNumber.number}`}>
						{aboutContactsData.phone.phoneNumber.formatNumber}
					</a>
				</div>
			)}

			{aboutContactsData?.email && (
				<div className={styles.contactsBlock}>
					<h4>Электронная почта</h4>
					<a href={`mailto:${aboutContactsData.email}`}>{aboutContactsData.email}</a>
				</div>
			)}
		</>
	)
}
