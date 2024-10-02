import { type SwiperProps } from 'swiper/react/swiper-react'

import { DisplayBreakpoints } from 'src/helpers/consts'

export const regionSliderOptions: SwiperProps = {
	slidesPerView: 1,
	spaceBetween: 2,
	grabCursor: true,
	breakpoints: {
		[DisplayBreakpoints.Sm]: {
			slidesPerView: 3,
		},
		[DisplayBreakpoints.Lg]: {
			slidesPerView: 6,
		},
		[DisplayBreakpoints.Xxl]: {
			slidesPerView: 9,
		},
	},
}
