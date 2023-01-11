import { BREAKPOINTS, Button, ScreenLayout, ScrollView, useModal } from '@jozani/uikit';
import { useMediaQuery } from '@mui/material';
import React from 'react';
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
            variant="contained"
            onClick={open}
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
