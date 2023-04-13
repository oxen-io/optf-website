import { LegacyRef, ReactElement } from 'react';
import classNames from 'classnames';

interface Props {
  bgColor?: 'green-250' | 'green-350' | 'none';
  textColor?: 'white' | 'black';
  size?: 'small' | 'medium' | 'large';
  shape?: 'round' | 'semiround' | 'square';
  fontWeight?: 'normal' | 'semibold' | 'bold';
  hoverEffect?: boolean;
  type?: 'submit';
  reference?: LegacyRef<HTMLButtonElement>;
  classes?: string;
  children?: string;
  onClick?(): void;
}

export default function Button(props: Props): ReactElement {
  const {
    bgColor = 'green-350',
    textColor = 'black',
    fontWeight = 'normal',
    size = 'medium',
    shape = 'round',
    type,
    reference,
    hoverEffect = true,
    classes,
    children,
    onClick,
  } = props;
  // See Gotchas in README
  const bgClasses = [
    bgColor === 'green-250' && 'bg-green-250',
    bgColor === 'green-350' && 'bg-green-350',
    bgColor === 'none' && 'bg-transparent',
  ];
  const textClasses = [
    textColor === 'white' && 'text-white',
    textColor === 'black' && 'text-black',
  ];

  const sizeClasses = [
    size === 'small' && 'text-sm py-1 px-7',
    size === 'medium' && 'py-2 px-7',
    size === 'large' && 'py-2 px-11',
  ];
  const shapeClasses = [
    shape === 'round' && 'rounded-3xl',
    shape === 'semiround' && 'rounded-lg',
    shape === 'square' && 'rounded-sm',
  ];
  const fontClasses = [
    fontWeight === 'normal' && 'font-normal',
    fontWeight === 'semibold' && 'font-semibold',
    fontWeight === 'bold' && 'font-bold',
  ];

  return (
    <button
      className={classNames(
        bgClasses,
        textClasses,
        hoverEffect,
        sizeClasses,
        shapeClasses,
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
