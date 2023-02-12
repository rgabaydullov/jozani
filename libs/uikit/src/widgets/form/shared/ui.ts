import { Form as FormikForm } from 'formik';
import styled from 'styled-components';
import { BREAKPOINTS, getCssVar } from '../../../lib';
import { getFormComponent } from '../../../shared';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 .8rem;
  width: 100%;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    min-height: 460px;
    min-width: 340px;
    max-width: 355px;
    padding: 2.4rem;
    line-height: ${getCssVar('font', 'line-height')};
    font-size: ${getCssVar('font', 'common')};
    border: 1px solid ${getCssVar('grey', 950)}};
    border-radius: 4px;
  }
`;

export const FormSection = styled.section`
  margin-top: 2.4rem;

  &:first-child {
    margin-top: 0;
  }
`;

export const FieldError = styled.div`
  display: flex;
  margin: .8rem 0 0;
  font-size: ${getCssVar('font', 'small')};
  color: ${getCssVar('red', 500)};
`;

export const FormComponent = getFormComponent(FormikForm as never);

export const FieldArrayWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const FieldArrayValues = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
