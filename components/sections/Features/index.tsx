import Container from '@/components/Container';
import { Headline } from '@/components/ui';
import Image from 'next/image';
import { ReactElement } from 'react';
import classNames from 'classnames';
import { useScreen } from '@/contexts/screen';

export default function Features(): ReactElement {
  const { isSmall, isMedium, isLarge, isHuge, isEnormous } = useScreen();
  const headingClasses = classNames(
    'font-helvetica text-4xl font-bold text-gray-dark mb-1'
  );
  const paragraphClasses = classNames(
    'text-gray-lighter leading-6 mb-8',
    'md:mb-12'
  );
  return (
    <section className={classNames(' text-gray-dark')}>
      <Headline
        color="gray-dark"
        classes={classNames('text-lg font-bold pt-16', 'lg:pt-20')}
        containerWidths={{
          small: '10rem',
          medium: '34rem',
          large: '67rem',
        }}
      >
        <h2>Features</h2>
      </Headline>
      <Container
        hasMinHeight={true}
        heights={{
          small: '100%',
          medium: '100%',
          large: '100vh - 12rem',
          huge: '100vh - 84px',
          enormous: '100vh - 84px',
        }}
        classes={classNames(
          '2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center'
        )}
      >
        <div
          className={classNames(
            'lg:mx-auto lg:flex lg:justify-between lg:items-center lg:mt-36',
            '2xl:mt-0 2xl:w-full',
            '3xl:-mt-24'
          )}
        >
          {(isSmall || isMedium) && (
            <div
              className={classNames('-mt-4 -ml-1 mb-12', 'md:mb-16 md:px-20')}
            >
              <Image
                src="/assets/images/ui-create-account.png"
                alt="mobile app create account screenshot"
                width="1148px"
                height="2000px"
                layout="responsive"
                priority={true}
                loading="eager"
              />
            </div>
          )}
          <div
            className={classNames(
              'px-3',
              'md:max-w-xl',
              'lg:max-w-sm lg:px-0 lg:-mt-8 lg:mr-8',
              '2xl:mt-0'
            )}
          >
            <h3 className={headingClasses}>Group chats</h3>
            <p className={paragraphClasses}>
              Talk to your friends or talk to the world. You decide. Closed
              groups let you talk to up to 100 friends at once, with the same
              encrypted protections as one-on-one chats. Got a bigger crowd? Use
              an open group to connect with as many people as you want.
            </p>
            <h3 className={headingClasses}>Voice messages</h3>
            <p className={paragraphClasses}>
              Sometimes, a text just isn’t enough. Voice messages let you send
              something a little more personal, so nothing gets lost in
              translation.
            </p>
            <h3 className={headingClasses}>Attachments</h3>
            <p className={paragraphClasses}>
              Don’t leak those docs. Send all your files, images, and
              attachments through a network that takes your privacy seriously.
            </p>
          </div>
          {(isLarge || isHuge || isEnormous) && (
            <div
              className={classNames(
                'w-full -mt-12',
                'xl:ml-8 xl:-mr-8',
                '3xl:-mr-16'
              )}
            >
              <Image
                src="/assets/images/mockup-desktop.png"
                alt="desktop app screenshot"
                width="2477px"
                height="3000px"
                layout="responsive"
                loading="eager"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
