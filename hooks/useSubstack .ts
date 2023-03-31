import { useEffect } from 'react';
import { useScreen } from '@/contexts/screen';
import { useRouter } from 'next/router';

const handleSubstackStyles = (isSmall: boolean, isMedium: boolean) => {
  return isSmall || isMedium
    ? {
        primary: 'white',
        input: 'var(--input-substack-small)',
        email: 'var(--email-substack-small)',
        text: 'black',
      }
    : {
        primary: 'white',
        input: 'var(--input-substack)',
        email: 'white',
        text: 'black',
      };
};

export function useSubstack() {
  const { isSmall, isMedium } = useScreen();
  const router = useRouter();

  useEffect(() => {
    const substackScript = document.createElement('script');
    substackScript.async = true;
    substackScript.src = 'https://substackapi.com/widget.js';
    document.body.appendChild(substackScript);
    return () => {
      document.body.removeChild(substackScript);
    };
  }, [router]);

  useEffect(() => {
    window.CustomSubstackWidget = {
      substackUrl: 'optf.substack.com',
      placeholder: 'Your email',
      buttonText: 'Subscribe',
      theme: 'custom',
      colors: handleSubstackStyles(isSmall, isMedium),
    };
  }, [isSmall, isMedium]);
}
