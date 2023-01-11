import React, { useCallback, useMemo } from 'react';
import { IconCheckRound } from '../icons';
import {
  StepBullet,
  StepContainer,
  StepInlineConnector,
  StepStuff,
  StyledStep,
  StyledStepper,
} from './shared/ui';
import { IStepperProps } from './types';

const Stepper: React.FC<IStepperProps> = ({
  isNonLinear = false,
  activeStep = -1,
  data,
  skippedSteps,
  renderStep,
  ...props
}) => {

  const isStepCompleted = useCallback((step: number) => {
    if (isNonLinear) {
      return !!skippedSteps && !skippedSteps.has(step) && step < activeStep;
    }

    return step < activeStep && !!activeStep;
  }, [isNonLinear, activeStep, skippedSteps]);

  const renderStepBullet = useCallback((isCompleted: boolean) => {
    if (isCompleted) {
      return (
        <IconCheckRound
          fill="currentColor"
          width={18}
          height={18}
        />
      );
    }

    return (<StepBullet />);
  }, []);

  const steps = useMemo(() => {
    if (Array.isArray(data) && data.length > 0) {

      return data.map((stepData, index) => {
        const isActive = activeStep === index;
        const isCompleted = isStepCompleted(index);

        const stepBullet = renderStepBullet(isCompleted);

        return (
          <StyledStep
            isActive={isActive}
            isCompleted={isCompleted}
          >
            <StepStuff>
              {stepBullet}

              <StepInlineConnector />
            </StepStuff>

            <StepContainer>
              {renderStep(stepData, index, data)}
            </StepContainer>
          </StyledStep>
        );
      });
    }

    return
  }, [activeStep, data]);

  return (
    <StyledStepper
      {...props}
      nonLinear={isNonLinear}
      connector={null}
    >
      {steps}
    </StyledStepper>
  );
};

export default React.memo(Stepper);

export * from './shared/ui';
export * from './types';
