import {
  BREAKPOINTS, Button, ScreenLayout, ScrollView, useModal,
} from '@jozani/uikit';
import { useMediaQuery } from '@mui/material';
import React from 'react';
import NextLink from 'next/link';
import { Header, HeaderFit, HeaderLogo } from '../widgets';
import { IAppProps } from './types';

const Guest: React.FC<IAppProps> = ({
  children,
  renderHeader,
}) => {
  const isDesktop = useMediaQuery(`(min-width: ${BREAKPOINTS.md}px)`);

  const { modal, open } = useModal({
    title: 'Create new Challenge',
    children: (
      <div>
        Challenge
      </div>
    ),
  });

  return (
    <ScrollView>
      <Header>
        <HeaderLogo />

        <HeaderFit>
          <Button
            size="large"
            variant="contained"
            to="/challenge"
            component={NextLink}
            // onClick={open}
          >
            Go Challenge!
          </Button>
        </HeaderFit>
      </Header>

      <ScreenLayout>
        {children}
      </ScreenLayout>

      {modal}
    </ScrollView>
  );
};

export default React.memo(Guest);
