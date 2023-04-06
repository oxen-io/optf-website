import { useState } from 'react';
import Partner from '../../Partner';
import partnersData from '../../../constants/partners';

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
    let stateCopy = { ...infoTexts };
    Object.keys(stateCopy).forEach(
      (v: any) => (stateCopy[v as keyof typeof stateCopy] = false)
    );
    setInfoTexts({ ...stateCopy, [index]: bool });
  };

  return (
    <>
      <h3 className="mb-5 text-2xl font-semibold lg:text-4xl">
        Partners & allies
      </h3>
      <p>
        There’s a passionate worldwide community working to defend your privacy.
      </p>
      <br />
      <p>
        We’re joining arms with organisations from around the world who are
        making a stand for digital privacy and security. We can solve the
        privacy crisis by developing new technology, sharing knowledge and
        resources, and empowering people to own their right to privacy.{' '}
      </p>
      <br />
      <p>
        These are some of the groups we’re working with to make the world a more
        private, more secure place.
      </p>
      <div className="my-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
          {partnersData.map((partner, index) => {
            return (
              <Partner
                key={partner.name}
                infoTexts={infoTexts}
                onHover={onHoverInfoTexts}
                totalPartners={partnersData.length - 1}
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
