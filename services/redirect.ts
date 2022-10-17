import getConfig from 'next/config';

// https://nextjs.org/docs/api-reference/next.config.js/redirects
export interface IRedirection {
  source: string;
  destination: string;
  permanent: boolean;
}

const redirects: IRedirection[] = getConfig().serverRuntimeConfig.redirects;

async function fetchLatestVersion(repo: string) {
  const fallbackVersion = '1.8.6'; // NOTE should update periodcally
  const res = await fetch(
    `https://api.github.com/repos/oxen-io/${repo}/releases/latest`
  );
  const data = await res.json();
  if (!data) return fallbackVersion;

  if (res.status !== 200) {
    console.warn(
      `Redirect Service: Code ${res.status} | ${data.message}`,
      `${data.documentation && `| See ${data.documentation}`}`
    );
    console.log(
      `Redirect Service: Falling back to version ${fallbackVersion}.`
    );
    return fallbackVersion;
  }

  return data['tag_name'].split('v')[1];
}

async function fetchDynamicRedirects() {
  const desktopVersion = await fetchLatestVersion('session-desktop');
  const redirects: IRedirection[] = [
    {
      source: '/linux',
      destination: `https://github.com/oxen-io/session-desktop/releases/download/v${desktopVersion}/session-desktop-linux-x86_64-${desktopVersion}.AppImage`,
      permanent: true,
    },
    {
      source: '/mac',
      destination: `https://github.com/oxen-io/session-desktop/releases/download/v${desktopVersion}/session-desktop-mac-${desktopVersion}.dmg`,
      permanent: true,
    },
    {
      source: '/windows',
      destination: `https://github.com/oxen-io/session-desktop/releases/download/v${desktopVersion}/session-desktop-win-${desktopVersion}.exe`,
      permanent: true,
    },
  ];
  return redirects;
}

export async function getDynamicRedirection(url: string) {
  const dynamicRedirects = await fetchDynamicRedirects();
  let redirection = '';
  dynamicRedirects.forEach((dynamicRedirection) => {
    if (url === dynamicRedirection.source) {
      redirection = dynamicRedirection.destination;
      return;
    }
  });
  return redirection;
}

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
