import { TextWithCopyButton } from '@/components/TextWithCopyButton';
import { useState } from 'react';
import { WALLETS } from '@/constants/wallets';

export default function Donations() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative mb-14">
      <ul className="pb-5 ml-10 break-words list-disc">
        {Object.entries(WALLETS).map(([key, value]) => (
          <li key={key}>
            <b className="whitespace-nowrap">{key} Address:</b>{' '}
            <TextWithCopyButton setModalOpen={setModalOpen} copyText={value} />
          </li>
        ))}
      </ul>
      {modalOpen ? (
        <div className="absolute bottom-0 right-0 bg-gray-100 font-bold px-4 py-2 rounded-md">
          Copied!
        </div>
      ) : null}
    </div>
  );
}
