import React, { ReactNode } from 'react';

import UI from '@/constants/ui';
import classNames from 'classnames';

interface Props {
  id?: string;
  fullWidth?: boolean;
  classes?: string;
  children: ReactNode;
}

export const containerStyles = {
  paddingLeft: `${UI.CONTAINER_PADDING_X}vw`,
  paddingRight: `${UI.CONTAINER_PADDING_X}vw`,
  maxWidth: `${UI.CONTAINER_MAX_WIDTH}px`,
};

export default function Container(props: Props) {
  const { id, fullWidth = false, classes, children } = props;

  return (
    <section className={classNames('w-full')}>
      <div
        id={id}
        className={classNames('w-full my-0 mx-auto', classes)}
        style={{
          paddingLeft: !fullWidth ? containerStyles.paddingLeft : undefined,
          paddingRight: !fullWidth ? containerStyles.paddingRight : undefined,
          maxWidth: !fullWidth ? containerStyles.maxWidth : undefined,
        }}
      >
        {children}
      </div>
    </section>
  );
}
