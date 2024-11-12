import styled from 'styled-components'
import React, { type ReactNode, forwardRef } from 'react'

type StyledTextContainerProps = {
	$lineClamp?: number
	$isExpanded?: boolean
	children: ReactNode
} & React.CSSProperties

const StyledTextContainer = styled.div<StyledTextContainerProps>`
	display: -webkit-box;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	line-height: 1.45;
	max-height: ${({ $lineClamp }) => `${$lineClamp ? `${$lineClamp * 23}px` : 'auto'}`};
	transition: max-height 0.3s ease;
	margin-bottom: 30px;
	${({ $isExpanded }) =>
		$isExpanded &&
		`
    -webkit-line-clamp: unset;
    max-height: none;
  `}
`

export const TextContainer = forwardRef<HTMLDivElement, StyledTextContainerProps>(
	({ children, ...props }, ref) => {
		return (
			<StyledTextContainer ref={ref} {...props}>
				{children}
			</StyledTextContainer>
		)
	},
)

TextContainer.displayName = 'TextContainer'
