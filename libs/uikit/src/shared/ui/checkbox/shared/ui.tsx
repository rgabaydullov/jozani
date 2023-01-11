import styled from 'styled-components';
import { Checkbox as MuiCheckbox, CheckboxProps } from '@mui/material';
import { getCssVar } from 'libs/uikit/src/lib';

export const StyledCheckbox = styled(MuiCheckbox)`
  display: flex;
  position: relative;
  padding: 0;
  width: 2rem;
  height: 2rem;
  background: ${({ checked = false }: CheckboxProps) => (checked
    ? getCssVar('blue', 500)
    : 'transparent')};
  border: 1px solid transparent;
  border-color: ${({ checked = false }: CheckboxProps) => (checked
    ? getCssVar('blue', 500)
    : getCssVar('grey', 500))};
  border-radius: .4rem;
  transition: all .27s;

  &:hover {
    background: ${({ checked = false }: CheckboxProps) => (checked
      ? getCssVar('blue', 500)
      : 'transparent')};
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: .8rem 0 0;
`;

export const CheckboxLabel = styled.label`
  margin-left: 1rem;
  font-size: ${getCssVar('font', 'large')};
  color: ${getCssVar('grey', 100)};
  cursor: pointer;
`;
