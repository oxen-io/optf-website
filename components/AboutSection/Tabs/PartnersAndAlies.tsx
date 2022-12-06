import Image from 'next/image';
import { useState } from 'react';
import classNames from 'classnames';

const PartnersAndAlies = () => {
  const [infoTexts, setInfoTexts] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const partnersData = [
    {
      image: '/assets/images/partners-blueprint.png',
      width: 254,
      height: 168,
      text: 'A non-profit promoting the right to freedom of expression and  defending Article 19 of the Universal Declaration of Human Rights.',
      border: false,
    },
    {
      image: '/assets/images/partners-mojolab.png',
      width: 228,
      height: 136,
      text: 'Making the latest innovations in culture, knowledge, skill, and technology available to communities at low cost, preferably in self-implementable and self-reliant formats.',
      border: true,
    },
    {
      image: '/assets/images/partners-hackergram.png',
      width: 269,
      height: 171,
      text: 'Building real and virtual community spaces where people can work together to create innovative and sustainable solutions to global problems.',
      border: false,
    },
    {
      image: '/assets/images/partners-engagemedia.png',
      width: 316,
      height: 190,
      text: 'A non-profit media, technology, and culture organisation using video, the internet, and open technologies to create social and environmental change.',
      border: false,
    },
    {
      image: '/assets/images/partners-equalitie.png',
      width: 300,
      height: 180,
      text: 'Developing open and reusable systems with a focus on privacy, resilience, and self-determination.',
      border: true,
    },
    {
      image: '/assets/images/partners-coinstop.png',
      width: 300,
      height: 180,
      text: 'A business working to protect and secure digital assets, Coinstop is Australia’s largest and longest-serving provider of blockchain and cryptocurrency hardware.',
      border: false,
    },
    {
      image: '/assets/images/partners-GCA.png',
      width: 225,
      height: 75,
      text: 'The Global Cyber Alliance is an international, cross-sector effort dedicated to reducing cyber risk and improving our connected world.',
      border: false,
    },
  ];

  const onHoverInfoTexts = (index: number, bool: boolean) => {
    let stateCopy = { ...infoTexts };
    Object.keys(stateCopy).forEach(
      (v: any) => (stateCopy[v as keyof typeof stateCopy] = false)
    );
    setInfoTexts({ ...stateCopy, [index]: bool });
  };

  let partnerBorderClass =
    'lg:border-l lg:border-r  border-dashed border-gray-300';

  return (
    <div className="text-gray-500">
      <h3 className="lg:text-4xl text-2xl font-semibold mb-5">
        Partners and alies
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
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {partnersData.map((partner, index: number) => {
            return (
              <div
                onMouseEnter={() => onHoverInfoTexts(index, true)}
                onMouseLeave={() => onHoverInfoTexts(index, false)}
                className={classNames(
                  'relative flex items-center justify-center lg:flex-row flex-col',
                  partner.border && partnerBorderClass,
                  index === partnersData.length - 1 && 'lg:col-span-3'
                )}
              >
                {infoTexts[index] && (
                  <div className="absolute z-10 bg-white border border-1 border-gray-800 border-w-3 p-5  mx-5 rounded-lg   max-w-xs">
                    {partner.text}
                  </div>
                )}
                <Image
                  width={partner.width}
                  height={partner.height}
                  src={partner.image}
                />
                <div className="block lg:hidden text-sm my-8">
                  {partner.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PartnersAndAlies;
