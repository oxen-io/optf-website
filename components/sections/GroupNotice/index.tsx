import { ReactElement } from 'react';
import classNames from 'classnames';

interface Props {
  classes?: string;
}

export default function GroupNotice(props: Props): ReactElement {
  const { classes } = props;
  return (
    <div
      className={classNames(
        ' text-white font-helvetica px-10 py-16 border-b border-dashed',
        'md:py-12',
        classes
      )}
    >
      <h4 className={classNames('text-xl font-bold leading-none mb-2')}>
        Join the movement and help defend privacy in the digital world.
      </h4>
      <p className={classNames('leading-none')}>
        Sign up to the mailing list and start taking action!
      </p>
      <div id="custom-substack-embed"></div>
    </div>
  );
}
