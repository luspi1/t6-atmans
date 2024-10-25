import { type FC } from 'react'
type SlideNextSvgProps = {
	variant?: 'main' | 'sm'
}

export const SlideNextSvg: FC<SlideNextSvgProps> = ({ variant = 'main' }) => {
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
					<rect width='28' height='40' rx='5' fill='black' fillOpacity='0.3' />
				</g>
				<path
					d='M19 19.6082C19 19.8248 18.885 20.1498 18.6549 20.2581L11.754 26.7563C11.4089 27.0812 10.7188 27.0812 10.2588 26.7563C9.91374 26.4314 9.91374 25.7815 10.2588 25.3483L16.4696 19.4999L10.2588 13.6515C9.91374 13.3266 9.91374 12.6769 10.2588 12.2437C10.6038 11.9188 11.2939 11.9188 11.754 12.2437L18.6549 18.7419C18.885 19.0668 19 19.3916 19 19.6082Z'
					fill='white'
				/>
			</svg>
		)

	return (
		<svg width='45' height='65' viewBox='0 0 45 65' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g>
				<rect width='45' height='65' rx='5' fill='black' fillOpacity='0.3' />
			</g>
			<path
				d='M28 33.1443C28 33.4331 27.8466 33.8664 27.5399 34.0108L18.3387 42.6751C17.8786 43.1083 16.9585 43.1083 16.345 42.6751C15.885 42.2419 15.885 41.3754 16.345 40.7978L24.6262 32.9999L16.345 25.2021C15.885 24.7688 15.885 23.9025 16.345 23.3249C16.8051 22.8917 17.7252 22.8917 18.3387 23.3249L27.5399 31.9892C27.8466 32.4224 28 32.8555 28 33.1443Z'
				fill='white'
			/>
		</svg>
	)
}
