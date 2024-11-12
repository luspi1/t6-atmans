import { useEffect, useState } from 'react'

type UseComparatorProps = {
	ref: React.MutableRefObject<HTMLDivElement | null>
	lineClamp?: number
}

export const useComparator = ({ ref, lineClamp = 14 }: UseComparatorProps): boolean => {
	const [isOverflowing, setIsOverflowing] = useState(false)

	useEffect(() => {
		if (!ref.current) {
			return
		}

		const { clientHeight } = ref.current
		const lineHeight = parseFloat(getComputedStyle(ref.current).lineHeight)
		const maxHeight = lineClamp * lineHeight

		setIsOverflowing(clientHeight > maxHeight)
	}, [ref, lineClamp])

	return isOverflowing
}
