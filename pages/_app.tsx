import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
