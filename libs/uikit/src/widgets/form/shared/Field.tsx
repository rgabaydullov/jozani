import React from 'react';
import { Field as FormikField, FieldAttributes } from 'formik';
import { TextField } from 'formik-mui';
import styled from 'styled-components';
import { getCssVar } from '../../../lib';

const StyledTextField = styled(TextField)`
  position: relative;
  display: flex;
  margin: 1.6rem 0 0;

  & > div {
    padding: 0;
    background: ${getCssVar('grey', 100)};
    border: 1px solid transparent;
    border-radius: .8rem;
    overflow: hidden;
    transition: all .27s;

    &[class*=error] {
      border-color: ${getCssVar('red', 500)};
    }

    &:before, &:after {
      display: none;
    }

    &:hover, &[class*=focused] {
      background: ${getCssVar('grey', 100)};
    }
  }

  [type='text'],
  [type='email'],
  [type='password'],
  [type='search'],
  input, textarea {
    padding: 0 1.2rem;
    height: 3.8rem;
    background: ${getCssVar('grey', 100)};
    font-family: var(--font-family);
    font-size: ${getCssVar('font', 'large')};
    font-weight: ${getCssVar('font', 'semi-bold')};
    line-height: ${getCssVar('font', 'line-height')};
    border: 0 solid transparent;
    border-radius: 0;
    outline: none;

    &::placeholder {
      color: ${getCssVar('grey', 500)};
    }

    &:-webkit-autofill,
    &:-internal-autofill-selected {
      background-color: transparent !important;
      box-shadow: 0 0 0 0;
      -webkit-text-fill-color: fieldtext !important;
      caret-color: currentColor;
    }

    & + div {
      padding: 0 1.6rem;
    }
  }

  textarea {
    padding: .8rem 1.2rem;
  }

  label {
    position: relative;
    margin-bottom: .8rem;
    font-size: ${getCssVar('font', 'common')};
    font-weight: ${getCssVar('font', 'semi-bold')};
    color: ${getCssVar('grey', 500)};
    line-height: 1;
    overflow: initial;
    transform: scale(1);
    transition: none;

    &[class*=focused],
    &[class*=error] {
      color: ${getCssVar('grey', 500)};
    }

    & > span {
      display: none;
    }
  }

  p {
    position: absolute;
    bottom: -1.6rem;
    margin: 0;
  }
`;

const Field: React.FC<FieldAttributes<any>> = (props) => (
  <FormikField
    variant="filled"
    component={StyledTextField}
    {...props}
  />
);

export default React.memo(Field);
