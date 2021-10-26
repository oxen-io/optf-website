import { LegacyRef, ReactElement, ReactNode } from 'react';

import classNames from 'classnames';

interface Props {
  bgColor?: string;
  textColor?: string;
  size?: string;
  fontWeight?: string;
  animate?: boolean;
  hoverEffect?: boolean;
  type?: 'submit';
  reference?: LegacyRef<HTMLButtonElement>;
  classes?: string;
  children?: string | ReactNode;
  onClick?(): any;
}

export default function Button(props: Props): ReactElement {
  const {
    bgColor,
    textColor,
    fontWeight = 'normal',
    size,
    type,
    reference,
    animate = false,
    hoverEffect = true,
    classes,
    children,
    onClick,
  } = props;
  // See NB in README.md
  const bgClasses = [bgColor === 'none' && 'bg-transparent'];
  const textClasses = [''];
  const hoverClasses = [
    '',
    (hoverEffect || animate) && 'transition-colors duration-300',
  ];
  const sizeClasses = [''];
  const fontClasses = [fontWeight === 'normal' && 'font-normal'];

  return (
    <button
      className={classNames(
        bgClasses,
        textClasses,
        hoverEffect && hoverClasses,
        sizeClasses,
        fontClasses,
        classes
      )}
      type={type}
      ref={reference}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
