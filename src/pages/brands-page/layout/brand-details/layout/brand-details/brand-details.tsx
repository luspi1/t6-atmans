import { type FC } from 'react'

import { useParams } from 'react-router-dom'

import { LinksList } from 'src/components/links-list/links-list'

import { formatSourceLinks, getCorrectWordForm, mainFormatDate } from 'src/helpers/utils'

import { useGetBrandEventByIdQuery } from 'src/store/brandEvents/brand-events.api'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'

import { BrandStatStart } from 'src/UI/icons/brandStatStart'
import { BrandStatRelevance } from 'src/UI/icons/brandStatRelevance'
import { BrandStatHeld } from 'src/UI/icons/brandStatHeld'
import { BrandStatHeldPlan } from 'src/UI/icons/brandStatHeldPlan'

import styles from './index.module.scss'

export const BrandDetails: FC = () => {
	const { id } = useParams()

	const { data: brandEventInfo } = useGetBrandEventByIdQuery(id ?? '')
	return (
		<div className={styles.brandDetailsTab}>
			<ul className={styles.brandStats}>
				<li>
					<BrandStatStart />
					<div>
						<h6>Год начала</h6>
						<span>{mainFormatDate(brandEventInfo?.dates?.[0], 'yyyy')}</span>
					</div>
				</li>
				<li>
					<BrandStatRelevance />
					<div>
						<h6>Актуальность</h6>
						<span>{brandEventInfo?.relevance}</span>
					</div>
				</li>
				<li>
					<BrandStatHeld />
					<div>
						<h6>Проведено</h6>
						<span>
							{getCorrectWordForm(brandEventInfo?.countHeld, ['событие', 'события', 'событий'])}
						</span>
					</div>
				</li>
				<li>
					<BrandStatHeldPlan />
					<div>
						<h6>Запланировано</h6>
						<span>{brandEventInfo?.countHeldPlan}</span>
					</div>
				</li>
			</ul>
			<RenderedArray
				className={styles.brandDescs}
				strArray={brandEventInfo?.descs}
				as='div'
				asStr='p'
				separator=''
			/>
			<LinksList dataList={formatSourceLinks(brandEventInfo?.relatedLinks)} title='Массив ссылок' />
		</div>
	)
}
