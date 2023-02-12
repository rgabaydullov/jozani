import React from 'react';
import {
  Form,
  FormComponent,
  FormProvider,
} from '@jozani/uikit';
import {
  ChallengeCreateCardCheckout,
} from './shared';
import { IChallengeCreateProps } from './types';

const Step1: React.FC<IChallengeCreateProps> = ({
  activeStep,
  next,
}) => {

  return (
    <ChallengeCreateCardCheckout />
  );
};

export default React.memo(Step1);

export * from './shared';
export * from './types';
