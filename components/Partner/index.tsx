import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { IPartner } from '../../constants/partners';

export interface Props {
  partner: IPartner;
  index: string;
  totalPartners: number;
  onHover: (index: number, boolean: boolean) => void;
  infoTexts: object;
}

export default function Partner(props: Props) {
  const { partner, index, totalPartners, onHover, infoTexts } = props;
  const lastPartner = index === totalPartners;

  let partnerBorderClass =
    'lg:border-l lg:border-r border-dashed border-gray-300';

  return (
    <Link key={partner.link} href={partner.link}>
      <a
        target="_blank"
        className={classNames(lastPartner && 'md:col-span-3 lg:col-span-3')}
      >
        <div
          onMouseEnter={() => onHover(index, true)}
          onMouseLeave={() => onHover(index, false)}
          className={classNames(
            'relative flex items-center justify-center ,  lg:flex-row flex-col',
            partner.border && partnerBorderClass,
            lastPartner && 'md:col-span-3 lg:col-span-3'
          )}
        >
          {infoTexts[index as keyof typeof infoTexts] && (
            <div className="absolute z-10 hidden max-w-xs p-5 mx-5 bg-white border border-gray-800 rounded-lg cursor-pointer border-1 border-w-3 md:hidden lg:block">
              {partner.text}
            </div>
          )}
          <Image
            alt={partner.name + ' logo'}
            width={partner.width}
            height={partner.height}
            src={partner.image}
          />
          <div className="block my-8 text-sm lg:hidden">{partner.text}</div>
        </div>
      </a>
    </Link>
  );
}
