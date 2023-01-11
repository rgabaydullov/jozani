import { Chip as MuiChip } from '@mui/material';
import { getCssVar } from 'libs/uikit/src/lib';
import styled from 'styled-components';

export const ChipComponent = styled(MuiChip)`
  padding: .8rem;
  height: auto;
  font-family: var(--font-family);
  font-size: ${getCssVar('font', 'small')};
  border-color: ${getCssVar('grey', 950)};
  border-radius: 100px;

  & > span {
    padding: 0 .8rem;
  }

  [class*=avatar] {
    margin: 0;
  }
`;
