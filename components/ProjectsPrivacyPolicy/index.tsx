import classNames from 'classnames';
import { useState } from 'react';

export interface Props {
  name: string;
  src: string;
}

export default function ProjectsPrivacyPolicy(props: Props) {
  const [show, setShow] = useState(false);

  const { name, src } = props;
  return (
    <div className="py-5 border-b border-gray-200">
      <h3
        onClick={() => setShow(!show)}
        className={classNames(
          'text-4xl font-bold cursor-pointer text-green-250',
          show && 'text-green-450'
        )}
      >
        ➧ {name}
      </h3>
      {show && <iframe src={src}></iframe>}
    </div>
  );
}
