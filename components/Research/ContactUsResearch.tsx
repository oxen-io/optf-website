import Link from 'next/link';

export default function ContactUsResearch() {
  return (
    <section className="mx-10 xl:mx-0">
      <h4 className="mb-10 text-4xl font-semibold">
        Participate and share your experiences
      </h4>
      <div className="flex flex-col items-center p-5 mb-10 bg-white rounded-xl">
        <p className="mx-4 mb-10 font-thin">
          We are very interested in having journalists, activists and public
          interest lawyers contribute to our research. If you are interested,
          please contact us.
        </p>
        <Link href="/contact-us">
          <a className="px-4 py-3 mb-3 font-semibold transition duration-500 ease-in-out border border-gray-500 rounded-lg bg-gray-250 hover:bg-violet-350 hover:text-white">
            Contact us
          </a>
        </Link>
      </div>
    </section>
  );
}
