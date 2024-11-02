import React, { useState } from 'react';
import { MainButton } from 'src/UI/MainButton/MainButton';
import styled, { css } from 'styled-components';

interface TextListProps {
  item: React.ReactNode;
  lineClamp?: number; 
}

type SharedStylesTypes = {
	$lineClamp?: number
	$isExpanded?: boolean
}

const sharedStyles = css<SharedStylesTypes>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.45;
  max-height: ${({ $lineClamp }) => `${($lineClamp ?? 14) * 38}px`};
  transition: max-height 0.3s ease;
  margin-bottom: 30px;
  ${({ $isExpanded }) =>
    $isExpanded &&
    `
    -webkit-line-clamp: unset;
    max-height: none;
  `}
`

const TextContainer = styled.div<SharedStylesTypes>`
	${sharedStyles}
`

const MobileTextContainer: React.FC<TextListProps> = ({
  item,
  lineClamp = 14,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleList = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <TextContainer $lineClamp={lineClamp} $isExpanded={isExpanded}>
        {item}
      </TextContainer>
      <MainButton $variant='show' $radius='3px' $height='45px' $padding='0' onClick={toggleList}>
				{isExpanded ? 'Скрыть' : 'Показать ещё'}
			</MainButton>
    </>
  );
};

export default MobileTextContainer;