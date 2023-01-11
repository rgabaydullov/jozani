import React from 'react';
import { AvatarWrapper, StyledAvatar } from './shared/ui';
import { IAvatarProps } from './types';

const Avatar: React.FC<IAvatarProps> = ({
  size = 40,
  className,
  style,
  ...props
}) => {
  return (
    <AvatarWrapper
      className={className}
      size={size}
      style={style}
    >
      <StyledAvatar
        {...props}
      />
    </AvatarWrapper>
  );
};

export default React.memo(Avatar);
