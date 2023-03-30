import { Layout } from '@/components/ui';
import Report from '../components/Report';
import Link from 'next/link';
import { useScreen } from '@/contexts/screen';
import { ContactUsResearch } from '@/components/Research';
import { METADATA } from '@/constants';

export default function Research() {
  const { isSmall } = useScreen();
  return (
    <div className="bg-gray-250">
      <Layout title="Research | OPTF" metadata={METADATA.RESEARCH}>
        <div className="container max-w-6xl mx-auto">
          <Report
            title={
              'Through The Looking Glass: Digital Safety and Internet Freedom in South and Southeast Asia'
            }
            subtitle={
              "Digital threats and attacks continue to impact the work of human rights defenders and members of at-risk communities in South and Southeast Asia. Simultaneously, internet freedom is being undermined by cyber laws that limit or prohibit secure, safe, and private communications, and has been further eroded through practices and policies of telecommunications companies that fail to protect their customers’ freedom of expression and privacy rights.'Through the Looking Glass' synthesises the findings from the six country reports (Cambodia, Indonesia, Maldives, Nepal, The Philippines and Sri Lanka) and presents a summary of trends and offers recommendations."
            }
            ctaLink={
              '/assets/pdfs/Through-the-lookling-glass-Report_06082022.pdf'
            }
            ctaText={'Read the full report​'}
          />
          <Report
            title={
              'Assessing the digital security needs and practices of human rights defenders in Africa, MENA, South Asia, and Southeast Asia.'
            }
            subtitle={
              'Human rights defenders (HRDs) are being targeted by growing numbers of digital attacks, making effective digital security practices more important than ever. The Ground Safe report, produced by the OPTF in collaboration with key partners, presents the current state of digital security threats facing HRDs — and the knowledge and skills needed to counter them. Based on this analysis, the report makes recommendations for improving digital security knowledge and practice on the ground. Read the full report below.'
            }
            ctaText={'Read the full report below.'}
          />
          <section className="flex flex-col items-center justify-center my-10">
            <div className="flex flex-col text-base font-bold text-center lg:text-xl lg:flex-row">
              <Link href="/assets/pdfs/Ground_Safe_Summary_2021.pdf">
                <a
                  title="Ground_Safe_Summary_2021"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 px-4 mb-5 mr-0 bg-indigo-300 lg:mr-5 lg:mb-0 rounded-xl hover:text-white"
                >
                  Download summary
                </a>
              </Link>
              <Link href="/assets/pdfs/Ground_Safe_2021.pdf">
                <a
                  title="Ground_Safe_2021"
                  download
                  className="p-2 px-4 bg-indigo-300 rounded-xl hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Report
                </a>
              </Link>
            </div>
            <iframe
              className="my-10 w-100 h-100"
              id="iframepdf"
              width={isSmall ? 290 : 600}
              height={isSmall ? 500 : 780}
              src="/assets/pdfs/Ground_Safe_2021.pdf"
            ></iframe>
          </section>
          <ContactUsResearch />
        </div>
      </Layout>
    </div>
  );
}
