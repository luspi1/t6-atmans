import React, { type FC, type RefObject, useEffect, useState } from 'react'
import styled from 'styled-components'

import { SlidePrevSvg } from 'src/UI/icons/slidePrevSVG'
import { SlideNextSvg } from 'src/UI/icons/slideNextSVG'

import styles from './index.module.scss'
import { type SwiperRef } from 'swiper/react'
import cn from 'classnames'

type SliderBtnsProps = {
	$topPosition?: string
	$btnsSpacing?: string
	$variant?: 'sm' | 'lg' | 'opaque'
}

type SliderProps = {
	swiperRef: RefObject<SwiperRef>
}

const StyledSliderBtns = styled.div<SliderBtnsProps>`
	display: flex;
	justify-content: space-between;
	position: absolute;
	left: 50%;
	z-index: 1;
	height: 0;
	transform: translate(-50%, -50%);
	width: ${({ $btnsSpacing }) => $btnsSpacing ?? '100%'};
	top: ${({ $topPosition }) => $topPosition ?? '0'};

	button {
		height: min-content;
		transform: translateY(-50%);
		&:hover {
			svg rect {
				fill-opacity: ${({ $variant }) => ($variant === 'opaque' ? 1 : 0.4)};
				fill: ${({ $variant }) => ($variant === 'opaque' ? '#D4D4D4' : '#000000')};
			}
		}
	}
`

export const SliderBtns: FC<SliderBtnsProps & SliderProps> = ({
	swiperRef,
	$variant = 'sm',
	...props
}) => {
	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(false)

	useEffect(() => {
		if (swiperRef.current?.swiper) {
			const swiperInstance = swiperRef.current.swiper

			const updateNavigationState = () => {
				setIsBeginning(swiperInstance.isBeginning)
				setIsEnd(swiperInstance.isEnd)
			}

			swiperInstance.on('slideChange', updateNavigationState)

			updateNavigationState()

			return () => {
				swiperInstance.off('slideChange', updateNavigationState)
			}
		}
	}, [swiperRef])

	const handlePrev = () => {
		swiperRef.current?.swiper.slidePrev()
	}

	const handleNext = () => {
		swiperRef.current?.swiper.slideNext()
	}
	return (
		<StyledSliderBtns {...props} $variant={$variant}>
			<button
				className={cn(styles.slideBtnPrev, { [styles._disabled]: isBeginning })}
				type='button'
				onClick={handlePrev}
			>
				<SlidePrevSvg variant={$variant} />
			</button>
			<button
				className={cn(styles.slideBtnNext, { [styles._disabled]: isEnd })}
				type='button'
				onClick={handleNext}
			>
				<SlideNextSvg variant={$variant} />
			</button>
		</StyledSliderBtns>
	)
}
