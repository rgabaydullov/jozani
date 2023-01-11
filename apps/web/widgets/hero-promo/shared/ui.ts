import styled from 'styled-components';

export const StyledHeroWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50vh;
`;

export const HeroView = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  clip-path: url(#curve);
  overflow: hidden;
`;

export const HeroContent = styled.div`
  position: relative;
  margin: 7.4rem 0 0;
  padding: 3.6rem 0;
`;

export { default as HeroClipPath } from './clip-path';
