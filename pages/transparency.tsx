import classNames from 'classnames';
import Image from 'next/image';
import { Layout } from '@/components/ui';
import Container from '@/components/Container';
import METADATA from '@/constants/metadata';

export default function Transparency() {
  return (
    <Layout
      title="OPTF | Transparency report"
      metadata={METADATA['TRANSPARENCY']}
    >
      <section>
        <Container
          classes={classNames(
            'my-24 px-5  text-left text-gray-500',
            'md:flex md:flex-col justify-center items-stretch'
          )}
        >
          <h1
            className={classNames('font-assistant text-5xl font-semibold mb-8')}
          >
            Transparency Report
          </h1>
          <div className={classNames('grid grid-cols-4')}>
            <div className={classNames('text-lg md:col-span-3 col-span-4')}>
              <p className="mb-3">
                We may be asked to respond to certain government information
                requests. Any information which we are permitted to publicly
                share about requests that we have received will be included on
                this page. These requests may relate to Session, our secure
                messaging app, Lokinet, our onion routing network, the Oxen
                blockchain, or any combination of our technologies.
              </p>
              <p className="mb-3">
                Government information requests may be issued through subpoenas
                or other forms of legal demand, informal channels, or through
                legislation (such as the Australian Federal Government’s
                Technical Capability Notice). Requests may be made by different
                legal authorities from multiple jurisdictions, including the
                United States, Australia, and/or other countries.
              </p>
              <p className="mb-3">
                However, due to the design of our decentralised technology, we
                cannot collect user-specific data. Therefore, requests will most
                likely be limited to technical information requests. We cannot
                be forced to release faulty or compromised software. As of
                2023-01-18 we have received 0 requests from 0 jurisdictions.
                This page will be updated every three months.
              </p>
              <p className="mb-3">
                We cannot be forced to release faulty or compromised software.
              </p>
              <p className="mb-3">
                <b>
                  As of 2023-01-18 we have received 0 requests from 0
                  jurisdictions.
                </b>
              </p>
              <p>
                <i>This page will be updated every three months.</i>{' '}
              </p>
            </div>
            <div
              className={classNames(
                'flex items-center md:col-span-1 col-span-4 '
              )}
            >
              <Image
                alt="magnifying glass transparency"
                src="/assets/images/transparency.png"
                width={315}
                height={315}
              />
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
