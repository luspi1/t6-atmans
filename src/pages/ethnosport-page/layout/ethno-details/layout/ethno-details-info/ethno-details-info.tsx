import { type FC } from 'react'
import { useGetEthnosportByIdQuery } from 'src/store/ethnosport/ethnosport.api'
import { useParams } from 'react-router-dom'
import { Loader } from 'src/components/loader/loader'
import { CustomText } from 'src/components/custom-text/custom-text'
import { GalleryImg } from 'src/components/image-gallery/image-gallery'

import styles from './index.module.scss'

export const EthnoDetailsInfo: FC = () => {
	const { id } = useParams()
	const { data: ethnoDetails, isLoading } = useGetEthnosportByIdQuery(id ?? '')
	if (isLoading) return <Loader />
	if (!ethnoDetails) return null
	const { info: directionInfo } = ethnoDetails
	return (
		<section>
			<CustomText $margin='0 0 25px 0' $fontSize='16px' $lineHeight='1.4'>
				{directionInfo?.mainDesc ?? ''}
			</CustomText>
			<GalleryImg
				className={styles.directionDetailsGallery}
				images={directionInfo?.photos}
				limit={4}
			/>
			{directionInfo?.descs?.map((descEl, i) => (
				<CustomText key={i} $margin='0 0 32px 0' $fontSize='16px' $lineHeight='1.4'>
					{descEl}
				</CustomText>
			))}
		</section>
	)
}
