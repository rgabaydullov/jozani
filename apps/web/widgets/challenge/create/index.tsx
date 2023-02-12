import React from 'react';
import Step0 from './Step0';
import Step1 from './Step1';
import { IChallengeCreateProps } from './types';

const ChallengeCreate: React.FC<IChallengeCreateProps> = (props) => {
  const {
    activeStep,
    next,
  } = props;

  return (
    <>
      {activeStep === 0 && (
        <Step0 {...props} />
      )}

      {activeStep === 1 && (
        <Step1 {...props} />
      )}
    </>
  );
};

export default React.memo(ChallengeCreate);

export * from './shared';
export * from './types';
