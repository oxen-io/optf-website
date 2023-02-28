import { ReactElement, ReactNode } from 'react';

interface Props {
  image?: ReactElement;
  title?: string;
  subtitle: string;
}

export default function Banner(props: Props): ReactElement {
  const { title, subtitle, image } = props;
  return (
    <div className="max-w-6xl px-10 py-16 mx-2 mx-auto my-10 overflow-hidden text-white shadow rounded-3xl lg:mx-5 xl:mx-auto shadow-header gradient-home-hero ">
      <div className="relative z-10">
        {image!! && <div>{image}</div>}
        <h3 className="mb-10 text-5xl">{title}</h3>
        <p className="text-lg font-thin lg:text-xl lg:w-1/2">{subtitle}</p>
      </div>

      <div className="z-0 box">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
    </div>
  );
}
