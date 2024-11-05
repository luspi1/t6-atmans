import React, { type FC, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import styled, { css } from 'styled-components'

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

type ButtonComponentProps = {
	as?: 'button' | 'link' | 'route'
	children?: ReactNode
	svgNode?: ReactNode
	$padding?: string
	$height?: string
	$radius?: string
	$width?: string
	$variant?: 'primary' | 'light' | 'show'
}

type SharedStylesTypes = {
	$padding?: string
	$height?: string
	$radius?: string
	$width?: string
	$variant?: 'primary' | 'light' | 'show'
}

const sharedStyles = css<SharedStylesTypes>`
	padding: ${({ $padding }) => $padding ?? '0 33px'};
	height: ${({ $height }) => $height ?? '60px'};
	width: ${({ $width }) => $width ?? '100%'};
	border-radius: ${({ $radius }) => $radius ?? '5px'};

	background-color: ${({ $variant }) => {
		if ($variant === 'show') return '#F2F1F7'
		if ($variant === 'light') return '#FFFFFF'
		return '#DD0A15'
	}};
	color: ${({ $variant }) => {
		if ($variant === 'primary') return '#ffffff'
		return '#000000'
	}};
	border: none;
	text-decoration: none;
	font-weight: 400;
	font-size: ${({ $variant }) => {
		if ($variant === 'show') return '18px'
		return '25px'
	}};
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s;
	width: ${({ $variant }) => {
		if ($variant === 'show') return '100%'
	}};
	&:hover {
		background-color: ${({ $variant }) => {
			if ($variant === 'light') return '#cdcbcb'
			if ($variant === 'show') return '#F2F1F7'
			return '#c40a14'
		}};
		color: ${({ $variant }) => {
			if ($variant === 'primary') return '#ffffff'
			return '#000000'
		}};
	}
`

const StyledButton = styled.button<SharedStylesTypes>`
	${sharedStyles}
`
const StyledLink = styled.a<SharedStylesTypes>`
	${sharedStyles}
`
const StyledRouteLink = styled(Link)<SharedStylesTypes>`
	${sharedStyles}
`

export const MainButton: FC<ButtonComponentProps & (ButtonProps | AnchorProps | LinkProps)> = ({
	children,
	as = 'button',
	$variant = 'primary',
	...props
}) => {
	if (as === 'button') {
		return (
			<StyledButton $variant={$variant} {...(props as ButtonProps)}>
				{children}
			</StyledButton>
		)
	}
	if (as === 'link') {
		return (
			<StyledLink $variant={$variant} {...(props as AnchorProps)}>
				{children}
			</StyledLink>
		)
	}
	if (as === 'route') {
		return (
			<StyledRouteLink $variant={$variant} {...(props as LinkProps)}>
				{children}
			</StyledRouteLink>
		)
	}
	return null
}
