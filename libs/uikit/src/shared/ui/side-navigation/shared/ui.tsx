import { getCssVar } from 'libs/uikit/src/lib';
import styled from 'styled-components';
import { ISideNavigationActionProps, ISideNavigationWrapperProps } from './types';

// @TODO: px -> rem
export const SideNavigationWrapper = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  margin: 72px 0 82px;
  padding: 32px 0;
  width: 72px;
  background: ${getCssVar('black', 100)};
  transform: ${({ isHovered = false }: ISideNavigationWrapperProps) => (isHovered
    ? 'translateX(0)'
    : 'translateX(-100%)')};
  transition: all .27s;
`;

export const SideNavigationCTA = styled.button`
  width: 5px;
  height: 34px;
  background: ${getCssVar('grey', 900)};
  border: 0 solid transparent;
  border-radius: 100px;
  transform: ${({ isHovered = false }: ISideNavigationWrapperProps) => (isHovered
    ? 'translateX(-100%)'
    : 'translateX(0)')};
  opacity: ${({ isHovered = false }: ISideNavigationWrapperProps) => (isHovered
    ? 0
    : 1)};
  transition: all .27s;

  &:hover {
    background: ${getCssVar('grey', 950)};
    cursor: pointer;
  }
`;

export const SideNavigationCTAWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  right: -38px;
  width: 34px;
  height: 68px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const StyledPinButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
`;

export const StyledAction = styled.button<Pick<ISideNavigationActionProps,
  'isActive' |
  'onClick'
>>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 14px 0;
  background: transparent;
  border: 2px transparent solid;
  border-left-color: ${({ isActive = false }) => isActive
    ? getCssVar('blue', 500)
    : 'transparent'};
  color: ${({ isActive = false }) => isActive
    ? getCssVar('grey', 100)
    : getCssVar('grey', 500)};
  transition: all .25s;

  &:hover {
    color: ${getCssVar('grey', 500)};
  }
`;

export const StyledActionLabel = styled.span`
  margin-top: 4px;
  font-size: 10px;
  color: currentColor;
`;
