import { getCssVar } from 'libs/uikit/src/lib';
import styled from 'styled-components';

export const PaletteSubstrate = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    flex-direction: row;
  }
`;

export const ColorBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 8rem;
  height: 8rem;
  margin: .4rem;
  border: 1px solid rgba(198, 202, 213, .21);
  border-radius: .8rem;
  overflow: hidden;
`;

export const ColorTextBlock = styled.div`
  padding: .4rem;
  height: 4rem;
  background: white;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${getCssVar('black', 100)};

  & > div {
    font-size: 1rem;
    font-weight: normal;
    color: ${getCssVar('grey', 500)};
  }
`;
