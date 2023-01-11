import { isFunction } from 'lodash';
import React, { useCallback } from 'react';
import { StyledFormWrapper } from './shared/ui';
import { IFormProps, IFormProviderChildrenProps } from './types';

const Form: React.FC<IFormProps<any>> = ({
  initialValues = {},
  children,
  formProvider: FormProvider,
  formComponent: FormComponent,
  onSubmit,
  ...props
}) => {
  const renderChildren = useCallback((props: IFormProviderChildrenProps<any>) => {
    if (isFunction(children)) {
      return (
        <FormComponent>
          {children(props)}
        </FormComponent>
      );
    }

    return (
      <FormComponent>
        {children}
      </FormComponent>
    );
  }, [children]);

  return (
    <StyledFormWrapper>
      <FormProvider
        initialValues={initialValues}
        onSubmit={onSubmit}
        {...props}
      >
        {renderChildren}
      </FormProvider>
    </StyledFormWrapper>
  );
};

export default React.memo(Form);

export * from './shared/ui';
