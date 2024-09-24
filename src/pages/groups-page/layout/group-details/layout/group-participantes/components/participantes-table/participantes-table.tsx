import { type UserItem } from 'src/types/users'

import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { TableSearch } from 'src/modules/table-search/table-search'
import { useDebounce } from 'src/hooks/debounce/debounce'
import { Loader } from 'src/components/loader/loader'
import { calculateAge, getCorrectWordForm } from 'src/helpers/utils'
import { useGetGroupParticipantesQuery } from 'src/store/groups/groups.api'

import styles from './index.module.scss'

export const ParticipantesTable = () => {
	const [searchParticipantes, setSearchParticipantes] = useState<string>('')
	const debouncedSearch = useDebounce(searchParticipantes)

	const { id } = useParams()

	const { data: participantesList, isLoading } = useGetGroupParticipantesQuery([
		debouncedSearch,
		id ?? '0',
	])

	const searchParticipantesHandler = (value: string) => {
		setSearchParticipantes(value)
	}
	const tableTitles = [
		'№',
		'Роль в группе',
		<TableSearch
			wrapperClassName={styles.participantesSearchWrapper}
			key={2}
			handleSearch={searchParticipantesHandler}
			placeholder='Поиск по имени, фамилии...'
		/>,
		'Возраст',
		'Другие группы',
		'Рейтинг',
	]

	const formatParticipantsTableData = (participantesData: UserItem[]) => {
		return participantesData.map((participantEl, idx) => {
			return [
				String(idx + 1),
				participantEl.position,
				<Link to={participantEl.id} key={participantEl.id}>
					{participantEl.fullname}
				</Link>,
				calculateAge(participantEl.birthday, true),
				participantEl.groups?.length ?? 'нет',
				<div className={styles.ratingCell} key={5}>
					<span>{participantEl.rating}</span>(
					{getCorrectWordForm(participantEl?.events.length, ['событие', 'события', 'событий'])})
				</div>,
			]
		})
	}

	if (isLoading || !participantesList) return <Loader />

	return (
		<CustomTable
			className={styles.participantesTable}
			cellsData={formatParticipantsTableData(participantesList)}
			colTitles={tableTitles}
		/>
	)
}
