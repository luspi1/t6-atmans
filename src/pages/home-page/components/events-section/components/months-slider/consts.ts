import { type SwiperProps } from 'swiper/react/swiper-react'

import { DisplayBreakpoints } from 'src/helpers/consts'

export const monthsSliderOptions: SwiperProps = {
	slidesPerView: 1,
	spaceBetween: 2,
	breakpoints: {
		[DisplayBreakpoints.Sm]: {
			slidesPerView: 3,
		},
		[DisplayBreakpoints.Lg]: {
			slidesPerView: 5,
		},
		[DisplayBreakpoints.Xxl]: {
			slidesPerView: 7,
			spaceBetween: 13,
		},
	},
}
