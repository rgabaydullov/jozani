import { Link } from '@jozani/uikit';
import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

const LogoCaption = styled.div`
  font-size: 2.6rem;
  font-weight: 900;
  color: #fff7ed;
  text-shadow: 0 0 18px rgba(0, 0, 0, .65);
`;

const randomInt = (
  min: number,
  max: number,
) => Math.floor(min + Math.random() * (max + 1 - min));

const Logo: React.FC = () => {
  const randomEmoji = String.fromCodePoint(+`1285${randomInt(13, 91)}`);

  return (
    <Link to="/" component={NextLink}>
      <LogoCaption>
        Pay L{randomEmoji}L
      </LogoCaption>
    </Link>
  );
};

export default React.memo(Logo);
