import { forwardRef } from 'react';

export interface TextWithCopyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  copyText: string;
  setModalOpen: (value: boolean) => void;
}

const TextWithCopyButton = forwardRef<
  HTMLButtonElement,
  TextWithCopyButtonProps
>(({ copyText, setModalOpen, ...props }, ref) => {
  const copyToClipboard = () => {
    setModalOpen(true);
    navigator.clipboard.writeText(copyText);
    setTimeout(() => {
      setModalOpen(false);
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
