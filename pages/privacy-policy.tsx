import { Layout } from '@/components/ui';
import Banner from '@/components/Banner';

export default function Privacy() {
  const text = [
    {
      title: 'OPTF Privacy Policy',
      subtitle:
        'OPTF’s purpose is to build open-source, metadata-free communications tools and apps that defend privacy in the digital world.',
    },
    { title: 'The OPTF website' },
    {
      title: 'Information we don’t collect',
      subtitle:
        'The OPTF website (comprising https://optf.ngo, and all subdomains) never attempts to link your usage of the website to your real identity or create a user profile based on your activity.',
    },
    {
      title: 'Information we do collect',
      subtitle:
        'The OPTF website deploys two cookies: fca_eoi_pagecount, which is part of the Optin Cat plugin used to manage the OPTF’s email newsletter, and wordpress_test_cookie, a cookie used by WordPress to test whether cookies are enabled. If you choose to sign up to the OPTF’s email newsletter, the supplied email address is collected by the Optin Cat plugin, and may be used by the OPTF to send email newsletters using the CreateSend email campaign manager. The supplied email address is never shared or sold to any third parties.',
    },
    {
      title: 'Information we share',
      subtitle:
        'We don’t share or sell any data we collect on the OPTF website with third parties. Simple as that.',
    },
    {
      title: 'Conclusion',
      subtitle:
        'This page summarises the entirety of the privacy policy for the OPTF website. If you have any questions about any of the policies outlined in this document, please send us an email at team@oxen.io',
    },
  ];
  return (
    <Layout>
      <div className="lg:mx-32 mx-10 my-10">
        {text.map((info) => {
          return (
            <div className="mb-10">
              <h1 className="text-2xl text-green-250 mb-10">{info.title}</h1>
              {info.subtitle!! && <p className="font-thin">{info.subtitle}</p>}
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
