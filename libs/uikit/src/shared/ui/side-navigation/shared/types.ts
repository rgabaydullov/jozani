import { CSSProperties, ReactNode, SyntheticEvent } from 'react';

export interface ISideNavigationActionProps {
  isActive?: boolean;
  disabled?: boolean;
  label: string;
  icon?: ReactNode;
  className?: string;
  onClick?(e?: SyntheticEvent): void;
}

export interface ISideNavigationWrapperProps {
  isHovered?: boolean;
  isHoverDisabled?: boolean;
  className?: string;
  style?: CSSProperties;
  onChange?(isHovered?: boolean): void;
}

export interface ISideNavigationPinButtonProps {
  isVisible?: boolean;
  isPinned?: boolean;
  className?: string;
  onClick?(isPinned?: boolean, isVisible?: boolean): void;
}
