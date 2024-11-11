import React, { useEffect, useRef, useState } from 'react'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { TextContainer } from './components/text-container'

type TextListProps = {
	item: React.ReactNode
	lineClamp?: number
}

export const MobileTextContainer: React.FC<TextListProps> = ({ item, lineClamp = 14 }) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const [showButton, setShowButton] = useState(false)
	const textContainerRef = useRef<HTMLDivElement | null>(null)

	const toggleList = () => {
		setIsExpanded(!isExpanded)
	}

	useEffect(() => {
		if (textContainerRef.current) {
			const { clientHeight } = textContainerRef.current
			const lineHeight = parseFloat(getComputedStyle(textContainerRef.current).lineHeight)
			const maxHeight = lineClamp * lineHeight

			setShowButton(clientHeight > maxHeight)
		}
	}, [item, lineClamp])

	return (
		<>
			<TextContainer ref={textContainerRef} $lineClamp={lineClamp} $isExpanded={isExpanded}>
				{item}
			</TextContainer>
			{showButton && (
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
