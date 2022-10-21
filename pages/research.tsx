import { Layout } from '@/components/ui';
import Report from '../components/Report';
import Link from 'next/link';
import { useScreen } from '@/contexts/screen';

export default function Research() {
  const { isSmall } = useScreen();
  return (
    <div className="bg-gray-250">
      <Layout>
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
        <section className="my-10 flex flex-col  justify-center items-center">
          <div className=" lg:text-xl text-base font-bold  flex lg:flex-row flex-col  text-center">
            <Link href="/assets/pdfs/Ground_Safe_Summary_2021.pdf">
              <a
                download
                target="_blank"
                rel="noopener noreferrer"
                className=" lg:mr-5 mr-0 lg:mb-0 mb-5 bg-indigo-300 rounded-xl p-2 px-4 hover:text-white"
              >
                Download summary
              </a>
            </Link>
            <Link href="/assets/pdfs/Ground_Safe_2021.pdf">
              <a
                download
                className="bg-indigo-300 rounded-xl p-2 px-4  hover:text-white"
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
            width={isSmall ? 250 : 600}
            height={isSmall ? 250 : 780}
            src="/assets/pdfs/Ground_Safe_2021.pdf"
          ></iframe>
        </section>
        <section className="flex items-start flex-col lg:mx-32 mx-5">
          <h4 className="text-4xl  font-semibold mb-10">
            Participate and share your experiences
          </h4>
          <div className="bg-white p-5 flex items-center flex-col mb-10">
            <p className="mb-10 font-thin mx-4">
              We are very interested in having journalists, activists and public
              interest lawyers contribute to our research. If you are
              interested, please contact us.
            </p>
            <Link href="/contact-us">
              <a className=" bg-gray-250 py-3 px-4 rounded-lg border border-gray-500 mb-3">
                Contact us
              </a>
            </Link>
          </div>
        </section>
      </Layout>
    </div>
  );
}
