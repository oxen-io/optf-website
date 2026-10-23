const linkClasses =
  'transition ease-in-out text-violet-250 hover:text-blue-500 underline';

export default function SessionFoundationContact() {
  return (
    <div className="max-w-6xl px-10 pb-16 mx-2 text-lg lg:mx-5 xl:mx-auto">
      <p>
        The OPTF has moved into the Session Technology Foundation, and this
        website is kept as an archive. To get in touch, email{' '}
        <a className={linkClasses} href="mailto:contact@session.foundation">
          contact@session.foundation
        </a>{' '}
        or visit{' '}
        <a
          className={linkClasses}
          href="https://session.foundation/"
          target="_blank"
          rel="noopener noreferrer"
        >
          session.foundation
        </a>
        .
      </p>
    </div>
  );
}
