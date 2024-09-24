import { type GroupItem } from 'src/types/groups'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { TableSearch } from 'src/modules/table-search/table-search'
import { useDebounce } from 'src/hooks/debounce/debounce'
import { Loader } from 'src/components/loader/loader'
import { useGetEventTeamsQuery } from 'src/store/events/events.api'
import { CustomText } from 'src/components/custom-text/custom-text'

import styles from './index.module.scss'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'
import { Pagination } from 'src/components/pagination/pagination'

export const TeamsParticipantesTable = () => {
	const { id } = useParams()

	const [searchTeam, setSearchTeam] = useState<string>('')
	const debouncedSearch = useDebounce(searchTeam)
	const { data: teamsList, isLoading } = useGetEventTeamsQuery([debouncedSearch, id ?? ''])

	const searchTeamHandler = (value: string) => {
		setSearchTeam(value)
	}
	const tableTitles = [
		'№',
		<TableSearch
			wrapperClassName={styles.teamsSearchWrapper}
			key={1}
			handleSearch={searchTeamHandler}
			placeholder='Поиск по названию ватаги или группы'
		/>,
		'Участников',
		'Дисциплины',
		'Сторона',
		'Регион',
	]

	const formatTeamsTableData = (teamsData: GroupItem[]) => {
		return teamsData.map((teamEl, idx) => {
			return [
				String(idx + 1),
				<Link to={teamEl.id} key={teamEl.id}>
					{teamEl.title}
				</Link>,
				teamEl.participantsCount,
				<RenderedArray key={3} strArray={teamEl.disciplines.map((el) => el.title)} />,
				teamEl.side,
				teamEl.region,
			]
		})
	}

	if (isLoading || !teamsList) return <Loader />

	return (
		<>
			<CustomText $margin='0 0 10px 0' $fontSize='16px'>
				Групп отобрано: <b>{teamsList?.length ?? 0}</b>
			</CustomText>
			<CustomTable
				className={styles.teamsTable}
				cellsData={formatTeamsTableData(teamsList)}
				colTitles={tableTitles}
			/>
			<Pagination pagesCount={7} activePage={2} />
		</>
	)
}
