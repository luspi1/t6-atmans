import { useParams } from 'react-router-dom'
import { useGetEventProgramByIdQuery } from 'src/store/events/events.api'
import { ProgramList } from 'src/modules/program-list/program-list'

export const EventProgramDay = () => {
	const { id } = useParams()
	const { dayId } = useParams()
	const { data: programListData } = useGetEventProgramByIdQuery({ eventId: id, dayId })

	return <ProgramList list={programListData ?? []} />
}
