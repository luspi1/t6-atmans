import { type FC } from 'react'
import { useParams } from 'react-router-dom'

import { useGetEthnosportByIdQuery } from 'src/store/ethnosport/ethnosport.api'
import { Loader } from 'src/components/loader/loader'
import { CustomText } from 'src/components/custom-text/custom-text'
import { InfoRow } from 'src/UI/InfoRow/InfoRow'

import { AccordionItem } from 'src/components/accordion-item/accordion-item'
import { mainFormatDate } from 'src/helpers/utils'

import styles from './index.module.scss'

export const EthnoDetailsHistory: FC = () => {
	const { id } = useParams()
	const { data: ethnoDetails, isLoading } = useGetEthnosportByIdQuery(id ?? '')

	if (isLoading) return <Loader />
	if (!ethnoDetails) return null

	const { history: directionHistory } = ethnoDetails

	return (
		<section>
			<CustomText $margin='0 0 25px 0' $fontSize='16px' $lineHeight='1.4'>
				{directionHistory?.mainDesc ?? ''}
			</CustomText>
			{directionHistory?.chronology?.map((el, idx) => (
				<AccordionItem
					key={idx}
					className={styles.chronologyAccordion}
					trigger={
						<InfoRow
							title={mainFormatDate(el.date) ?? ''}
							label={el.text}
							$titleWidth='87px'
							$gap='10px'
							titleClassname='_accordion-open'
						/>
					}
					content={<InfoRow title='' label={el.hiddenText} $titleWidth='87px' $gap='10px' />}
				/>
			))}
		</section>
	)
}
