import Link from 'next/link';

const AnnualReports = () => {
  return (
    <div className="text-gray-500">
      <h3 className="lg:text-4xl text-2xl font-semibold mb-5">
        Annual Reports
      </h3>
      <p>
        As a non-profit technology foundation, we are committed to remaining
        transparent in all aspects of our work. This includes our allocation of
        funds, and which projects we choose to support. On this page, you can
        download and view all financial reports produced by the OPTF since our
        establishment in 2018.
      </p>
      <br />
      <p>
        Note: past audits were completed under the OPTF’s previous name and
        branding (“Loki Foundation” and/or “LAG Foundation”). Future audits will
        be completed under the OPTF name and branding.
      </p>
      <br />
      <ul className="list-disc">
        <li>
          <Link href="/">
            <a className="cursor-pointer text-violet-250 hover:text-blue-400">
              FY 17/18 Annual Report
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="cursor-pointer text-violet-250 hover:text-blue-400">
              FY 18/19 Annual Report
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AnnualReports;
