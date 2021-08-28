// utils for checking if hyperlinks are for the current site
// e.g. are there any links to local headings via ID's?

const protocols = ['https://', 'http://', 'ftp://', 'file://', 'mailto:'];

export function isLocalLink(url: string) {
  let result = true;
  if (url[0] === '#') {
    return result;
  }
  protocols.forEach((protocol) => {
    if (url.indexOf(protocol) >= 0) {
      result = false;
    }
  });
  return result;
}
