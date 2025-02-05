import Link from 'next/link';

export default function AnnualReports() {
  return (
    <>
      <ul className="pb-5 ml-10 list-disc">
        <li>
          <Link href="/assets/pdfs/annual-reports/LAG_Foundation_FY18-EY-Financial-Report.pdf">
            <a className="cursor-pointer text-violet-250 hover:text-blue-400">
              FY 17/18 Annual Report
            </a>
          </Link>
        </li>
        <li>
          <Link href="/assets/pdfs/annual-reports/LAG-Foundation-2019-Annual-Report.pdf">
            <a className="cursor-pointer text-violet-250 hover:text-blue-400">
              FY 18/19 Annual Report
            </a>
          </Link>
        </li>
        <li>
          <Link href="/assets/pdfs/annual-reports/Annual_Report_2020.pdf">
            <a className="cursor-pointer text-violet-250 hover:text-blue-400">
              FY 19/20 Annual Report
            </a>
          </Link>
        </li>
        <li>
          <Link href="/assets/pdfs/annual-reports/Annual_Report_2021.pdf">
            <a className="cursor-pointer text-violet-250 hover:text-blue-400">
              FY 20/21 Annual Report
            </a>
          </Link>
        </li>
        <li>
          <Link href="/assets/pdfs/annual-reports/Annual_Report_2022.pdf">
            <a className="cursor-pointer text-violet-250 hover:text-blue-400">
              FY 21/22 Annual Report
            </a>
          </Link>
        </li>
        <li>
          <Link href="/assets/pdfs/annual-reports/Annual_Report_2023.pdf">
            <a className="cursor-pointer text-violet-250 hover:text-blue-400">
              FY 22/23 Annual Report
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
}
