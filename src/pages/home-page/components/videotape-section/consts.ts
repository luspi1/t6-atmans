import { type SwiperProps } from 'swiper/react/swiper-react'

import { DisplayBreakpoints } from 'src/helpers/consts'

export const videotapeSliderOptions: SwiperProps = {
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 12,
	loop: true,
	grabCursor: true,
	breakpoints: {
		[DisplayBreakpoints.Sm]: {
			slidesPerView: 2,
		},
		[DisplayBreakpoints.Lg]: {
			slidesPerView: 3,
		},
		[DisplayBreakpoints.Xxl]: {
			slidesPerView: 4,
		},
	},
}

export const VideotapeSliderItems = [
	{
		id: '0',
		title: 'ВЕСТИ-ТАМБОВ об Атмановских кулачках - 2023',
		thumb:
			'https://i.mycdn.me/getVideoPreview?id=5363256658515&idx=4&type=39&tkn=mEYWV9Y0UtBmXLYFxIM1dHiII4c&fn=vid_w',
	},
	{
		id: '1',
		title: 'Малые Корелы. Экскурсия по Двинскому сектору музея',
		thumb: 'https://sun9-47.userapi.com/IRs714ydO_eVqVKCxRZY2Gd5jRLgtLXEIUNZ4A/gdgfru-DAy0.jpg',
	},
	{
		id: '2',
		title: 'Почему важно развивать национальные виды спорта (этноспорт)',
		thumb:
			'https://sun9-77.userapi.com/impg/OeNWr3zaF-QsFfHmc_-rbZO-FJ_VINmJe0boHg/8nILqL3n9L0.jpg?quality=90&proxy=1&sign=923a32d8f6bd8a8e39308422e3c9a197&c_uniq_tag=13xrcEi738bbyJAv5r0ST7JWBMd1U6ljBs8qWsxgOjo&type=video_thumb',
	},
	{
		id: '3',
		title: 'Русский этноспорт',
		thumb:
			'https://i.mycdn.me/getVideoPreview?id=5913254234770&idx=7&type=39&tkn=1wE77ep98UgPWAJJNXvFXZC0bWY&fn=vid_w',
	},
	{
		id: '4',
		title: 'ВЕСТИ-ТАМБОВ об Атмановских кулачках - 2023',
		thumb:
			'https://i.mycdn.me/getVideoPreview?id=5363256658515&idx=4&type=39&tkn=mEYWV9Y0UtBmXLYFxIM1dHiII4c&fn=vid_w',
	},
	{
		id: '5',
		title: 'Малые Корелы. Экскурсия по Двинскому сектору музея',
		thumb: 'https://sun9-47.userapi.com/IRs714ydO_eVqVKCxRZY2Gd5jRLgtLXEIUNZ4A/gdgfru-DAy0.jpg',
	},
	{
		id: '6',
		title: 'Почему важно развивать национальные виды спорта (этноспорт)',
		thumb:
			'https://sun9-77.userapi.com/impg/OeNWr3zaF-QsFfHmc_-rbZO-FJ_VINmJe0boHg/8nILqL3n9L0.jpg?quality=90&proxy=1&sign=923a32d8f6bd8a8e39308422e3c9a197&c_uniq_tag=13xrcEi738bbyJAv5r0ST7JWBMd1U6ljBs8qWsxgOjo&type=video_thumb',
	},
	{
		id: '7',
		title: 'Русский этноспорт',
		thumb:
			'https://i.mycdn.me/getVideoPreview?id=5913254234770&idx=7&type=39&tkn=1wE77ep98UgPWAJJNXvFXZC0bWY&fn=vid_w',
	},
]
