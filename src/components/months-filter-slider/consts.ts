import { type SwiperProps } from 'swiper/react/swiper-react'

import { DisplayBreakpoints } from 'src/helpers/consts'

export const monthsSliderOptions: SwiperProps = {
	slidesPerView: 1,
	spaceBetween: 2,
	breakpoints: {
		[DisplayBreakpoints.Sm]: {
			slidesPerView: 2,
		},
		[DisplayBreakpoints.Md]: {
			slidesPerView: 4,
		},
		[DisplayBreakpoints.Lg]: {
			slidesPerView: 7,
		},
		[DisplayBreakpoints.Xxl]: {
			slidesPerView: 11,
			spaceBetween: 12,
		},
	},
}
