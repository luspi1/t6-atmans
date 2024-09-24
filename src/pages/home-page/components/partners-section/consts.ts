import { type SwiperProps } from 'swiper/react/swiper-react'

import { DisplayBreakpoints } from 'src/helpers/consts'

export const partnersSliderOptions: SwiperProps = {
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 10,
	loop: true,
	grabCursor: true,
	breakpoints: {
		[DisplayBreakpoints.Sm]: {
			slidesPerView: 2,
		},
		[DisplayBreakpoints.Lg]: {
			slidesPerGroup: 1,
			slidesPerView: 4,
		},
		[DisplayBreakpoints.Xxl]: {
			slidesPerGroup: 2,
			slidesPerView: 6,
		},
	},
}

export const PartnersSliderItems = [
	{
		img: 'https://атманки2022.рф/uploads/catalogimages/original/246_mcai.jpg',
		link: '#',
	},
	{
		img: 'https://атманки2022.рф/uploads/catalogimages/original/199_zhupikov.jpg',
		link: '#',
	},
	{
		img: 'https://upload.wikimedia.org/wikipedia/ru/archive/e/ea/20221113222557%21Dobry_Logo.png',
		link: '#',
	},
	{
		img: 'https://assets.turbologo.ru/blog/ru/2020/02/18161800/sber-logo.png',
		link: '#',
	},
	{
		img: 'https://npotau.ru/templates/default/img/logo.png',
		link: 'https://npotau.ru/',
	},
	{
		img: 'https://атманки2022.рф/uploads/catalogimages/original/238_pivovar.jpg',
		link: '#',
	},
	{
		img: 'https://атманки2022.рф/uploads/catalogimages/original/111_mts.jpg',
		link: '#',
	},
	{
		img: 'https://lh5.googleusercontent.com/proxy/mMbTDHpoF9FMDZDvFWt1yozK5Ged5pxkz55s5nRYo3Q7uszpBEh9ub52nQ3JW26y8BqRaFV9AwBjf-IefsADd3M_fb4PRXwwfeyTaxTwodfeHUY__lX9zVMhKEopFg',
		link: '#',
	},
	{
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYpfk0AllSUzPUcBESm5KTKsWqNC1PbeqYfA&s',
		link: '#',
	},
	{
		img: 'https://upload.wikimedia.org/wikipedia/ru/archive/e/ea/20221113222557%21Dobry_Logo.png',
		link: '#',
	},
	{
		img: 'https://assets.turbologo.ru/blog/ru/2020/02/18161800/sber-logo.png',
		link: '#',
	},
	{
		img: 'https://npotau.ru/templates/default/img/logo.png',
		link: 'https://npotau.ru/',
	},
	{
		img: 'https://атманки2022.рф/uploads/catalogimages/original/238_pivovar.jpg',
		link: '#',
	},
	{
		img: 'https://sveres.ru/upload/medialibrary/eb4/003.png',
		link: '#',
	},
]
