import React, { useMemo } from 'react';
import { IconTick } from '../icons';
import { CheckboxLabel, CheckboxWrapper, StyledCheckbox } from './shared/ui';
import { ICheckboxProps } from './types';

const Checkbox: React.FC<ICheckboxProps> = ({
  isChecked = false,
  isRequired = false,
  label,
  id,
  name,
  ...props
}) => {
  const labelComponent = useMemo(() => {
    if (label) {
      return (
        <CheckboxLabel htmlFor={id || name}>
          {label}
        </CheckboxLabel>
      );
    }

    return null;
  }, [label, id, name]);

  return (
    <CheckboxWrapper>
      <StyledCheckbox
        checked={isChecked}
        required={isRequired}
        id={id || name}
        name={name}
        {...props}
        icon={
          <span />
        }
        checkedIcon={
          <span>
            <IconTick />
          </span>
        }
      />

      {labelComponent}
    </CheckboxWrapper>
  );
};

export default React.memo(Checkbox);

export * from './types';
