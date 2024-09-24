import { type FC } from 'react'
import { type ShortDocument } from 'src/types/document'
import cn from 'classnames'

import styles from './index.module.scss'

type AsideDocumentsProps = {
	documents: ShortDocument[] | undefined
	className?: string
}

export const AsideDocuments: FC<AsideDocumentsProps> = ({ documents, className }) => {
	if (!documents?.length) return null
	return (
		<ul className={cn(styles.documents, className)}>
			{documents?.map((item) => (
				<li key={item.id}>
					<a className={styles.documentLink} href='#' download>
						{item.title}
					</a>

					<p className={styles.documentInfo}>
						{item.type}-файл, {item.size}
					</p>
				</li>
			))}
		</ul>
	)
}
