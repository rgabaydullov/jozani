import React, { useCallback, useMemo, useState } from 'react';
import { getCssVar } from '../../../../lib';
import { IconSidebarPin, IconSidebarUnpin } from '../../icons';
import { ISideNavigationPinButtonProps } from './types';
import { StyledPinButton } from './ui';

const PinButton: React.FC<ISideNavigationPinButtonProps> = ({
  isVisible = false,
  isPinned = false,
  onClick: _onClick,
}) => {

  const [isHovered, setIsHovered] = useState(false);

  const fill = isHovered
    ? getCssVar('grey', 100)
    : getCssVar('grey', 500);

  const Icon = useMemo(() => {
    if (isPinned) {
      return IconSidebarUnpin;
    }

    return IconSidebarPin;
  }, [isHovered, isPinned]);

  const onClick = useCallback(() => {
    if (_onClick) {
      _onClick(isPinned, isVisible);
    }
  }, [isPinned, isVisible, _onClick]);

  return (
    <StyledPinButton
      onClick={onClick}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon fill={fill} />
    </StyledPinButton>
  );
};

export default React.memo(PinButton);
