import Image from 'next/image';

const AboutOPTF = () => {
  return (
    <div>
      <h1 className="mb-5 text-2xl lg:text-4xl">
        You have a right to privacy.
      </h1>
      <p>
        Privacy is a human right. Everyone knows what privacy feels like — it
        feels comfortable, safe, and secure. When we are in private, we have the
        freedom to share ideas and be ourselves. In the physical world, we all
        take steps to protect our privacy every day. But privacy has fallen by
        the wayside in the digital world. If we want the internet to be a free,
        fair, and equal place for everyone, we must design, create, and share
        technology which preserves people’s privacy and enables them to
        experience the internet in a safe and secure way.{' '}
      </p>
      <br />
      <p>
        {' '}
        OPTF’s mission is to equip every digital citizen with technology which
        upholds their right to privacy. Whether you’re buying a coffee,
        messaging a friend, or simply browsing the internet, your privacy should
        always be protected. It shouldn’t have any strings attached — it should
        be provided by default, and it should be free.
      </p>
      <br />
      <p>
        One of the OPTF’s main development achievements is the private
        messenger, Session. Session is a free and open-source application which
        allows people to have completely private, secure, and anonymous
        conversations online. Session is a tool for protecting free speech
        including for journalists, activists, and other people working in civil
        society.
      </p>
      <br />
      <p>
        We are actively implementing technology projects that help us achieve
        our mission. These projects include:
      </p>
      <div className="flex flex-col pb-3 my-5 lg:flex-row lg:pb-7">
        <div className="my-5 border-r border-dashed lg:px-10 lg:pr-16 lg:my-0">
          <Image
            alt="session icon"
            src="/assets/images/session-logo-black.png"
            width={380}
            height={76}
          />
        </div>
        <div className="my-5 border-r border-dashed lg:px-10 lg:pr-16 lg:my-0">
          <Image
            alt="oxen icon"
            src="/assets/images/oxen-icon.png"
            width={380}
            height={76}
          />
        </div>
        <div className="my-5 lg:px-10 lg:pr-16 lg:my-0">
          <Image
            alt="lokinet icon"
            src="/assets/images/lokinet-icon.png"
            width={380}
            height={76}
          />
        </div>
      </div>
      <h1 className="mb-5 text-2xl lg:text-4xl">
        Our guiding principles are to:
      </h1>
      <div className="relative z-10 overflow-hidden text-lg text-gray-900 bg-gray-100 lg:mx-2 lg:text-xl">
        <h4 className="my-5 ml-3 lg:ml-10 lg:w-3/6">
          Build open-source, secure communications tools that are free and
          accessible.
        </h4>
        <div className="relative z-10 h-8 bg-white"></div>
        <h4 className="my-5 ml-3 lg:ml-10 lg:w-3/6">
          Produce educational resources to support people and organisations to
          better understand, use, and implement privacy technologies.
        </h4>
        <div className="relative z-10 h-8 bg-white"></div>
        <h4 className="my-5 ml-3 lg:ml-10 lg:w-3/6">
          Complete work which serves the interests of the public. Our work helps
          foster an open, accountable, and unified digital community.
        </h4>
        <div className="relative z-10 h-8 bg-white"></div>
        <h4 className="my-5 ml-3 lg:ml-10 lg:w-3/6">
          Collaborate with other organisations on work which upholds digital
          rights.
        </h4>
        <div className="relative z-10 h-8 bg-white"></div>
        <h4 className="my-5 ml-3 lg:ml-10 lg:w-3/6">
          Support, fund, and assist projects that align with our principles.
        </h4>

        <div className="z-10 box">
          <div className="wave1 -one"></div>
          <div className="wave1 -two"></div>
          <div className="wave1 -three"></div>
        </div>
      </div>
      <div className="my-20">
        <h3 className="my-10 text-2xl lg:text-3xl">Board of Directors</h3>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="border-gray-300 border-dashed lg:border-r lg:pr-10">
            <h4 className="text-xl font-semibold">Simon Harman</h4>
            <h5>Public Officer</h5>
            <p>
              Simon is a co-founder and the CEO of Oxen — the OPTF’s first major
              project. Since 2017, he has successfully driven the strategic
              direction of Oxen using his broad range of technical and project
              management expertise.
            </p>
          </div>
          <div className="pt-5 border-gray-300 border-dashed lg:border-r lg:px-10 lg:pt-0">
            <h4 className="text-xl font-semibold">Chris McCabe</h4>
            <h5>CEO</h5>
            <p>
              Chris is a co-founder and the COO of Oxen. He is responsible for
              managing Oxen’s daily operations, and has been integral in
              orchestrating Oxen’s scale-up from a startup of 4 to a bustling
              team of over 20.
            </p>
          </div>
          <div className="pt-5 lg:px-10 lg:pt-0">
            <h4 className="text-xl font-semibold"> Lucy Lovegrove</h4>
            <h5>Secretary</h5>
            <p>
              Chris is a co-founder and the COO of Oxen. He is responsible for
              managing Oxen’s daily operations, and has been integral in
              orchestrating Oxen’s scale-up from a startup of 4 to a bustling
              team of over 20.
            </p>
          </div>
          <div className="mt-5 border-gray-300 border-dashed lg:border-r lg:pr-10 lg:mt-10">
            <h4 className="text-xl font-semibold">John Pacific</h4>
            <h5>CEO</h5>
            <p>
              John is an entrepreneur, cypherpunk, and cryptography engineer
              specialising in privacy-preserving technology. He was a founding
              engineer at the NuCypher project, working on Proxy Re-encryption
              and Fully Homomorphic Encryption research.
            </p>
          </div>
          <div className="mt-5 border-gray-300 border-dashed lg:border-r lg:px-10 lg:mt-10">
            <h4 className="text-xl font-semibold">Jason Rhinelander</h4>
            <h5>Public Officer</h5>
            <p>
              Jason has an extensive background in economics and computer
              science. He has merged these fields to conduct postgraduate level
              research focusing on the computational modelling of economic
              activity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOPTF;
