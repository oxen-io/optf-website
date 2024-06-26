import { forwardRef } from 'react';

export interface TextWithCopyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  copyText: string;
  setToastOpen: (value: boolean) => void;
}

const TextWithCopyButton = forwardRef<
  HTMLButtonElement,
  TextWithCopyButtonProps
>(({ copyText, setToastOpen, ...props }, ref) => {
  const copyToClipboard = () => {
    setToastOpen(true);
    navigator.clipboard.writeText(copyText);
    setTimeout(() => {
      setToastOpen(false);
    }, 2000);
  };
  return (
    <>
      <span>{copyText}</span>
      <button
        ref={ref}
        onClick={copyToClipboard}
        className="px-3 py-1 ml-3 font-bold bg-gray-200 hover:text-white hover:bg-blue-500 rounded-md"
        {...props}
      >
        Copy
      </button>
    </>
  );
});
TextWithCopyButton.displayName = 'TextWithCopyButton';

export { TextWithCopyButton };
