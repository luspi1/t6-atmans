import { type ObjectItem } from 'src/types/objects'

import { useState } from 'react'
import { Link } from 'react-router-dom'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { TableSearch } from 'src/modules/table-search/table-search'
import { Loader } from 'src/components/loader/loader'
import { mainFormatDate } from 'src/helpers/utils'
import { useDebounce } from 'src/hooks/debounce/debounce'
import { useGetAllObjectsQuery } from 'src/store/objects/objects.api'

import styles from './index.module.scss'

export const DepartmentsTable = () => {
	const [searchObject, setSearchObject] = useState<string>('')
	const debouncedSearch = useDebounce(searchObject)
	const { data: objectsList, isLoading } = useGetAllObjectsQuery(debouncedSearch)

	const searchDepartments = (value: string) => {
		setSearchObject(value)
	}

	const tableTitles = [
		'№',
		<TableSearch
			wrapperClassName={styles.departmentsSearchWrapper}
			key={2}
			handleSearch={searchDepartments}
			placeholder='Поиск по названию объекта'
		/>,
		'Дата открытия',
	]

	const formatObjectsTableData = (objectsData: ObjectItem[]) => {
		return objectsData.map((objectEl, idx) => {
			return [
				String(idx + 1),
				<Link to={objectEl.objectCode} key={objectEl.objectCode}>
					{objectEl.title}
				</Link>,
				mainFormatDate(objectEl.openDate),
			]
		})
	}

	if (isLoading || !objectsList) return <Loader />

	return (
		<CustomTable
			className={styles.departmentTable}
			cellsData={formatObjectsTableData(objectsList)}
			colTitles={tableTitles}
		/>
	)
}
