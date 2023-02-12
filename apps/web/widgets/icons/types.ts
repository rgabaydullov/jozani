import { CSSProperties } from 'react';
import { Category } from './shared';

export interface IIconProps {
  isDisabled?: boolean;
  className?: string;
  title?: string;
  fill?: string;
  style?: CSSProperties;
  stroke?: string;
  width?: string | number;
  height?: string | number;
}

export interface IIconCategoryProps extends IIconProps {
  category: Category;
}
