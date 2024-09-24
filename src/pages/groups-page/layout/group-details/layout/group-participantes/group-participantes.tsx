import { type FC } from 'react'

import { CustomText } from 'src/components/custom-text/custom-text'
import { Pagination } from 'src/components/pagination/pagination'
import { ParticipantesTable } from 'src/pages/groups-page/layout/group-details/layout/group-participantes/components/participantes-table/participantes-table'
import { useParams } from 'react-router-dom'
import { useGetGroupParticipantesQuery } from 'src/store/groups/groups.api'
import mainGroupsStyles from '../index.module.scss'

export const GroupParticipantes: FC = () => {
	const { id } = useParams()

	const { data: participantesList } = useGetGroupParticipantesQuery(['', id ?? '0'])

	return (
		<div className={mainGroupsStyles.groupTabContent}>
			<CustomText $margin='0 0 10px 0' $fontSize='16px'>
				Участников отобрано: <b>{participantesList?.length ?? 0}</b>
			</CustomText>
			<ParticipantesTable />
			<Pagination pagesCount={7} activePage={2} />
		</div>
	)
}
