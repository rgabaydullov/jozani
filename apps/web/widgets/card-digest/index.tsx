import React from 'react';
import {
  CardDigestBlock,
  CardDigestContainer,
  CardDigestTitle,
  CardDigestWrapper,
  DIGEST_COLORS,
  StyledCardDigest,
} from './shared';
import { ICardDigestProps } from './types';

const CardDigest: React.FC<ICardDigestProps> = ({
  type,
  bgColors = DIGEST_COLORS,
  title,
  children,
  ...props
}) => {
  return (
    <CardDigestWrapper>
      <CardDigestBlock>
        <CardDigestContainer>
          <StyledCardDigest
            type={type}
            bgColors={bgColors}
            {...props}
          >
            <CardDigestTitle variant="h6">
              {title}
            </CardDigestTitle>

            {children}
          </StyledCardDigest>
        </CardDigestContainer>
      </CardDigestBlock>
    </CardDigestWrapper>
  );
};

export default React.memo(CardDigest);

export * from './shared';
export * from './types';
