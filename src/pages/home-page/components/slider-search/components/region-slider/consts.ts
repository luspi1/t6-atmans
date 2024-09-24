import { type SwiperProps } from 'swiper/react/swiper-react'

import { DisplayBreakpoints } from 'src/helpers/consts'

export const regionSliderOptions: SwiperProps = {
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 2,
	loop: true,
	grabCursor: true,
	breakpoints: {
		[DisplayBreakpoints.Sm]: {
			slidesPerView: 3,
		},
		[DisplayBreakpoints.Lg]: {
			slidesPerGroup: 2,
			slidesPerView: 6,
		},
		[DisplayBreakpoints.Xxl]: {
			slidesPerGroup: 3,
			slidesPerView: 9,
		},
	},
}
