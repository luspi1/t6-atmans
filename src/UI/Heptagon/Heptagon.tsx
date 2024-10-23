import { type FC } from 'react'
import styled from 'styled-components'

type HeptagonProps = {
	$width?: string
	$height?: string
	$margin?: string
	$imgUrl?: string
	$imgAlt?: string
}

const StyledHeptagon = styled.div<HeptagonProps>`
	width: ${({ $width }) => $width ?? '234px'};
	height: ${({ $height }) => $height ?? '229px'};
	margin: ${({ $margin }) => $margin ?? '0'};
	position: relative;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		clip-path: polygon(50% 0%, 90% 20%, 100% 64%, 72% 100%, 28% 100%, 0% 64%, 10% 20%);
	}
`

export const Heptagon: FC<HeptagonProps> = ({ $imgAlt, $imgUrl, $width, $height, $margin }) => {
	return (
		<StyledHeptagon $width={$width} $height={$height} $margin={$margin}>
			<img src={$imgUrl} alt={$imgAlt} />
		</StyledHeptagon>
	)
}
