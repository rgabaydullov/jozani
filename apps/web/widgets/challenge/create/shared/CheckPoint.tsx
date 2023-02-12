import React from 'react';
import { IChallengeCreateCheckPointProps } from './types';
import { ChallengeCreateCheckPointItem, ChallengeCreateCheckPointItemContent } from './ui';

const CheckPoint: React.FC<IChallengeCreateCheckPointProps> = ({
  isActive = false,
  type,
  title,
  children,
}) => {
  return (
    <ChallengeCreateCheckPointItem
      isActive={isActive}
      type={type}
    >
      {title}

      <ChallengeCreateCheckPointItemContent>
        {children}
      </ChallengeCreateCheckPointItemContent>
    </ChallengeCreateCheckPointItem>
  );
};

export default React.memo(CheckPoint);
