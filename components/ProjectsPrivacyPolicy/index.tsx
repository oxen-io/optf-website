import classNames from 'classnames';
import { useState } from 'react';
import { useScreen } from '@/contexts/screen';
import RichBody from '../RichBody';
import { Document } from '@contentful/rich-text-types';
import Container from '../Container';

export interface Props {
  title: string;
  src?: string;
  description: Document | undefined;
}

export default function ProjectsPrivacyPolicy(props: Props) {
  const { title, src, description } = props;
  const { isSmall } = useScreen();
  const [show, setShow] = useState(false);
  console.log(description);

  return (
    <div className="py-5 border-b border-gray-200">
      <h3
        onClick={() => setShow(!show)}
        className={classNames(
          'text-4xl font-bold cursor-pointer text-green-250',
          show && 'text-green-450'
        )}
      >
        {show ? (
          <span className="text-2xl">▼</span>
        ) : (
          <span className="text-xl">►</span>
        )}{' '}
        {title}
      </h3>
      {show && (
        <div className="flex items-center justify-center">
          {src ? (
            <iframe
              id="iframepdf"
              className="my-10 w-100 h-100"
              width={isSmall ? 290 : 600}
              height={isSmall ? 500 : 780}
              src={src}
            ></iframe>
          ) : (
            <Container
              classes={classNames(
                'text-gray break-words pt-0 max-w-5xl',
                'pb-0 md:pt-0 md:pb-0  xl:px-0 md:px-7',
                'lg:pb-8  bg-white'
              )}
            >
              <RichBody
                headingClasses="font-semibold"
                classes={classNames(
                  'text-sm text-gray my-10 word-break',
                  'md:text-base'
                )}
                body={description}
              />
            </Container>
          )}
        </div>
      )}
    </div>
  );
}
