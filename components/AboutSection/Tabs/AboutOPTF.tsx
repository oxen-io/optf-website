export default function AboutOPTF() {
  return (
    <div>
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
            <p>Chris is a co-founder of Session.</p>
          </div>
          <div className="pt-5 border-gray-300 border-dashed lg:border-r lg:px-10 lg:pt-0">
            <h4 className="text-xl font-semibold">Lucinda Lovegrove</h4>
            <h5>Secretary</h5>
            <p>
              Lucinda is Head of Product at Rangeproof, a contributor to
              Session.
            </p>
          </div>
          <div className="pt-5 lg:px-10 lg:pt-0">
            <h4 className="text-xl font-semibold">Simon Harman</h4>
            <p>
              Simon is a co-founder of Session and current CEO of Chainflip.
            </p>
          </div>
          <div className="mt-5 border-gray-300 border-dashed lg:border-r lg:pr-10 lg:mt-10">
            <h4 className="text-xl font-semibold">Jason Rhinelander</h4>
            <p>
              Jason is Chief Software Architect and Board Member at the Session
              Technology Foundation.
            </p>
          </div>
          <div className="mt-5 border-gray-300 border-dashed lg:border-r lg:px-10 lg:mt-10">
            <h4 className="text-xl font-semibold">Alexander Linton</h4>
            <p>Alexander is President at the Session Technology Foundation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
