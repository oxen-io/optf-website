import getConfig from 'next/config';

// https://nextjs.org/docs/api-reference/next.config.js/redirects
export interface IRedirection {
  source: string;
  destination: string;
  permanent: boolean;
}

const redirects: IRedirection[] = getConfig().serverRuntimeConfig.redirects;

export async function hasRedirection(url: string) {
  let response = null;
  redirects.forEach((redirection) => {
    if (redirection.source === url) {
      response = {
        source: redirection.source,
        destination: redirection.destination,
        permanent: redirection.permanent,
      };
    }
  });
  return response;
}
