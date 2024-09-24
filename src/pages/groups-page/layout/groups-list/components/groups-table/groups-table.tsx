import { useState } from 'react'
import { Link } from 'react-router-dom'

import { type GroupItem } from 'src/types/groups'
import { useGetAllGroupsQuery } from 'src/store/groups/groups.api'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { TableSearch } from 'src/modules/table-search/table-search'
import { useDebounce } from 'src/hooks/debounce/debounce'
import { Loader } from 'src/components/loader/loader'
import { getCorrectWordForm } from 'src/helpers/utils'
import { MainSelect } from 'src/UI/MainSelect/MainSelect'

import styles from './index.module.scss'

export const GroupsTable = () => {
	const [searchGroup, setSearchGroup] = useState<string>('')
	const debouncedSearch = useDebounce(searchGroup)
	const { data: groupsList, isLoading } = useGetAllGroupsQuery(debouncedSearch)

	const searchGroupHandler = (value: string) => {
		setSearchGroup(value)
	}
	const tableTitles = [
		'№',
		'Регион',
		<TableSearch
			wrapperClassName={styles.groupsSearchWrapper}
			key={2}
			handleSearch={searchGroupHandler}
			placeholder='Поиск по названию группы'
		/>,
		<MainSelect
			wrapperClassName={styles.groupsCategorySelect}
			key={3}
			items={[
				{
					label: 'Категория группы',
					value: '0',
				},
				{ label: 'Категория 1', value: '1' },
				{ label: 'Категория 2', value: '2' },
			]}
		/>,
		'Участники',
		'Подгруппы',
		'Рейтинг',
	]

	const formatGroupsTableData = (groupsData: GroupItem[]) => {
		return groupsData.map((groupEl, idx) => {
			return [
				String(idx + 1),
				groupEl.region,
				<Link to={groupEl.id} key={groupEl.id}>
					{groupEl.title}
				</Link>,
				groupEl.category,
				groupEl.participants?.length,
				groupEl.subgroups,
				<div className={styles.ratingCell} key={6}>
					<span>{groupEl.rating}</span> (
					{getCorrectWordForm(groupEl?.events.length, ['событие', 'события', 'событий'])})
				</div>,
			]
		})
	}

	if (isLoading || !groupsList) return <Loader />

	return (
		<CustomTable
			className={styles.groupsTable}
			cellsData={formatGroupsTableData(groupsList)}
			colTitles={tableTitles}
		/>
	)
}
