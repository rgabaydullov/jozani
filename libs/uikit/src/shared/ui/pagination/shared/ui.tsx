import styled from 'styled-components';
import { Pagination as MuiPagination } from '@mui/material';
import { getCssVar } from 'libs/uikit/src/lib';

export const PaginationWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin: 2.4rem 0;
`;

export const StyledPagination = styled(MuiPagination)``;

export const PaginationDropdown = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const PaginationDropdownButton = styled.button`
  margin-left: .8rem;
  background: transparent;
  font-size: ${getCssVar('font', 'common')};
  font-weight: ${getCssVar('font', 'bold')};
`;

export const PaginationDropdownIcon = styled.i`
  display: inline-flex;
  margin-left: .8rem;
`;
