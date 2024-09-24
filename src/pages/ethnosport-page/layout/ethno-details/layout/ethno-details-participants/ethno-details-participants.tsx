import { type FC } from 'react'
import { useGetEthnosportByIdQuery } from 'src/store/ethnosport/ethnosport.api'
import { useParams } from 'react-router-dom'
import { Loader } from 'src/components/loader/loader'

export const EthnoDetailsParticipants: FC = () => {
	const { id } = useParams()
	const { data: ethnoDetails, isLoading } = useGetEthnosportByIdQuery(id ?? '')
	if (isLoading) return <Loader />
	if (!ethnoDetails) return null
	const { participants: directionParticipants } = ethnoDetails
	return (
		<section>
			<h5>Участников: {directionParticipants.length}</h5>
		</section>
	)
}
