import React from 'react';
import { IFlatListProps } from './types';
import VirtualizedList from '../virtualized-list';

const FlatList: React.FC<IFlatListProps> = (props) => (
  <VirtualizedList {...props} />
);

export default React.memo(FlatList);

export * from './types';
