import Link from 'next/link';
import { useState } from 'react';

export default function Donations() {
  const [modal, setModal] = useState(false);

  const copyClipboard = (e: React.MouseEvent<HTMLButtonElement>) => {
    setModal(true);
    let target: any = e.target as HTMLElement;
    navigator.clipboard.writeText(target.previousElementSibling.innerHTML);
    setTimeout(() => {
      setModal(false);
    }, 2000);
  };

  return (
    <div className="relative mb-14">
      <p>
        Our work benefits hundreds of thousands of people around the world. Your
        donation will help fund research projects, education initiatives, and
        the continued development our open-source and secure software (Session,
        Lokinet).
      </p>
      <br />
      <p>
        We offer multiple donation methods, so please be sure to research each
        option and whichever one best suits you.
      </p>
      <br />
      <p>
        <i>
          Note that although we are a registered charity, donations to the OPTF
          are not tax deductible.
        </i>
      </p>
      <br />
      <p>Donate using your local currency: </p>
      <br />
      <ul className="pb-5 ml-10 list-disc">
        <li>
          <b>Donate on Donorbox.org: </b>
          <Link href="https://donorbox.org/optf-donation">
            <a className="cursor-pointer text-violet-250 hover:text-blue-400">
              https://donorbox.org/optf-donation
            </a>
          </Link>
        </li>
        <br />
      </ul>
      <p>Donate using the following cryptocurrency wallet addresses:</p>
      <br />
      <ul className="pb-5 ml-10 break-words list-disc">
        <li>
          <b className="whitespace-nowrap"> Oxen Address:</b>
          <span>
            LB724uBKKwRaAXSaWSt6Uo9r82S6CqQXqELyiMyDdDHw2jiCBvyViTzRUNyNDDTpAxQu3PpbpPLdbes5FHX45XskHsVNgFE
          </span>
          <button
            onClick={copyClipboard}
            className="px-3 py-1 ml-3 font-bold bg-gray-200 hover:text-white hover:bg-blue-500"
          >
            Copy
          </button>
        </li>
        <li>
          <b>Bitcoin Address: </b>{' '}
          <span>37VhHEzXHDDfM37DmuhU8iyzu1nxZ8Spht</span>
          <button
            onClick={copyClipboard}
            className="px-3 py-1 ml-3 font-bold bg-gray-200 hover:text-white hover:bg-blue-500"
          >
            Copy
          </button>
        </li>
        <li>
          {' '}
          <b>Ethereum Address: </b>{' '}
          <span>0x663930c996DeC843885B32ae5B5489B10f6F472e</span>
          <button
            onClick={copyClipboard}
            className="px-3 py-1 ml-3 font-bold bg-gray-200 hover:text-white hover:bg-blue-500"
          >
            Copy
          </button>
        </li>
      </ul>
      {/* modal */}
      {modal && (
        <div className="absolute bottom-0 right-0 w-16 h-8 bg-gray-100">
          <p className="ml-2"> Copied!</p>
        </div>
      )}
    </div>
  );
}
