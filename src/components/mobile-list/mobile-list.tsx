import React, { useState } from 'react'

import type { CardNewsItem } from 'src/types/news'
import type { CardVideoItem } from 'src/types/videos'
import { MainButton } from 'src/UI/MainButton/MainButton'

interface MobileListProps<T> {
	items: T[]
	defaultVisibleCount?: number
	renderItem: React.ComponentType<T>
	classListItems: string
}

const MobileList = <T extends CardNewsItem | CardVideoItem>({
	items,
	defaultVisibleCount = 2,
	renderItem: RenderItem,
	classListItems,
}: MobileListProps<T>) => {
	const [isExpanded, setIsExpanded] = useState(false)

	const toggleList = () => {
		setIsExpanded(!isExpanded)
	}

	const visibleItems = isExpanded ? items : items?.slice(0, defaultVisibleCount)

	return (
		<>
			<div className={classListItems}>
				{visibleItems?.map((item) => <RenderItem key={item.id} {...item} />)}
			</div>
			{items?.length > defaultVisibleCount && (
				<MainButton $variant='show' $radius='3px' $height='45px' $padding='0' onClick={toggleList}>
					{isExpanded ? 'Скрыть' : 'Показать ещё'}
				</MainButton>
			)}
		</>
	)
}

export default MobileList
