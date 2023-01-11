import {
  BREAKPOINTS,
  Col,
  ITabsProps,
  Row,
  ScreenLayout,
  ScrollView,
  Tabs,
} from '@jozani/uikit';
import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { Menu } from './shared/ui';
import { IAppProps } from './types';

const User: React.FC<IAppProps> = ({
  withMenu = false,
  children,
}) => {

  const isDesktop = useMediaQuery(`(min-width: ${BREAKPOINTS.desktop}px)`);

  const router = useRouter();

  const layoutStyle = isDesktop ? { marginTop: '35px' } : {};

  return (
    <ScrollView>

      <ScreenLayout style={layoutStyle}>
        {children}
      </ScreenLayout>
    </ScrollView>
  );
};

export default User;
