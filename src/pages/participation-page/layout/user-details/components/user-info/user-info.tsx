import { useParams } from 'react-router-dom'

import { useGetUserByIdQuery } from 'src/store/users/users.api'
import { calculateAge, mainFormatDate } from 'src/helpers/utils'
import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'

import { CustomText } from 'src/components/custom-text/custom-text'
import { SimpleLink } from 'src/components/simple-link/simple-link'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'
import styles from './index.module.scss'

export const UserInfo = () => {
	const { id } = useParams()
	const { data: userData } = useGetUserByIdQuery(id ?? '')

	useAdditionalCrumbs(userData?.fullname)

	return (
		<div className={styles.userInfoWrapper}>
			<h2>{userData?.fullname}</h2>
			{userData?.statuses && (
				<div className={styles.userInfoStatuses}>
					{userData.statuses?.map((status) => <span key={status}>{status}</span>)}
				</div>
			)}
			<div className={styles.mainInfo}>
				<div className={styles.avatarWrapper}>
					<img src={userData?.avatar} alt={userData?.fullname} />
				</div>
				<div className={styles.infoBlock}>
					<InfoRow
						title='Дата рождения и возраст:'
						label={
							<>
								{mainFormatDate(userData?.birthday)} <b>({calculateAge(userData?.birthday)})</b>
							</>
						}
					/>
					<InfoRow title='Населенный пункт:' label={userData?.locality} />
					<InfoRow title='Пол:' label={userData?.gender} $margin='0 0 25px 0' />
					<InfoRow
						wrapperClassname={styles.phoneWrapper}
						title='Телефоны:'
						label={<RenderedArray strArray={userData?.phones} as='span' />}
					/>
					<InfoRow
						title='Электронная почта:'
						label={<SimpleLink title={userData?.email} link={userData?.email} isEmail />}
					/>
					<InfoRow
						title='Сайт / социальная сеть:'
						$margin='0 0 20px 0'
						label={<a href={userData?.website}>{userData?.website}</a>}
					/>
					<CustomText $fontSize='16px' $fontStyle='italic' $lineHeight='1.5' $maxWidth='950px'>
						{userData?.mainDesc}
					</CustomText>
				</div>
			</div>
		</div>
	)
}
