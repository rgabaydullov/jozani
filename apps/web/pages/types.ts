/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { IAppProps } from '../app/types';

export interface IBasePage<P = {}> extends React.FC<P>, Pick<IAppProps,
  'isCommonPage' |
  'withMenu'
> {
  isSecure?: boolean;
}
