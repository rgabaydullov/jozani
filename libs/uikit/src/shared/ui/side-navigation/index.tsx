import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  SideNavigationCTA,
  SideNavigationCTAWrapper,
  SideNavigationWrapper,
} from './shared';
import { ISideNavigationProps } from './types';

const SideNavigation: React.FC<ISideNavigationProps> = ({
  isHovered: _isHovered = false,
  isHoverDisabled = false, // Disables hover behaviour
  children,
  className,
  style,
  onChange: _onChange,
}) => {
  const [isHovered, setIsHovered] = useState(_isHovered);
  const timeout = useRef<NodeJS.Timeout>();

  const show = () => {
    clearTimeout(timeout.current);
    setIsHovered(true);
  };
  const hide = () => {
    timeout.current = setTimeout(() => {
      setIsHovered(false);
      clearTimeout(timeout.current);
    }, 1000);
  };

  const onChange = useCallback(
    (isHovered: boolean) => {
      if (isHoverDisabled) {
        return;
      }

      if (_onChange) {
        _onChange(isHovered);
      }
    },
    [isHoverDisabled, _onChange]
  );

  const onMouseOverCTA = useCallback(() => {
    if (isHoverDisabled) {
      return;
    }

    show();
  }, [isHoverDisabled]);
  const onMouseLeave = useCallback(() => {
    if (isHoverDisabled) {
      return;
    }

    hide();
  }, [isHoverDisabled]);

  useEffect(() => {
    return () => {
      clearTimeout(timeout.current);
    };
  }, []);

  // Keep isHovered up to date on prop
  useEffect(() => {
    if (isHoverDisabled) {
      setIsHovered(true); // Make it visible otherwise

      return;
    }

    setIsHovered(_isHovered);
  }, [_isHovered, isHoverDisabled]);

  useEffect(() => {
    onChange(isHovered);
  }, [isHovered]);

  return (
    <SideNavigationWrapper
      isHovered={isHovered}
      className={className}
      style={style}
      onMouseLeave={onMouseLeave}
    >
      {children}

      {!isHoverDisabled && (
        <SideNavigationCTAWrapper onMouseOver={onMouseOverCTA}>
          <SideNavigationCTA isHovered={isHovered} />
        </SideNavigationCTAWrapper>
      )}
    </SideNavigationWrapper>
  );
};

export default React.memo(SideNavigation);

export * from './shared';
export * from './types';
