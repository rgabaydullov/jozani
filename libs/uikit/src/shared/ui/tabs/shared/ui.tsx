import {
  Tab as MuiTabItem,
  Tabs as MuiTabs,
} from '@mui/material';
import styled from 'styled-components';
import { getCssVar, getSizeUnit } from '../../../../lib';
import { ITabsProps } from '../types';

export const TabsWrapper = styled.section``;

export const StyledTabs = styled(MuiTabs)`
  & > div {
    & > span {
      background: ${({ isMinified = false }: Pick<ITabsProps, 'isMinified'>) => (isMinified
        ? getCssVar('blue', 500)
        : 'transparent')};
    }
  }
`;

type IStyledTabItemProps = Pick<ITabsProps, 'isMinified' | 'orientation'>;

export const StyledTabItem = styled(MuiTabItem)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: ${({ isMinified = false }: IStyledTabItemProps) => (isMinified
    ? getSizeUnit(24)
    : 0)};
  padding: 0 .8rem;
  font-size: ${({ isMinified = false }: IStyledTabItemProps) => (isMinified
    ? getCssVar('font', 'h5')
    : getCssVar('font', 'h6'))};
  font-weight: ${getCssVar('font', 'bold')};
  color: ${getCssVar('grey', 500)};

  &:first-child {
    margin-left: 0;
    padding-left: ${({ orientation = 'horizontal' }: IStyledTabItemProps) => (orientation === 'horizontal'
      ? 0
      : getSizeUnit(8))};
  }

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.4rem;
    margin-right: 1.6rem;
  }

  span {
    display: flex;
    align-items: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &[class*=selected] {
    color: ${getCssVar('grey', 100)};
  }
`;

export const TabsPanelList = styled.div`

`;

export const TabPanel = styled.div`

`;
