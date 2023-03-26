import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from '@/redux/store';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
