import { StepperProps, StepProps } from '@mui/material';
import { ReactNode } from 'react';

export interface IStepData {
  label: string;
  component?: React.FC;
}

export type StepData = IStepData | string;

export interface IStepperProps extends Omit<StepperProps,
  'children' |
  'connector' |
  'nonLinear'
> {
  isNonLinear?: boolean;
  data: StepData[];
  skippedSteps?: Set<number>;
  emptyContent?: ReactNode;
  renderStep(
    stepData: StepData,
    index: number,
    steps: StepData[],
  ): ReactNode;
};

export interface IStepProps extends StepProps {
  isActive?: boolean;
  isCompleted?: boolean;
}
