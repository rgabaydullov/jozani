import { TextField as MuiTextField } from '@mui/material';
import styled from 'styled-components';
import { getCssVar } from '../../../../lib';
import { ITextFieldProps } from '../types';

export const StyledTextField = styled(MuiTextField)`
  width: ${({ isFullWidth = false }: ITextFieldProps) => {
    return (isFullWidth
      ? '100%'
      : 'auto');
  }};
  border: 0 solid transparent;
  border-radius: .4rem;
  outline: 0;

  & > div {
    padding: .8rem 1.2rem;
    background: ${getCssVar('grey', 100)};
    font-size: ${getCssVar('font', 'large')};
    color: currentColor;

    &[class*=disabled] {
      color: currentColor;
      -webkit-text-fill-color: currentColor;
    }
  }

  &.contrast > div, & > div[class*=focused] {
    background: ${getCssVar('grey', 900)};
  }

  input {
    padding: 0;
    font-weight: ${getCssVar('font', 'semi-bold')};

    &[class*=disabled], &:disabled {
      color: currentColor;
      -webkit-text-fill-color: currentColor;
    }
  }

  fieldset {
    border: 0 solid transparent !important;
  }

  label {
    position: relative;
    margin-bottom: .8rem;
    font-size: ${getCssVar('font', 'common')};
    font-weight: ${getCssVar('font', 'semi-bold')};
    color: ${getCssVar('grey', 100)};
    line-height: 1;
    overflow: initial;
    transform: scale(1);
    transition: none;

    &[class*=focused],
    &[class*=error] {
      color: ${getCssVar('grey', 100)};
    }

    & > span {
      display: none;
    }
  }
`;
