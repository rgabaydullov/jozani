import React, { useState } from 'react';
import { get, pick } from 'lodash';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import Head from 'next/head';
import cn from 'classnames';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  ThemeProvider,
  getTheme,
  GlobalStyle,
  FONT_FAMILY,
} from '@jozani/uikit';
import App from '../app';

import '../lib/styles/index.scss';

const BaseApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;

  const [queryClient] = useState(() => new QueryClient());

  const {
    isCommonPage = false,
    withMenu = false,
    renderHeader,
  }: any = pick(get(Component, 'type'), [
    'isCommonPage',
    'withMenu',
    'renderHeader',
  ]);

  const appProps = {
    isCommonPage,
    withMenu,
    renderHeader,
  }

  return (
    <ThemeProvider theme={getTheme('dark', {
      typography: {
        fontFamily: FONT_FAMILY,
      },
    })}>
      <GlobalStyle />

      <App {...appProps}>
        <Head>
          <title>Paylol</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <link rel="icon" href="/favicon_64x64.png" />
        </Head>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps?.dehydratedState}>
            <main className={cn('app', {
              'appCommon': isCommonPage,
            })}>
              <Component {...pageProps} />
            </main>
          </Hydrate>
        </QueryClientProvider>
      </App>
    </ThemeProvider>
  );
}

export default BaseApp;
