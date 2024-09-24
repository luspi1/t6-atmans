import { type FC } from 'react'
import { type SourceLink } from 'src/types/global'

import { LinksList } from 'src/components/links-list/links-list'

import styles from './index.module.scss'
import { formatSourceLinks } from 'src/helpers/utils'

export type DepartmentLinksProps = {
	relatedLinks?: SourceLink[]
}

export const DepartmentLinks: FC<DepartmentLinksProps> = ({ relatedLinks }) => {
	return (
		<div className={styles.container}>
			<LinksList dataList={formatSourceLinks(relatedLinks)} title='Ссылки' />
		</div>
	)
}
