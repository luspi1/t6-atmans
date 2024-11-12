import React, { useRef, useState } from 'react'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { TextContainer } from './components/text-container'

type TextListProps = {
	item: React.ReactNode
	lineClamp?: number
}

export const MobileTextContainer: React.FC<TextListProps> = ({ item, lineClamp = 14 }) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const textContainerRef = useRef<HTMLDivElement | null>(null)

	const toggleList = () => {
		setIsExpanded(!isExpanded)
	}

	const isOverflowing = true
	return (
		<>
			<TextContainer ref={textContainerRef} $lineClamp={lineClamp} $isExpanded={isExpanded}>
				{item}
			</TextContainer>
			{isOverflowing && (
				<MainButton
					$variant='show'
					$radius='3px'
					$height='45px'
					$padding='0'
					$width='100%'
					$fontSize='18px'
					onClick={toggleList}
				>
					{isExpanded ? 'Скрыть' : 'Показать ещё'}
				</MainButton>
			)}
		</>
	)
}
