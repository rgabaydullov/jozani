import React, { useMemo, } from 'react';
import Guest from './guest';
import Common from './common';
import { IAppProps } from './types';
import User from './user';

const NextApp: React.FC<IAppProps> = ({
  isCommonPage = false,
  ...props
}) => {
  const isAuthorized = false;

  const CurrentApp = useMemo(() => {
    if (isCommonPage) {
      return Common;
    }

    if (isAuthorized) {
      return User;
    }

    return Guest;
  }, [isCommonPage, isAuthorized]);

  return (
    <CurrentApp {...props} />
  );
};

export default NextApp;
