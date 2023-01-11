import React, { useCallback, useMemo } from 'react';
import VirtualizedList from '../virtualized-list';
import { ISectionItem, ISectionListProps } from './types';

const SectionList: React.FC<ISectionListProps> = ({
  sections,
  renderItem: _renderItem,
  renderSectionHeader: _renderSectionHeader,
  ...props
}) => {
  const data = useMemo(() => sections.reduce((res, { title, data }) => {
    if (title && Array.isArray(data) && data.length) {
      res.push({ title, data });
      res.push(...data);
    }

    return res;
  }, [] as (ISectionItem | unknown)[]), [sections]);

  const renderSectionHeader = useCallback(_renderSectionHeader, [_renderSectionHeader]);

  const renderItem = useCallback((
    section: ISectionItem,
    index: number,
    data: ISectionItem[],
  ) => {
    if (section && section.title) {
      return renderSectionHeader(section, index, data);
    }

    return _renderItem(section, index, data);
  }, [_renderItem, renderSectionHeader]);

  return (
    <VirtualizedList
      {...props}
      data={data}
      renderItem={renderItem}
    />
  );
};

export default React.memo(SectionList);

export * from './types';
