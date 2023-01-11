import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material';
import styled from 'styled-components';
import { BREAKPOINTS, getCssVar } from '../../../../lib';

export const StyledBreadcrumbs = styled(MuiBreadcrumbs)`
  margin: 2.4rem 0;
  color: inherit;

  a {
    color: inherit;

    &:hover {
      font-weight: ${getCssVar('font', 'bold')};
      color: ${getCssVar('grey', 500)};
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    margin: 1.6rem 0;
  }
`;
