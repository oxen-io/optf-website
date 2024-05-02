import { useState } from 'react';
import Partner from '../../Partner';
import { PARTNERS } from '@/constants';

export default function PartnersAndAllies() {
  const [infoTexts, setInfoTexts] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const onHoverInfoTexts = (index: number, bool: boolean) => {
    const stateCopy = { ...infoTexts };
    Object.keys(stateCopy).forEach(
      (v) => (stateCopy[v as unknown as keyof typeof stateCopy] = false)
    );
    setInfoTexts({ ...stateCopy, [index]: bool });
  };

  return (
    <>
      <div className="my-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
          {PARTNERS.map((partner, index) => {
            return (
              <Partner
                key={partner.name}
                infoTexts={infoTexts}
                onHover={onHoverInfoTexts}
                totalPartners={PARTNERS.length - 1}
                partner={partner}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
