import Head from 'next/head';

import Layout from '@components/Layout';

export default function Home() {
  return (
    <div> 
      <Head>
        <title>Hello World</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
      </Head>
      <Layout>
        <p>Hello World</p>
      </Layout>
    </div>
  );
}
