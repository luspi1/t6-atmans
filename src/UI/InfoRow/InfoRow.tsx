import { type FC, type ReactNode } from 'react'

import styled from 'styled-components'

type InfoRowStyleProps = {
	$margin?: string
	$alignItems?: string
	$gap?: string
	$titleWidth?: string
	$titleSize?: string
	$titleWeight?: string
	$labelMaxWidth?: string
}

type InfoRowProps = {
	wrapperClassname?: string
	titleClassname?: string
	title: string
	label: ReactNode
} & InfoRowStyleProps

const StyledInfoRow = styled.div<InfoRowStyleProps>`
	margin: ${({ $margin }) => $margin ?? '0 0 10px 0'};
	display: flex;
	align-items: ${({ $alignItems }) => $alignItems ?? 'flex-start'};
	gap: ${({ $gap }) => $gap ?? '10px'};
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 5px;
	}

	h6 {
		font-size: ${({ $titleSize }) => $titleSize ?? '16px'};
		font-weight: ${({ $titleWeight }) => $titleWeight ?? '700'};
		width: ${({ $titleWidth }) => $titleWidth ?? '190px'};
		min-width: ${({ $titleWidth }) => $titleWidth ?? '190px'};
	}

	a {
		color: #015db9;
	}

	& > p {
		font-size: 16px;
		max-width: ${({ $labelMaxWidth }) => $labelMaxWidth ?? 'initial'};
	}
`
export const InfoRow: FC<InfoRowProps> = ({
	title,
	label,
	wrapperClassname,
	titleClassname,
	...props
}) => {
	return (
		<StyledInfoRow className={wrapperClassname} {...props}>
			<h6 className={titleClassname}>{title}</h6>
			<p>{label}</p>
		</StyledInfoRow>
	)
}
