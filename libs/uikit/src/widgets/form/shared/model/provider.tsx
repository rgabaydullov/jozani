import React from 'react';
import { Formik } from 'formik';
import { IFormProviderProps } from '../../../../shared/ui/form/types';

const FormProvider: React.FC<IFormProviderProps<any>> = ({
  children,
  ...props
}) => {
  return (
    <Formik {...props as any}>
      {children}
    </Formik>
  );
};

export default React.memo(FormProvider);
