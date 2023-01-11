import React from 'react';
import { IBreadcrumbsProps } from './types';
import { StyledBreadcrumbs } from './shared/ui';

const Breadcrumbs: React.FC<IBreadcrumbsProps> = (props) => {
  return (
    <StyledBreadcrumbs {...props} />
  );
};

export default React.memo(Breadcrumbs);
