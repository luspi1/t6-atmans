import React, { useRef, useState } from 'react'

import { useCollapsibleText } from './useCollapsibleText'
import { useBreakPoint } from 'src/hooks/useBreakPoint/useBreakPoint'

import { MainButton } from 'src/UI/MainButton/MainButton'
import { CollapseContainer } from './components/collapse-text-container'

type CollapsibleTextProps = {
	item: React.ReactNode
	lineClamp: number
	collapsePoint?: string
}

export const CollapsibleText: React.FC<CollapsibleTextProps> = ({
	item,
	lineClamp,
	collapsePoint,
}) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const textContainerRef = useRef<HTMLDivElement | null>(null)
	const breakpoint = useBreakPoint()

	const toggleList = () => {
		setIsExpanded(!isExpanded)
	}

	const isOverflowing = useCollapsibleText({ ref: textContainerRef, lineClamp })

	if (breakpoint !== collapsePoint) {
		return <>{item}</>
	}
	return (
		<>
			<CollapseContainer ref={textContainerRef} $lineClamp={lineClamp} $isExpanded={isExpanded}>
				{item}
			</CollapseContainer>
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
