import { Button, ScrollView, useModal } from '@jozani/uikit';
import React from 'react';
import NextLink from 'next/link';
import { Header, HeaderFit, HeaderLogo } from '../widgets';
import { IAppProps } from './types';

const Common: React.FC<IAppProps> = ({
  children,
  renderHeader,
}) => {

  const { modal, open } = useModal({
    disableScrollLock: true,
    disableBackdropClose: true,
    disableEscapeKeyDown: true,
    actionButtonProps: {
      children: 'Submit'
    },
    // cancelButtonProps: {
    //   children: 'Cancel',
    // },
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

      <main>
        {children}
      </main>

      {modal}
    </ScrollView>
  );
};

export default React.memo(Common);
