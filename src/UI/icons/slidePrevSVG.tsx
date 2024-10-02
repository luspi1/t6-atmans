import { type FC } from 'react'

type SlidePrevSvgProps = {
	variant?: 'sm' | 'lg' | 'opaque'
}

export const SlidePrevSvg: FC<SlidePrevSvgProps> = ({ variant = 'sm' }) => {
	if (variant === 'lg') {
		return (
			<svg
				width='33'
				height='50'
				viewBox='0 0 33 50'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g style={{ mixBlendMode: 'multiply' }}>
					<rect
						x='33'
						y='50'
						width='32.2115'
						height='50'
						rx='5'
						transform='rotate(-180 33 50)'
						fill='black'
						fillOpacity='0.3'
					/>
				</g>
				<path
					d='M12.2337 25.1332C12.2337 24.9347 12.333 24.6369 12.5315 24.5377L18.4864 18.5827C18.7842 18.2849 19.3797 18.2849 19.7767 18.5827C20.0744 18.8804 20.0744 19.476 19.7767 19.873L14.4172 25.2325L19.7767 30.592C20.0744 30.8897 20.0744 31.4851 19.7767 31.8821C19.4789 32.1799 18.8834 32.1799 18.4864 31.8821L12.5315 25.9272C12.333 25.6294 12.2337 25.3317 12.2337 25.1332Z'
					fill='white'
				/>
			</svg>
		)
	}
	if (variant === 'opaque') {
		return (
			<svg
				width='33'
				height='40'
				viewBox='0 0 33 40'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g style={{ mixBlendMode: 'multiply' }}>
					<rect
						x='32.2115'
						y='40'
						width='32.2115'
						height='40'
						rx='5'
						transform='rotate(-180 32.2115 40)'
						fill='#E7E7E7'
						fillOpacity='1'
					/>
				</g>
				<path
					d='M11.7368 19.3918C11.7368 19.1752 11.8451 18.8502 12.0617 18.7419L18.5599 12.2437C18.8848 11.9188 19.5347 11.9188 19.9679 12.2437C20.2928 12.5686 20.2928 13.2185 19.9679 13.6517L14.1195 19.5001L19.9679 25.3485C20.2928 25.6734 20.2928 26.3231 19.9679 26.7563C19.643 27.0812 18.9931 27.0812 18.5599 26.7563L12.0617 20.2581C11.8451 19.9332 11.7368 19.6084 11.7368 19.3918Z'
					fill='black'
				/>
			</svg>
		)
	}

	return (
		<svg width='20' height='30' viewBox='0 0 20 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect
				x='20'
				y='30'
				width='19.3269'
				height='30'
				rx='5'
				transform='rotate(-180 20 30)'
				fill='black'
				fillOpacity='0.2'
			/>
			<path
				d='M7.35019 14.9279C7.35019 14.7835 7.42239 14.5668 7.56679 14.4946L11.8989 10.1625C12.1155 9.94585 12.5487 9.94585 12.8375 10.1625C13.0542 10.3791 13.0542 10.8123 12.8375 11.1011L8.93864 15L12.8375 18.899C13.0542 19.1156 13.0542 19.5487 12.8375 19.8375C12.6209 20.0542 12.1877 20.0542 11.8989 19.8375L7.56679 15.5054C7.42239 15.2888 7.35019 15.0723 7.35019 14.9279Z'
				fill='white'
			/>
		</svg>
	)
}
