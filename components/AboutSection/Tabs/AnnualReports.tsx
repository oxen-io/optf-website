import Link from 'next/link';

export default function AnnualReports() {
  return (
    <div className="text-gray-500">
      <h3 className="mb-5 text-2xl font-semibold lg:text-4xl">
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
        <i>
          Note: past audits were completed under the OPTF’s previous name and
          branding (“Loki Foundation” and/or “LAG Foundation”). Future audits
          will be completed under the OPTF name and branding.
        </i>
      </p>
      <br />
      <ul className="pb-5 ml-10 list-disc">
        <li>
          <Link href="/assets/pdfs/LAG_Foundation_FY18-EY-Financial-Report.pdf">
            <a className="cursor-pointer text-violet-250 hover:text-blue-400">
              FY 17/18 Annual Report
            </a>
          </Link>
        </li>
        <li>
          <Link href="/assets/pdfs/LAG-Foundation-2019-Annual-Report.pdf">
            <a className="cursor-pointer text-violet-250 hover:text-blue-400">
              FY 18/19 Annual Report
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
