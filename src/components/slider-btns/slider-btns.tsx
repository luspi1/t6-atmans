import React, { type FC, type RefObject } from 'react'
import styled from 'styled-components'

import { SlidePrevSvg } from 'src/UI/icons/slidePrevSVG'
import { SlideNextSvg } from 'src/UI/icons/slideNextSVG'

import styles from './index.module.scss'
import { type SwiperRef } from 'swiper/react'

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
		height: ${({ $variant }) => ($variant === 'sm' ? '22px' : '50px')};
		transform: translateY(-50%);
		&:hover {
			svg rect {
				fill-opacity: 0.4;
			}
		}
	}
`

export const SliderBtns: FC<SliderBtnsProps & SliderProps> = ({
	swiperRef,
	$variant = 'sm',
	...props
}) => {
	const handlePrev = () => {
		swiperRef.current?.swiper.slidePrev()
	}

	const handleNext = () => {
		swiperRef.current?.swiper.slideNext()
	}
	return (
		<StyledSliderBtns {...props}>
			<button className={styles.slideBtnPrev} type='button' onClick={handlePrev}>
				<SlidePrevSvg variant={$variant} />
			</button>
			<button className={styles.slideBtnNext} type='button' onClick={handleNext}>
				<SlideNextSvg variant={$variant} />
			</button>
		</StyledSliderBtns>
	)
}
