import { useScreen } from '@/contexts/screen';
import Link from 'next/link';

export default function TransparencyReport() {
  const { isSmall } = useScreen();

  return (
    <>
      <h3 className="mb-5 text-2xl font-semibold lg:text-4xl">
        Transparency Report
      </h3>
      <p>
        The OPTF transparency report records all information request from law
        enforcement agencies towards Session. This document is updated
        quarterly. Additional user info/privacy information can be found{' '}
        <a
          className="font-semibold transition ease-in-out text-violet-250 hover:text-blue-500"
          href="https://getsession.org/faq"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <br />
      <h4 className="mb-5 text-xl font-semibold lg:text-3xl">Current Report</h4>
      <iframe
        allowFullScreen={true}
        className="w-100 h-100"
        id="iframepdf"
        width={isSmall ? 290 : 600}
        height={isSmall ? 500 : 780}
        src="/assets/pdfs/transparency-reports/OPTF_Transparency_Report_Q1_2024.pdf#toolbar=0&navpanes=0&view=FitH"
        style={{ width: isSmall ? '95vw' : undefined }}
      ></iframe>
      <br />
      <h4 className="mb-5 text-xl font-semibold lg:text-3xl">
        Previous Reports:
      </h4>
      <ul className="pb-5 ml-10 list-disc">
        <li>
          <Link href="/assets/pdfs/transparency-reports/OPTF_Transparency_Report_Q1_2024.pdf">
            <a className="cursor-pointer text-violet-250 hover:text-blue-400">
              January 1 2024 — March 31 2024
            </a>
          </Link>
        </li>
        <li>
          <Link href="/assets/pdfs/transparency-reports/OPTF_Transparency_Report_Q4_2023.pdf">
            <a className="cursor-pointer text-violet-250 hover:text-blue-400">
              October 1 2023 — December 31 2023
            </a>
          </Link>
        </li>
        <li>
          <Link href="/assets/pdfs/transparency-reports/OPTF_Transparency_Report_Q3_2023.pdf">
            <a className="cursor-pointer text-violet-250 hover:text-blue-400">
              July 1 2023 — September 30 2023
            </a>
          </Link>
        </li>
        <li>
          <Link href="/assets/pdfs/transparency-reports/OPTF_Transparency_Report_Q2_2023.pdf">
            <a className="cursor-pointer text-violet-250 hover:text-blue-400">
              April 1 2023 — June 30 2023
            </a>
          </Link>
        </li>
      </ul>
      <br />
    </>
  );
}
