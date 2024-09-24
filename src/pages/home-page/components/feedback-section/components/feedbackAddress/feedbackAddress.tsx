import { type FC } from 'react'

import { SocialLinks } from 'src/components/social-links/social-links'

import { AddressIconSvg } from 'src/UI/icons/addressIconSVG'
import { PhoneIconSvg } from 'src/UI/icons/phoneIconSVG'
import { MailIconSvg } from 'src/UI/icons/mailIconSVG'
import { ContactsMap } from 'src/components/contacts-map/contacts-map'
import { RegionSelection } from 'src/components/region-selection/region-selection'
import styles from './index.module.scss'

export const FeedbackAddress: FC = () => {
	return (
		<div className={styles.feedbackAddress}>
			<RegionSelection className={styles.feedbackSelectRegion} />
			<ContactsMap points={[52.75655, 41.432753]} />
			<ul className={styles.contactsList}>
				<li>
					<AddressIconSvg />
					392003, г. Тамбов, б-р Энтузиастов, д. 2А, этаж 4
				</li>
				<li>
					<PhoneIconSvg />8 (999) 999-99-99
				</li>
				<li>
					<MailIconSvg />
					<a href='mailto:npotau@npotau.ru'>npotau@npotau.ru</a>
				</li>
			</ul>
			<p className={styles.feedbackSocialsTitle}>Мы в социальных сетях</p>
			<SocialLinks className={styles.feedbackSocials} />
		</div>
	)
}
