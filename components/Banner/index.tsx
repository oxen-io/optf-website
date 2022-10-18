import { ReactElement, ReactNode } from 'react';

interface Props {
  image?: ReactElement;
  title?: string;
  subtitle: string;
}

export default function Banner(props: Props): ReactElement {
  const { title, subtitle, image } = props;
  return (
    <div className="rounded-3xl my-10 lg:mx-32 mx-2  px-10 py-16 shadow shadow-xl gradient-home-hero overflow-hidden text-white	">
      <div className="z-10 relative">
        {image!! && <div>{image}</div>}
        <h3 className="text-5xl mb-10">{title}</h3>
        <p className="font-thin  lg:text-xl text-lg lg:w-1/2">{subtitle}</p>
      </div>

      <div className="box z-0">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
    </div>
  );
}
