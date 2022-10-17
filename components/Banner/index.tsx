import { ReactElement, ReactNode } from 'react';

interface Props {
  image?: ReactElement;
  title?: string;
  subtitle: string;
}

export default function Banner(props: Props): ReactElement {
  const { title, subtitle, image } = props;
  return (
    <div className=" rounded-3xl my-10 mx-10 px-10 py-10 shadow shadow-xl gradient-home-hero">
      {image!! && <div>{image}</div>}
      <h3 className="text-4xl">{title}</h3>
      <p className="font-thin text-white  text-xl w-1/2">{subtitle}</p>
    </div>
  );
}
