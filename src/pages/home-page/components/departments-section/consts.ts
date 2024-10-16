import { type SwiperProps } from 'swiper/react'

export const departmentsSliderOptions: SwiperProps = {
	slidesPerView: 1,
	grabCursor: true,
	spaceBetween: 10,
	centeredSlides: true,
	breakpoints: {
		1650: {
			slidesPerView: 1.555,
		},
		1260: {
			slidesPerView: 1,
		},
		1024: {
			slidesPerView: 1.3,
		},
		768: {
			slidesPerView: 1,
		},
	},
}
export const departmentsThumbSliderOptions: SwiperProps = {
	slidesPerView: 2,
	spaceBetween: 15,
	breakpoints: {
		1650: {
			slidesPerView: 7,
		},
		1260: {
			slidesPerView: 6,
		},
		1024: {
			slidesPerView: 5,
		},
		768: {
			slidesPerView: 4,
		},
	},
}
