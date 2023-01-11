import React, {
  useCallback, useState,
} from 'react';
import { PaginationItem, useMediaQuery } from '@mui/material';
import { useMenu } from '../../model';
import { IconChevronDown, IconChevronLeft, IconChevronRight, IconTick } from '../icons';
import Typography from '../typography';
import { PAGINATION_LIMITS } from './shared/constants';
import {
  PaginationDropdown,
  PaginationDropdownButton,
  PaginationDropdownIcon,
  PaginationWrapper,
  StyledPagination,
} from './shared/ui';
import { IPaginationProps } from './types';

const Pagination: React.FC<IPaginationProps> = ({
  pages,
  page: _page = 1,
  limit: _limit = PAGINATION_LIMITS[0],
  onChange,
  ...props
}) => {
  const [page, setPage] = useState(_page);
  const [limit, setLimit] = useState(_limit);

  const isMobile = useMediaQuery(`(max-width: 768px)`);

  const renderItem = useCallback((item: unknown) => (
    <>
      {item}
      {item === limit && (
        <span className="ml-3">
          <IconTick />
        </span>
      )}
    </>
  ), [limit]);

  const onItemClick = useCallback((_: any, newLimit: number) => {
    setLimit(newLimit);

    if (onChange) {
      onChange(page, newLimit);
    }
  }, [page, onChange]);

  const onChangeCallback = useCallback((_: any, newPage: number) => {
    setPage(newPage);

    if (onChange) {
      onChange(newPage, limit);
    }
  }, [limit, onChange]);

  const { menu, open } = useMenu({
    id: 'pagination-menu',
    list: PAGINATION_LIMITS,
    transformOrigin: {
      vertical: 'bottom',
      horizontal: 'right',
    },
    renderItem,
    onItemClick,
  });

  if (!pages) {
    return null;
  }

  return (
    <PaginationWrapper>
      {pages && pages > 1 && (
        <StyledPagination
          shape="rounded"
          page={page}
          count={pages}
          {...props}
          renderItem={(item) => (
            <PaginationItem
              components={{ previous: IconChevronLeft, next: IconChevronRight }}
              {...item}
              color="primary"
            />
          )}
          onChange={onChangeCallback}
        />
      )}

      {!isMobile && (
        <PaginationDropdown>
          <Typography variant="body1">
            Записей на странице:
          </Typography>

          <PaginationDropdownButton type="button" onClick={open}>
            {limit}
            <PaginationDropdownIcon>
              <IconChevronDown />
            </PaginationDropdownIcon>
          </PaginationDropdownButton>
        </PaginationDropdown>
      )}

      {menu}
    </PaginationWrapper>
  );
};

export default React.memo(Pagination);
