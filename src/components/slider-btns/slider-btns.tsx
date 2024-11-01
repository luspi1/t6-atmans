import React, { type FC, type RefObject, useEffect, useState } from 'react'
import { type SwiperRef } from 'swiper/react'
import cn from 'classnames'
import styled from 'styled-components'

import { SlidePrevSvg } from 'src/UI/icons/slidePrevSVG'
import { SlideNextSvg } from 'src/UI/icons/slideNextSVG'

import styles from './index.module.scss'

type SliderBtnsProps = {
	$topPosition?: string
	$btnsSpacing?: string
}

type SliderProps = {
	swiperRef: RefObject<SwiperRef>
	className?: string
	variant?: 'main' | 'sm'
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
				fill-opacity: 0.4;
			}
		}
	}
	@media (max-width: 425px) {
		display: none;
	}
`

export const SliderBtns: FC<SliderBtnsProps & SliderProps> = ({
	swiperRef,
	className,
	variant = 'main',
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
		<StyledSliderBtns className={className} {...props}>
			<button
				className={cn(styles.slideBtnPrev, {
					[styles._disabled]: isBeginning && !swiperRef.current?.swiper?.params?.loop,
				})}
				type='button'
				onClick={handlePrev}
			>
				<SlidePrevSvg variant={variant} />
			</button>
			<button
				className={cn(styles.slideBtnNext, {
					[styles._disabled]: isEnd && !swiperRef.current?.swiper?.params?.loop,
				})}
				type='button'
				onClick={handleNext}
			>
				<SlideNextSvg variant={variant} />
			</button>
		</StyledSliderBtns>
	)
}
