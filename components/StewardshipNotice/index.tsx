import Link from 'next/link';
import { ReactElement } from 'react';

export default function StewardshipNotice(): ReactElement {
  return (
    <div className="px-4 py-2 text-sm text-center text-gray-500 bg-gray-100">
      Session is now stewarded by the Session Technology Foundation.{' '}
      <Link href="/blog/the-optf-and-session">
        <a className="transition ease-in-out text-violet-250 hover:text-blue-500">
          Read more
        </a>
      </Link>
    </div>
  );
}
