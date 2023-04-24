import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutOPTF() {
  const logoClass =
    'my-5 lg:border-r border-dashed lg:px-10 lg:pr-16 lg:my-10 cursor-pointer';
  return (
    <div>
      <div className="px-3 lg:px-0">
        <h1 className="mb-5 text-2xl font-semibold lg:text-4xl">
          You have a right to privacy.
        </h1>
        <p>
          Privacy is a human right. Everyone knows what privacy feels like — it
          feels comfortable, safe, and secure. When we are in private, we have
          the freedom to share ideas and be ourselves. In the physical world, we
          all take steps to protect our privacy every day. But privacy has
          fallen by the wayside in the digital world. If we want the internet to
          be a free, fair, and equal place for everyone, we must design, create,
          and share technology which preserves people’s privacy and enables them
          to experience the internet in a safe and secure way.
        </p>
        <br />
        <p>
          OPTF’s mission is to equip every digital citizen with technology which
          upholds their right to privacy. Whether you’re buying a coffee,
          messaging a friend, or simply browsing the internet, your privacy
          should always be protected. It shouldn’t have any strings attached —
          it should be provided by default, and it should be free.
        </p>
        <br />
        <p>
          One of the OPTF’s main development achievements is the private
          messenger, Session. Session is a free and open-source application
          which allows people to have completely private, secure, and anonymous
          conversations online. Session is a tool for protecting free speech
          including for journalists, activists, and other people working in
          civil society.
        </p>
        <br />
        <p>
          We are actively implementing technology projects that help us achieve
          our mission. These projects include:
        </p>
        <div className="flex flex-col pb-3 my-5 lg:flex-row lg:pb-7">
          <Link passHref href="https://getsession.org/">
            <a target="_blank" rel="noreferrer">
              <div className={classNames(logoClass)}>
                <Image
                  alt="session icon"
                  src="/assets/images/session-logo-black.png"
                  width={380}
                  height={76}
                />
              </div>
            </a>
          </Link>
          <Link passHref href="https://oxen.io/">
            <a target="_blank" rel="noreferrer">
              <div className={classNames(logoClass)}>
                <Image
                  alt="oxen icon"
                  src="/assets/images/oxen-icon.png"
                  width={380}
                  height={76}
                />
              </div>
            </a>
          </Link>
          <Link passHref href="https://lokinet.org/">
            <a target="_blank" rel="noreferrer">
              <div className="my-5 cursor-pointer lg:px-10 lg:pr-16 lg:my-10">
                <Image
                  alt="lokinet icon"
                  src="/assets/images/lokinet-icon.png"
                  width={380}
                  height={76}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
      <h1 className="mb-16 text-2xl font-semibold lg:text-4xl">
        Our guiding principles are to:
      </h1>
      <div className="relative z-10 overflow-hidden text-2xl text-gray-900 bg-gray-100 lg:text-xl">
        <h4 className="px-6 my-5 ml-3 lg:px-0 lg:ml-10 lg:w-3/6">
          Build open-source, secure communications tools that are free and
          accessible.
        </h4>
        <div className="relative z-10 h-8 bg-white"></div>
        <h4 className="px-6 my-5 ml-3 lg:px-0 lg:ml-10 lg:w-3/6">
          Produce educational resources to support people and organisations to
          better understand, use, and implement privacy technologies.
        </h4>
        <div className="relative z-10 h-8 bg-white"></div>
        <h4 className="px-6 my-5 ml-3 lg:px-0 lg:ml-10 lg:w-3/6">
          Complete work which serves the interests of the public. Our work helps
          foster an open, accountable, and unified digital community.
        </h4>
        <div className="relative z-10 h-8 bg-white"></div>
        <h4 className="px-6 my-5 ml-3 lg:px-0 lg:ml-10 lg:w-3/6">
          Collaborate with other organisations on work which upholds digital
          rights.
        </h4>
        <div className="relative z-10 h-8 bg-white"></div>
        <h4 className="px-6 my-5 ml-3 lg:px-0 lg:ml-10 lg:w-3/6">
          Support, fund, and assist projects that align with our principles.
        </h4>
        <div className="z-10 box">
          <div className="wave1 -one"></div>
          <div className="wave1 -two"></div>
          <div className="wave1 -three"></div>
        </div>
      </div>
      <div className="my-20">
        <div className="flex items-center">
          <h3 className="my-10 text-2xl font-semibold lg:text-3xl">
            Board of Directors
          </h3>
          <hr className="w-4/6 mx-auto my-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="border-gray-300 border-dashed lg:border-r lg:pr-10">
            <h4 className="text-xl font-semibold">Chris McCabe</h4>
            <h5>Public Officer, Chair</h5>
            <p>
              Chris is a co-founder and the CEO of Oxen. He is responsible for
              leading the future vision of the project, devising and executing
              Oxen’s strategic direction, and managing day-to-day operation of
              the company.
            </p>
          </div>
          <div className="pt-5 border-gray-300 border-dashed lg:border-r lg:px-10 lg:pt-0">
            <h4 className="text-xl font-semibold">Lucinda Lovegrove</h4>
            <h5>Secretary</h5>
            <p>
              Lucinda has been working full-time on the Oxen Project since 2018.
              She currently works as a Product Manager for OPTF products—such as
              Session—and makes invaluable contributions to the project through
              her first-class analytical and collaborative problem solving
              skills.
            </p>
          </div>
          <div className="pt-5 lg:px-10 lg:pt-0">
            <h4 className="text-xl font-semibold">Simon Harman</h4>
            <p>
              Simon is a co-founder and the former CEO of Oxen — the OPTF’s
              first major project. Simon is a longstanding member of Australia’s
              blockchain community, and has a long history of blockchain
              innovation both with Oxen and his current project focus,
              Chainflip.
            </p>
          </div>
          <div className="mt-5 border-gray-300 border-dashed lg:border-r lg:pr-10 lg:mt-10">
            <h4 className="text-xl font-semibold">Jason Rhinelander</h4>
            <p>
              Jason has an extensive background in economics and computer
              science. He has merged these fields to conduct postgraduate level
              research focusing on the computational modelling of economic
              activity.
            </p>
            <p>
              His first involvement with Oxen came through his contributions as
              an open-source developer, and joined the Oxen development team
              full-time in mid-2019.
            </p>
          </div>
          <div className="mt-5 border-gray-300 border-dashed lg:border-r lg:px-10 lg:mt-10">
            <h4 className="text-xl font-semibold">Alexander Linton</h4>
            <p>
              Alexander first gained an appreciation and respect for digital
              privacy and decentralisation through his work as a journalist. For
              the last four years, he has been working full-time on OPTF
              projects across a range of research, communication, and advocacy
              roles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
