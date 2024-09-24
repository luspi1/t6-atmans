import { type FC } from 'react'
import { Link, useParams } from 'react-router-dom'

import { LinksList } from 'src/components/links-list/links-list'
import { formatDocumentLinks, formatSourceLinks } from 'src/helpers/utils'
import { Loader } from 'src/components/loader/loader'
import { useGetDisciplineByIdQuery } from 'src/store/disciplines/disciplines.api'
import { CustomText } from 'src/components/custom-text/custom-text'
import { AppRoute } from 'src/routes/main-routes/consts'

import styles from './index.module.scss'
export const DisDetailsInfo: FC = () => {
	const { id } = useParams()
	const { data: disDetails, isLoading } = useGetDisciplineByIdQuery(id ?? '')
	if (isLoading) return <Loader />
	if (!disDetails) return null
	const { info: disciplineInfo } = disDetails
	return (
		<section>
			{disciplineInfo?.descs?.map((descEl, idx) => (
				<CustomText key={idx} $fontSize='16px' $lineHeight='1.48' $margin='0 0 26px 0'>
					{descEl}
				</CustomText>
			))}
			<LinksList
				className={styles.disciplineInfoDocs}
				dataList={formatDocumentLinks(disciplineInfo?.documents)}
				title='Документы дисциплины'
			/>
			<LinksList
				className={styles.disciplineInfoLinks}
				dataList={formatSourceLinks(disciplineInfo?.relatedLinks)}
				title='Массив ссылок'
			/>
			<Link className={styles.allDisLink} to={`/${AppRoute.Disciplines}`}>
				На страницу списка дисциплин
			</Link>
		</section>
	)
}
