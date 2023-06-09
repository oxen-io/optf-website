import { ReactElement } from 'react';

interface Props {
  image?: ReactElement;
  title?: string;
  subtitle: string;
  subtitleTwo?: string;
}

export default function Banner(props: Props): ReactElement {
  const { title, subtitle, subtitleTwo, image } = props;
  return (
    <div className="max-w-6xl px-10 py-16 mx-2 my-10 overflow-hidden text-white rounded-3xl lg:mx-5 xl:mx-auto shadow-header gradient-home-hero">
      <div className="relative z-10">
        {!!image && <div>{image}</div>}
        <h3 className="mb-10 text-5xl font-semibold">{title}</h3>
        <p className="text-lg font-thin lg:text-xl lg:w-1/2">{subtitle}</p>

        {!!subtitleTwo && (
          <div>
            <br />
            <p className="text-lg font-thin lg:text-xl lg:w-1/2">
              {subtitleTwo}
            </p>
          </div>
        )}
      </div>

      <div className="z-0 box">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
    </div>
  );
}
