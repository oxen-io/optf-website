import { Layout } from '@/components/ui';
import PrivacyPolicyComponent from '@/components/PrivacyPolicyComponent';
import { METADATA } from '@/constants';

export default function PrivacyPolicy() {
  const data = [
    {
      title: 'OPTF Privacy Policy​',
      description:
        'OPTF’s purpose is to build open-source, metadata-free communications tools and apps that defend privacy in the digital world.',
    },
    {
      title: 'The OPTF website​',
    },
    {
      title: 'Information we don’t collect​',
      description:
        'The OPTF website (comprising https://optf.ngo, and all subdomains) never attempts to link your usage of the website to your real identity or create a user profile based on your activity.',
    },
    {
      title: 'Information we do collect​',
      description:
        '<p>The OPTF website deploys two cookies:</p><br/><p><strong>fca_eoi_pagecount</strong>, which is part of the Optin Cat plugin used to manage the OPTF’s email newsletter, and</p><br/><p><strong>wordpress_test_cookie</strong>, a cookie used by WordPress to test whether cookies are enabled.</p><br/><p>If you choose to sign up to the OPTF’s email newsletter, the supplied email address is collected by the Optin Cat plugin, and may be used by the OPTF to send email newsletters using the CreateSend email campaign manager. The supplied email address is never shared or sold to any third parties.</p>',
    },
    {
      title: 'Information we share​',
      description:
        'We don’t share or sell any data we collect on the OPTF website with third parties. Simple as that.',
    },
    {
      title: 'Conclusion​',
      description:
        'This page summarises the entirety of the privacy policy for the OPTF website. If you have any questions about any of the policies outlined in this document, please send us an email at team@oxen.io<br/>',
    },
  ];

  return (
    <Layout
      metadata={METADATA.PRIVACY_POLICY}
      title="OPTF | Privacy Policy | Privacy is a fundamental right."
    >
      {data.map((info, index) => {
        return (
          <PrivacyPolicyComponent
            key={index.toString()}
            title={info.title}
            description={info.description}
          />
        );
      })}
    </Layout>
  );
}
