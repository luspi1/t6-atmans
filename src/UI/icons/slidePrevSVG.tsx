import { type FC } from 'react'

type SlidePrevSvgProps = {
	variant?: 'sm' | 'lg' | 'opaque' | 'sm-light'
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
						x='32.4225'
						y='39.9941'
						width='32.2115'
						height='40'
						rx='5'
						transform='rotate(180 32.4225 39.9941)'
						fill='white'
					/>
				</g>
				<path
					d='M11.9478 19.3859C11.9478 19.1693 12.0561 18.8443 12.2727 18.736L18.7709 12.2378C19.0958 11.9129 19.7456 11.9129 20.1788 12.2378C20.5037 12.5627 20.5037 13.2126 20.1788 13.6458L14.3304 19.4942L20.1788 25.3426C20.5037 25.6675 20.5037 26.3172 20.1788 26.7505C19.8539 27.0754 19.2041 27.0754 18.7709 26.7505L12.2727 20.2523C12.0561 19.9274 11.9478 19.6025 11.9478 19.3859Z'
					fill='black'
				/>
			</svg>
		)
	}
	if (variant === 'sm-light') {
		return (
			<svg
				width='20'
				height='30'
				viewBox='0 0 20 30'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<rect
					x='19.9988'
					y='30'
					width='19.3269'
					height='30'
					rx='5'
					transform='rotate(-180 19.9988 30)'
					fill='#E7E7E7'
				/>
				<path
					d='M7.34897 14.9279C7.34897 14.7835 7.42117 14.5668 7.56557 14.4946L11.8977 10.1625C12.1143 9.94585 12.5475 9.94585 12.8363 10.1625C13.0529 10.3791 13.0529 10.8123 12.8363 11.1011L8.93742 15L12.8363 18.899C13.0529 19.1156 13.0529 19.5487 12.8363 19.8375C12.6197 20.0542 12.1865 20.0542 11.8977 19.8375L7.56557 15.5054C7.42117 15.2888 7.34897 15.0723 7.34897 14.9279Z'
					fill='#8D8D8D'
					stroke='#8D8D8D'
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
