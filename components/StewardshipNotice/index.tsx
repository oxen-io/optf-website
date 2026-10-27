import Link from 'next/link';
import { ReactElement } from 'react';

export default function StewardshipNotice(): ReactElement {
  return (
    <div className="px-4 py-2 text-sm text-center text-white bg-violet-350">
      Session is now stewarded by the Session Technology Foundation.{' '}
      <Link href="/blog/the-optf-and-session">
        <a className="font-semibold underline transition ease-in-out hover:text-green-550">
          Read more
        </a>
      </Link>
    </div>
  );
}
