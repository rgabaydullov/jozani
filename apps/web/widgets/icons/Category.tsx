import React from 'react';
import {
  Category, getCategoryIcon, IconWrapper,
} from './shared';
import { IIconCategoryProps } from './types';

const IconCategory: React.FC<IIconCategoryProps> = ({
  category = Category.Promise,
  ...props
}) => {
  const Icon = getCategoryIcon(category);

  return (
    <IconWrapper>
      <Icon {...props} />
    </IconWrapper>
  );
};

export default React.memo(IconCategory);
