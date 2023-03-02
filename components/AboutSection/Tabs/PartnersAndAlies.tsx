import Image from 'next/image';
import { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

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
      link: 'https://www.blueprintforfreespeech.net/',
      text: 'A non-profit promoting the right to freedom of expression and  defending Article 19 of the Universal Declaration of Human Rights.',
      border: false,
    },
    {
      image: '/assets/images/partners-mojolab.png',
      width: 228,
      height: 136,
      link: 'https://mojolab.org/',
      text: 'Making the latest innovations in culture, knowledge, skill, and technology available to communities at low cost, preferably in self-implementable and self-reliant formats.',
      border: true,
    },
    {
      image: '/assets/images/partners-hackergram.png',
      width: 269,
      height: 171,
      link: 'https://hackergram.org/',
      text: 'Building real and virtual community spaces where people can work together to create innovative and sustainable solutions to global problems.',
      border: false,
    },
    {
      image: '/assets/images/partners-engagemedia.png',
      width: 316,
      height: 190,
      link: 'https://www.engagemedia.org/',
      text: 'A non-profit media, technology, and culture organisation using video, the internet, and open technologies to create social and environmental change.',
      border: false,
    },
    {
      image: '/assets/images/partners-equalitie.png',
      width: 300,
      height: 180,
      link: 'https://equalit.ie/',
      text: 'Developing open and reusable systems with a focus on privacy, resilience, and self-determination.',
      border: true,
    },
    {
      image: '/assets/images/partners-coinstop.png',
      width: 300,
      height: 180,
      link: 'https://coinstop.io/',
      text: 'A business working to protect and secure digital assets, Coinstop is Australia’s largest and longest-serving provider of blockchain and cryptocurrency hardware.',
      border: false,
    },
    {
      image: '/assets/images/partners-GCA.png',
      width: 225,
      height: 75,
      link: 'https://www.globalcyberalliance.org/',
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
    'lg:border-l lg:border-r border-dashed border-gray-300';

  return (
    <div className="text-gray-500">
      <h3 className="mb-5 text-2xl font-semibold lg:text-4xl">
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
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {partnersData.map((partner, index: number) => {
            return (
              <Link key={partner.link} href={partner.link}>
                <a
                  target="_blank"
                  className={classNames(
                    index === partnersData.length - 1 && 'lg:col-span-3'
                  )}
                >
                  <div
                    onMouseEnter={() => onHoverInfoTexts(index, true)}
                    onMouseLeave={() => onHoverInfoTexts(index, false)}
                    className={classNames(
                      'relative flex items-center justify-center lg:flex-row flex-col',
                      partner.border && partnerBorderClass,
                      index === partnersData.length - 1 && 'lg:col-span-3'
                    )}
                  >
                    {infoTexts[index as keyof typeof infoTexts] && (
                      <div className="absolute z-10 max-w-xs p-5 mx-5 bg-white border border-gray-800 rounded-lg cursor-pointer border-1 border-w-3">
                        {partner.text}
                      </div>
                    )}
                    <Image
                      alt={'partner N' + index}
                      width={partner.width}
                      height={partner.height}
                      src={partner.image}
                    />

                    <div className="block my-8 text-sm lg:hidden">
                      {partner.text}
                    </div>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PartnersAndAlies;
