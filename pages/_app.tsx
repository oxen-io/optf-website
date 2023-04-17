import '@/styles/globals.css';
import { AppProps } from 'next/app';
import { ScreenProvider } from '@/contexts/screen';

if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  /* eslint-disable @typescript-eslint/no-var-requires */
  const React = require('react');
  const ReactDOM = require('react-dom');
  const axe = require('@axe-core/react');
  /* eslint-enable @typescript-eslint/no-var-requires */
  axe(React, ReactDOM, 1000, {});
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScreenProvider>
      <Component {...pageProps} />
    </ScreenProvider>
  );
}

export default MyApp;
