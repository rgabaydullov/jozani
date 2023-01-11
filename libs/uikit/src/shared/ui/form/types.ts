import React, { ReactNode } from 'react';

export interface IFormProviderChildrenProps<TValues extends any> {
  dirty: boolean;
  isValid: boolean;
  values: TValues;
  errors: {
    [K in keyof TValues]?: TValues[K] | any;
  };
  touched: {
    [K in keyof TValues]?: TValues[K] | any;
  };
  handleBlur(e: MouseEvent): void;
}

export interface IFormProviderProps<TValues extends any> {
  children: ReactNode | ((props: IFormProviderChildrenProps<TValues>) => ReactNode);
  initialValues?: TValues;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  validationSchema: unknown;
  onSubmit(values: TValues): void;
}

export type IFormComponentProps = JSX.IntrinsicElements['form']

export interface IFormProps<TValues = object> extends IFormProviderProps<TValues> {
  formProvider: React.FC<IFormProviderProps<TValues>>;
  formComponent: React.FC<IFormComponentProps>;
}
