import { type UserItem } from 'src/types/users'

import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { TableSearch } from 'src/modules/table-search/table-search'
import { useDebounce } from 'src/hooks/debounce/debounce'
import { Loader } from 'src/components/loader/loader'
import { calculateAge } from 'src/helpers/utils'
import { useGetEventParticipantesQuery } from 'src/store/events/events.api'

import styles from './index.module.scss'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'
import { CustomText } from 'src/components/custom-text/custom-text'
import { Pagination } from 'src/components/pagination/pagination'

export const LonesParticipantesTable = () => {
	const [searchParticipantes, setSearchParticipantes] = useState<string>('')
	const debouncedSearch = useDebounce(searchParticipantes)

	const { id } = useParams()

	const { data: participantesList, isLoading } = useGetEventParticipantesQuery([
		debouncedSearch,
		id ?? '0',
	])

	const searchParticipantesHandler = (value: string) => {
		setSearchParticipantes(value)
	}
	const tableTitles = [
		'№',
		<TableSearch
			wrapperClassName={styles.lonesParticipantesSearchWrapper}
			key={2}
			handleSearch={searchParticipantesHandler}
			placeholder='Поиск по имени, фамилии...'
		/>,
		'Возраст',
		'Дисциплины',
		'Сторона',
		'Регион',
	]

	const formatLonesParticipantsTableData = (participantesData: UserItem[]) => {
		return participantesData.map((participantEl, idx) => {
			return [
				String(idx + 1),
				<Link to={participantEl.id} key={participantEl.id}>
					{participantEl.fullname}
				</Link>,
				calculateAge(participantEl.birthday, true),
				<RenderedArray key={3} strArray={participantEl.disciplines.map((el) => el.title)} />,
				participantEl.side,
				participantEl.region,
			]
		})
	}

	if (isLoading || !participantesList) return <Loader />

	return (
		<>
			<CustomText $margin='0 0 10px 0' $fontSize='16px'>
				Участников отобрано: <b>{participantesList?.length ?? 0}</b>
			</CustomText>
			<CustomTable
				className={styles.lonesParticipantesTable}
				cellsData={formatLonesParticipantsTableData(participantesList)}
				colTitles={tableTitles}
			/>
			<Pagination pagesCount={7} activePage={2} />
		</>
	)
}
