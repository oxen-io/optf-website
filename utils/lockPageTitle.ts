export default function lockPageTitle() {
  if (typeof window !== 'undefined') {
    window.addEventListener('blur', () => {
      if (window.document.title.indexOf('🔐 ') >= 0) return;
      window.document.title = '🔐 ' + window.document.title;
    });
    window.addEventListener('focus', () => {
      if (window.document.title.indexOf('🔐 ') >= 0)
        window.document.title = window.document.title.split('🔐 ')[1];
    });
  }
}
