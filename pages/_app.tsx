import '@/styles/globals.css';
import { AppProps } from 'next/app';
import { ScreenProvider } from '@/contexts/screen';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  const React = require('react');
  const ReactDOM = require('react-dom');
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000, {});
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const substackScript = document.createElement('script');
    substackScript.src = 'https://substackapi.com/widget.js';
    substackScript.async = true;
    document.body.appendChild(substackScript);
    return () => {
      document.body.removeChild(substackScript);
    };
  }, [router]);

  return (
    <ScreenProvider>
      <Component {...pageProps} />
    </ScreenProvider>
  );
}

export default MyApp;
