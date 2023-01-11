import React, { useMemo } from 'react';
import Divider from '../divider';
import {
  CardContainer,
  CardTitleWrapper, StyledCard,
} from './shared/ui';
import { ICardProps } from './types';

const Card: React.FC<ICardProps> = ({
  isFullWidth = false,
  isFullHeight = false,
  title,
  children,
  ...props
}) => {
  const titleComponent = useMemo(() => {
    if (title) {
      return (
        <>
          <CardTitleWrapper>
            {title}
          </CardTitleWrapper>

          <Divider />
        </>
      );
    }

    return null;
  }, [title]);

  // Content depends on 'title' prop
  const content = useMemo(() => {
    if (title) {
      return (
        <CardContainer>
          {children}
        </CardContainer>
      );
    }

    return children;
  }, [children, title]);

  return (
    <StyledCard
      isFullWidth={isFullWidth}
      isFullHeight={isFullHeight}
      {...props}
    >
      {titleComponent}

      {content}
    </StyledCard>
  );
};

export default React.memo(Card);

export * from './types';
