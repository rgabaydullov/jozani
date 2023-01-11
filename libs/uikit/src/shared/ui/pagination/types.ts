import { PaginationProps } from '@mui/material';

export interface IPaginationProps extends Omit<PaginationProps,
  'count' |
  'onChange'
> {
  pages: number;
  limit?: number;
  onChange?(page: number, limit: number): void;
}
