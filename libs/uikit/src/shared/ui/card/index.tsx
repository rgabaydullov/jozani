import React, { useMemo } from 'react';
import Divider from '../divider';
import {
  CardContainer,
  CardFooter,
  CardTitleWrapper, StyledCard,
} from './shared/ui';
import { ICardProps } from './types';

const Card: React.FC<ICardProps> = ({
  isFullWidth = false,
  isFullHeight = false,
  title,
  children,
  footer,
  ...props
}) => {
  const titleComponent = useMemo(() => {
    if (title) {
      return (
        <CardTitleWrapper>
          {title}
        </CardTitleWrapper>
      );
    }

    return null;
  }, [title]);

  const footerContent = useMemo(() => {
    if (footer) {
      return (
        <CardFooter>
          {footer}
        </CardFooter>
      );
    }

    return null;
  }, [footer]);

  return (
    <StyledCard
      isFullWidth={isFullWidth}
      isFullHeight={isFullHeight}
      {...props}
    >
      {titleComponent}

      <CardContainer>
        {children}
      </CardContainer>

      {footerContent}
    </StyledCard>
  );
};

export default React.memo(Card);

export * from './types';
