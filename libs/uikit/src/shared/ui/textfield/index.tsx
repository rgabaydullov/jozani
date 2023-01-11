import cn from 'classnames';
import React, { useCallback, useRef } from 'react';
import { StyledTextField } from './shared/ui';
import { getRows } from './shared/helpers';
import { ITextFieldProps } from './types';
import { TRIM_SYMBOLS } from './shared/constants';

const TextField: React.FC<ITextFieldProps> = ({
  isContrast = false,
  isDisabled = false,
  isFullWidth = false,
  isMultiline = false,
  isDynamicMultiline = false,
  className,
  value,
  onChange: _onChange,
  onKeyDown: _onKeyDown,
  onKeyUp: _onKeyUp,
  ...props
}) => {

  // @TODO: move dynamic multiline functionality to the hoc

  const ref = useRef<null | HTMLInputElement>(null);

  const rows = getRows(
    value,
    ref.current as HTMLElement,
  );

  const onChange = useCallback((e: any) => {
    const { value } = e.target;

    const update = (value: string) => {
      if (_onChange) {
        _onChange(value);

        return;
      }
    }

    if (!isDynamicMultiline) {
      update(value);

      return;
    }

    const lastChar = value.substr(-1);
    const preLastChar = value.substr(-2, 1);

    if ((lastChar === preLastChar && TRIM_SYMBOLS.includes(preLastChar))) {
      e.preventDefault();

      return;
    }

    update(value);
  }, [isDynamicMultiline, _onChange]);

  const onKeyDown = useCallback((e: any) => {
    if (!isDynamicMultiline) {
      return;
    }

    if (_onKeyDown) {
      _onKeyDown(e);

      return;
    }

    e.stopPropagation();
  }, [isDynamicMultiline, ref, _onKeyDown]);

  const onKeyUp = useCallback((e: any) => {
    if (!isDynamicMultiline) {
      return;
    }

    if (_onKeyUp) {
      _onKeyUp(e);
    }

    e.stopPropagation();
  }, [isDynamicMultiline, _onKeyUp]);

  return (
    <StyledTextField
      inputRef={ref}
      disabled={isDisabled}
      multiline={isMultiline || isDynamicMultiline}
      isFullWidth={isFullWidth}
      className={cn(className, {
        'contrast': isContrast,
      })}
      value={value}
      rows={rows}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      {...props}
    />
  );
};

export default React.memo(TextField);

export * from './shared/ui';
