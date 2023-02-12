import styled from 'styled-components';
import React from 'react';
import { getCssVar } from '../../../../lib';
import { IFormComponentProps } from '../types';

export const StyledFormWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  line-height: ${getCssVar('font', 'line-height')};
  font-size: ${getCssVar('font', 'common')};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const getFormComponent = (
  Component = StyledForm,
): React.FC<IFormComponentProps> => styled(Component)``;

