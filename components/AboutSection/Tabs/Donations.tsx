import Link from 'next/link';
import { useState } from 'react';

const Donations = () => {
  const [modal, setModal] = useState(false);
  const copyClipboard = (text: string) => {
    setModal(true);
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setModal(false);
    }, 2000);
  };

  return (
    <div className="text-gray-500 relative ">
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
        Note that although we are a registered charity, donations to the OPTF
        are not tax deductible.
      </p>
      <br />
      <p>Donate using your local currency: </p>
      <br />
      <ul className="list-disc">
        <li>
          <b>Donate on Donorbox.org: </b>{' '}
          <Link href="">
            <a className="cursor-pointer text-violet-250 hover:text-blue-400">
              {' '}
              https://donorbox.org/optf-donation
            </a>
          </Link>
        </li>
        <br />
      </ul>
      <p>Donate using the following cryptocurrency wallet addresses:</p>
      <br />
      <ul className="list-disc break-words">
        <li>
          <b> Oxen Address:</b>
          <span>
            LB724uBKKwRaAXSaWSt6Uo9r82S6CqQXqELyiMyDdDHw2jiCBvyViTzRUNyNDDTpAxQu3PpbpPLdbes5FHX45XskHsVNgFE
          </span>
          <button
            onClick={(e) => {
              copyClipboard(e.target.previousElementSibling.innerHTML);
            }}
            className="py-1 px-3 ml-3  bg-gray-200 hover:text-white hover:bg-blue-500"
          >
            Copy
          </button>
        </li>
        <li>
          <b>Bitcoin Address: </b>{' '}
          <span>37VhHEzXHDDfM37DmuhU8iyzu1nxZ8Spht</span>
          <button
            onClick={(e) => {
              copyClipboard(e.target.previousElementSibling.innerHTML);
            }}
            className="py-1 px-3 ml-3  bg-gray-200 hover:text-white hover:bg-blue-500"
          >
            Copy
          </button>
        </li>
        <li>
          {' '}
          <b>Ethereum Address: </b>{' '}
          <span>0x663930c996DeC843885B32ae5B5489B10f6F472e</span>
          <button
            onClick={(e) => {
              copyClipboard(e.target.previousElementSibling.innerHTML);
            }}
            className="py-1 px-3 ml-3  bg-gray-200 hover:text-white hover:bg-blue-500"
          >
            Copy
          </button>
        </li>
      </ul>
      {/* modal */}
      {modal && (
        <div className="absolute bottom-0 right-0 h-8 w-16 bg-white bg-gray-100 ">
          <p className="ml-2"> Copied!</p>
        </div>
      )}
    </div>
  );
};

export default Donations;
