import {
  Stepper as MuiStepper,
  Step as MuiStep,
} from '@mui/material';
import { getCssVar } from 'libs/uikit/src/lib';
import styled from 'styled-components';
import { IStepProps } from '../types';

export const StyledStepper = styled(MuiStepper)`
  display: flex;
  flex: 1;
`;

export const StyledStep = styled(MuiStep)`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 .8rem;
  padding: 0;
  color: ${({ isActive = false, isCompleted = false }: IStepProps) => {
    if (isCompleted) {
      return getCssVar('green', 500);
    }

    if (isActive) {
      return getCssVar('grey', 100);
    }

    return getCssVar('grey', 900);
  }};
  cursor: ${({ isActive = false }: IStepProps) => (isActive
    ? 'pointer'
    : 'default')};

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const StepStuff = styled.div`
  display: flex;
  align-items: center;
`;

export const StepContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  font-size: ${getCssVar('font', 'large')};
  color: currentColor;
`;

export const StepBullet = styled.i`
  display: inline-block;
  width: 1.8rem;
  height: 1.8rem;
  border: 0.54rem solid currentColor;
  border-radius: 50%;
`;

export const StepInlineConnector = styled.div`
  display: flex;
  flex: 1;
  margin: 0 .5rem;
  height: .2rem;
  background: currentColor;
  border: 0 solid transparent;
  border-radius: 1px;
`;
