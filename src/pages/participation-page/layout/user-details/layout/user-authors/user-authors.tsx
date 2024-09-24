import { type FC } from 'react'
import { useParams } from 'react-router-dom'

import { useGetUserMaterialsQuery } from 'src/store/users/users.api'
import { MaterialsList } from 'src/modules/materials-list/materials-list'
import styles from './index.module.scss'

export const UserAuthors: FC = () => {
	const { id } = useParams()
	const { data: materialsList } = useGetUserMaterialsQuery(['', id ?? ''])

	return (
		<section className={styles.userAuthorsSection}>
			<MaterialsList materialsData={materialsList} />
		</section>
	)
}
