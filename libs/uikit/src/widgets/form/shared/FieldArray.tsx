import React, { ReactNode, useCallback, useEffect } from 'react';
import { FieldArray as OriginFieldArray, useFormikContext } from 'formik';
import { isEqual } from 'lodash';
import { FieldArrayValues, FieldArrayWrapper, FieldError } from './ui';

interface IFieldArrayProps {
  name: string;
  value: unknown;
  values: unknown[];
  renderValue(
    value: unknown,
    onChange: (value: unknown) => void,
    isActive: boolean,
  ): ReactNode;
  onChange?(value: unknown): void;
}

const FieldArray: React.FC<IFieldArrayProps> = ({
  name,
  value,
  values: _values = [],
  renderValue,
  onChange: _onChange,
}) => {

  const { errors, values, setFieldValue } = useFormikContext();

  const fieldName = `${name}s`;
  const fieldError = (errors as any)[name];
  const fieldValues = (values as any)[fieldName];

  const onChange = useCallback((newValue: unknown) => {
    if (_onChange) {
      _onChange(newValue);
    }

    setFieldValue(name, newValue);
  }, [name, setFieldValue, _onChange]);

  useEffect(() => {
    // Update selected value
    setFieldValue(name, value);
  }, [name, value, setFieldValue]);

  useEffect(() => {
    if (!isEqual(fieldValues, _values)) {
      setFieldValue(fieldName, _values);
    }
  }, [fieldName, fieldValues, _values, setFieldValue]);

  return (
    <FieldArrayWrapper>
      {fieldError && (
        <FieldError>
          {fieldError}
        </FieldError>
      )}

      <FieldArrayValues>
        <OriginFieldArray name={name}>
          {() => {
            const activeFieldValue = (values as any)[name];

            if (!Array.isArray(fieldValues)) {
              return null;
            }

            return fieldValues.map((value) => renderValue(value, onChange, activeFieldValue === value));
          }}
        </OriginFieldArray>
      </FieldArrayValues>
    </FieldArrayWrapper>
  );
};

export default React.memo(FieldArray);
