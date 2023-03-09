import Link from 'next/link';
import ProjectsPrivacyPolicy from '../../ProjectsPrivacyPolicy';

export default function Legals() {
  return (
    <div className="text-gray-500">
      <h3 className="mb-5 text-2xl font-semibold lg:text-4xl">
        Policies and legals
      </h3>
      <p>
        The OPTF has multiple projects which it manages and supports. We hold
        high expectations for all employees and partners of the OPTF.
      </p>
      <br />
      <p>
        Our team is committed to maintaining the highest standards when it comes
        to ethical behaviour, honesty and integrity. We pride ourselves in
        ensuring our workplace and the spaces we communicate and work in are
        free from discrimniation, abuse or harassment of any kind. We’re careful
        to ensure our actions don’t result in harm, or propagate disinformation
        or hate.
      </p>
      <br />
      <p>
        The motivation behind what we have built is for the benefit and progress
        of humanity and our work is underpinned by the principles enshrined in
        <Link href="https://www.un.org/en/about-us/universal-declaration-of-human-rights">
          <a className="hover:text-blue-400 text-violet-250">
            the Universal Declaration of Human Rights{' '}
          </a>
        </Link>
        (UDHR). However we recognise our technologies could also be used by
        those who seek to undermine those values. While we promote and defend
        diversity of opinion and freedom of expression, OPTF has a
        zero-tolerance policy towards those who undermine the principles of the
        UDHR, or are involved in or assist the activities of violent and
        extremist individuals and organizations, child sexual exploitation or
        the exploitation of anyone, or participate in creating, maintaining or
        promoting platforms that provides space for hate speech and violent
        content that attacks another group especially on the basis of race,
        religion, or sexual orientation.
      </p>
      <br />
      <p className="pb-20">
        We also have three main development projects are Session, Oxen, and
        Lokinet — each of their privacy policies are outlined below.
      </p>

      <ProjectsPrivacyPolicy
        src="https://google.com"
        name="Session privacy policy"
      />
      <ProjectsPrivacyPolicy
        src="https://google.com"
        name="Lokinet privacy policy"
      />
      <ProjectsPrivacyPolicy src="https://google.com" name="Oxen Legals" />
    </div>
  );
}
