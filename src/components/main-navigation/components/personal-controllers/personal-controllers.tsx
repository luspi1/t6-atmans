import { SearchBtnIconSvg } from 'src/UI/icons/searchBtnIconSVG'
import { Link } from 'react-router-dom'
import { PersonIconSvg } from 'src/UI/icons/personIconSVG'

import styles from './index.module.scss'

export const PersonalControllers = () => {
	return (
		<div className={styles.personalControllers}>
			<button type='button'>
				<SearchBtnIconSvg />
			</button>
			<Link to='/'>
				<PersonIconSvg />
			</Link>
		</div>
	)
}
