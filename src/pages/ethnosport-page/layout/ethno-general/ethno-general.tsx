import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { useGetEthnosportGlobalQuery } from 'src/store/ethnosport/ethnosport.api'
import { PageContent } from 'src/components/page-content/page-content'
import { Loader } from 'src/components/loader/loader'
import { CustomText } from 'src/components/custom-text/custom-text'
import { DirectionsSection } from 'src/pages/ethnosport-page/layout/ethno-general/components/directions-section/directions-section'
import { FeedbackForm } from 'src/modules/feedback-form/feedback-form'
import { GalleryImg } from 'src/components/image-gallery/image-gallery'

import styles from './index.module.scss'

export const EthnoGeneral: FC = () => {
	const { data: ethnoInfo, isLoading } = useGetEthnosportGlobalQuery(null)

	if (isLoading) return <Loader />

	return (
		<div className={styles.ethnoPageContent}>
			<PageContent className={styles.ethnoPageContent} $padding='30px 65px 100px 30px' $margin='0'>
				<Helmet>
					<title>Об этноспорте</title>
				</Helmet>

				<h2>Об этноспорте</h2>
				<CustomText $margin='0 0 25px 0' $fontSize='16px' $lineHeight='1.5'>
					{ethnoInfo?.mainDesc ?? ''}
				</CustomText>
				<GalleryImg className={styles.ethnoGallery} images={ethnoInfo?.photos} limit={4} />
				{ethnoInfo?.descs?.map((descEl, i) => (
					<CustomText key={i} $margin='0 0 32px 0' $fontSize='16px' $lineHeight='1.5'>
						{descEl}
					</CustomText>
				))}
				<DirectionsSection directionsList={ethnoInfo?.directions ?? []} />
			</PageContent>
			<FeedbackForm />
		</div>
	)
}
