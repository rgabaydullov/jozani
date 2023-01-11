import React, {
  Key, useCallback, useEffect, useMemo, useState,
} from 'react';
import { nanoid } from 'nanoid';
import {
  VirtualizedListWrapper,
  StyledVirtualizedList,
  VirtualizedItemWrapper,
} from './shared/ui';
import { IVirtualizedListProps } from './types';

const mapKeyValues = (data: unknown[] | null) => Array.isArray(data)
  ? data?.map(() => nanoid())
  : []

const VirtualizedList: React.FC<IVirtualizedListProps> = ({
  isReady = false,
  isRefreshable = false,
  data: _data = [],
  emptyContent,
  style,
  className,
  listClassName,
  itemClassName,
  keyExtractor,
  renderItem,
  onRefresh,
  onError,
}) => {
  const [data, setData] = useState<null | IVirtualizedListProps['data']>(_data);
  const [keys, setKeys] = useState<null | IVirtualizedListProps['data']>(mapKeyValues(_data));

  const isSizeChanged = useCallback(() => {
    const isArrayDataValid = Array.isArray(data);
    const isArrayKeysValid = Array.isArray(keys);

    return isArrayDataValid && isArrayKeysValid && data.length !== keys.length;
  }, [data, keys]);

  const list = useMemo(() => {
    if (isSizeChanged() || !(Array.isArray(data) && Array.isArray(keys))) {
      return;
    }

    return data?.map((item, index) => {
      const key = keyExtractor
        ? keyExtractor(item, index)
        : keys[index];

      return (
        <VirtualizedItemWrapper className={itemClassName} key={key as Key}>
          {renderItem(item, index, data)}
        </VirtualizedItemWrapper>
      );
    });
  }, [data, keys, itemClassName]);

  const content = useMemo(() => {
    if (!isReady) {
      return;
    }

    if (Array.isArray(list) && list.length > 0) {
      return (
        <StyledVirtualizedList className={listClassName} style={style}>
          {list}
        </StyledVirtualizedList>
      );
    }

    return emptyContent;
  }, [isReady, list, emptyContent, listClassName, style]);

  useEffect(() => {
    if (!isRefreshable) {
      return;
    }

    if (onRefresh) {
      onRefresh()
        .then(data => !!data && setData(data))
        .catch((err) => {
          if (onError) {
            onError(err);
          }
        })
    }
  }, [isRefreshable]);

  useEffect(() => {
    // Update keys once size of data has changed
    if (isSizeChanged() && Array.isArray(data) && Array.isArray(keys)) {
      setKeys(mapKeyValues(data));
    }
  }, [data, keys]);

  // Update if prop "data" changes
  useEffect(() => {
    setData(_data);
  }, [_data]);

  return (
    <VirtualizedListWrapper className={className}>
      {content}
    </VirtualizedListWrapper>
  );
};

export default React.memo(VirtualizedList);

export * from './shared/ui';
export * from './types';
