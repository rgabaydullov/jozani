import React from 'react';
import {
  Form,
  FormComponent,
  FormProvider,
} from '@jozani/uikit';
import {
  ChallengeCreateCardDescribe,
  ChallengeCreateCardInitiative,
  VALIDATION_SCHEME,
} from './shared';
import { IChallengeCreateProps } from './types';

const Step0: React.FC<IChallengeCreateProps> = ({
  activeStep,
  next,
}) => {

  return (
    <Form
      initialValues={{}}
      validationSchema={VALIDATION_SCHEME}
      formProvider={FormProvider}
      formComponent={FormComponent}
      onSubmit={next}
    >
      {({ isValid, errors }) => {
        return (
          <>
            <ChallengeCreateCardDescribe
              isActive={isValid}
            />

            <div className="mt-6" />

            <ChallengeCreateCardInitiative
              isActive={isValid}
            />
          </>
        )
      }}
    </Form>
  );
};

export default React.memo(Step0);
