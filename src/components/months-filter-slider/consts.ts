import { type SwiperProps } from 'swiper/react/swiper-react'

import { DisplayBreakpoints } from 'src/helpers/consts'

export const monthsSliderOptions: SwiperProps = {
	slidesPerView: 2,
	spaceBetween: 12,
	breakpoints: {
		[DisplayBreakpoints.Sm]: {
			slidesPerView: 2,
			spaceBetween: 2,
		},
		[DisplayBreakpoints.Md]: {
			slidesPerView: 4,
			spaceBetween: 2,
		},
		[DisplayBreakpoints.Lg]: {
			slidesPerView: 7,
			spaceBetween: 2,
		},
		[DisplayBreakpoints.Xxl]: {
			slidesPerView: 11,
			spaceBetween: 12,
		},
	},
}
