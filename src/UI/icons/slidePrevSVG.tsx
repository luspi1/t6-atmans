import { type FC } from 'react'

type SlidePrevSvgProps = {
	variant?: 'main' | 'sm' | 'gallery'
}

export const SlidePrevSvg: FC<SlidePrevSvgProps> = ({ variant = 'main' }) => {
	if (variant === 'gallery')
		return (
			<svg
				width='28'
				height='40'
				viewBox='0 0 28 40'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g>
					<rect
						x='27.6914'
						y='40'
						width='27.6923'
						height='40'
						rx='5'
						transform='rotate(-180 27.6914 40)'
						fill='black'
						fillOpacity='0.3'
					/>
				</g>
				<path
					d='M10.463 19.6041C10.463 19.4264 10.5574 19.1597 10.7462 19.0708L16.4085 13.739C16.6916 13.4724 17.2578 13.4724 17.6353 13.739C17.9184 14.0056 17.9184 14.5388 17.6353 14.8943L12.5392 19.693L17.6353 24.4916C17.9184 24.7582 17.9184 25.2914 17.6353 25.6468C17.3522 25.9134 16.786 25.9134 16.4085 25.6468L10.7462 20.315C10.5574 20.0484 10.463 19.7818 10.463 19.6041Z'
					fill='white'
				/>
			</svg>
		)

	if (variant === 'sm')
		return (
			<svg
				width='28'
				height='40'
				viewBox='0 0 28 40'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g>
					<rect
						x='28'
						y='40'
						width='28'
						height='40'
						rx='5'
						transform='rotate(-180 28 40)'
						fill='#B3B3B3'
						fillOpacity='1'
					/>
				</g>
				<path
					d='M10 20.3918C10 20.1752 10.115 19.8502 10.3451 19.7419L17.246 13.2437C17.5911 12.9188 18.2812 12.9188 18.7412 13.2437C19.0863 13.5686 19.0863 14.2185 18.7412 14.6517L12.5304 20.5001L18.7412 26.3485C19.0863 26.6734 19.0863 27.3231 18.7412 27.7563C18.3962 28.0812 17.7061 28.0812 17.246 27.7563L10.3451 21.2581C10.115 20.9332 10 20.6084 10 20.3918Z'
					fill='white'
				/>
			</svg>
		)

	return (
		<svg width='45' height='65' viewBox='0 0 45 65' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g>
				<rect
					x='45'
					y='65'
					width='45'
					height='65'
					rx='5'
					transform='rotate(-180 45 65)'
					fill='black'
					fillOpacity='0.3'
				/>
			</g>
			<path
				d='M17 31.8557C17 31.5669 17.1534 31.1336 17.4601 30.9892L26.6613 22.3249C27.1214 21.8917 28.0415 21.8917 28.655 22.3249C29.115 22.7581 29.115 23.6246 28.655 24.2022L20.3738 32.0001L28.655 39.7979C29.115 40.2312 29.115 41.0975 28.655 41.6751C28.1949 42.1083 27.2748 42.1083 26.6613 41.6751L17.4601 33.0108C17.1534 32.5776 17 32.1445 17 31.8557Z'
				fill='white'
			/>
		</svg>
	)
}
