function APGLogoMark() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-[1.35rem] border border-[#b89b63]/55 bg-gradient-to-br from-[#f8f2e8] to-[#e8ddc9] shadow-[0_8px_24px_rgba(111,90,51,0.12)] sm:h-20 sm:w-20">
        <span className="ml-1 text-base font-semibold tracking-[0.38em] text-[#6f5a33] sm:text-lg">
          APG
        </span>
      </div>
      <div>
        <div className="text-base font-semibold uppercase tracking-[0.26em] text-slate-900 sm:text-lg">
          A.P.G Investments Ltd.
        </div>
        <div className="mt-1 text-xs uppercase tracking-[0.3em] text-[#8b6f3d] sm:text-[13px]">
          Private Investment Firm
        </div>
      </div>
    </div>
  );
}

export default function APInvestmentsWebsite() {
  const thesis = [
    "Consumer brands",
    "Home services businesses",
    "eCommerce and retail tech",
    "AI tools and digital platforms",
    "Healthcare services",
    "Logistics and distribution",
  ];

  const values = [
    {
      title: "Operator advantage",
      text: "Hands on experience in scaling growth, improving conversion, and building efficient operations.",
    },
    {
      title: "Fast execution",
      text: "We move quickly on decisions and avoid long drawn out processes.",
    },
    {
      title: "Aligned capital",
      text: "We invest selectively and partner long term with founders we believe in.",
    },
  ];

  const criteria = [
    "Check size from $25K to $100K",
    "Pre seed and seed stage",
    "Clear customer demand or early traction",
    "Founders with speed, resilience, and strong market insight",
    "Businesses where digital growth, operational improvement, or expansion can unlock value",
  ];

  const process = [
    {
      step: "01",
      title: "Intro",
      text: "Send a short overview with traction and raise details.",
    },
    {
      step: "02",
      title: "Review",
      text: "We evaluate quickly and focus on where we can add value.",
    },
    {
      step: "03",
      title: "Decision",
      text: "If aligned, we move fast into diligence and close.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f5ef] text-slate-900">
      <section className="border-b border-[#d8c8aa]/50 bg-[linear-gradient(135deg,#fbfaf7_0%,#f3ede3_55%,#ede3d2_100%)]">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <header className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
            <APGLogoMark />
            <a href="#contact" className="rounded-full border border-[#cbb58a] bg-white px-5 py-2 text-sm">
              Contact
            </a>
          </header>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] mt-10">
            <div className="max-w-2xl">
              <h1 className="text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
                Backing strong businesses with capital and speed.
              </h1>

              <p className="mt-5 text-base text-slate-600">
                We invest in companies where execution, growth, and operational discipline drive real value.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-[#d7c7aa] bg-white p-5">
                <div className="text-sm text-slate-500">Check size</div>
                <div className="text-xl font-semibold">$25K to $100K</div>
              </div>
              <div className="rounded-3xl border border-[#d7c7aa] bg-white p-5">
                <div className="text-sm text-slate-500">Stage</div>
                <div className="text-xl font-semibold">Pre seed and seed</div>
              </div>
              <div className="rounded-3xl border border-[#d7c7aa] bg-white p-5">
                <div className="text-sm text-slate-500">Approach</div>
                <div className="text-xl font-semibold">Fast and selective</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-16">
        <h2 className="text-3xl font-semibold mb-8">Investment focus</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {thesis.map((item) => (
            <div key={item} className="rounded-3xl border border-[#d7c7aa] bg-white p-6 text-center">
              <div className="text-lg font-medium">{item}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#e2d6bf] bg-[#f3ede4]">
        <div className="max-w-7xl mx-auto px-5 py-16">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl font-semibold">Why A.P.G</h2>
            <p className="text-slate-600 mt-3">
              We combine capital with real operating experience and move faster than traditional investors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {values.map((item) => (
              <div key={item.title} className="rounded-3xl border border-[#d7c7aa] bg-white p-6 text-center">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold">What we look for</h2>

            <div className="mt-6 space-y-3">
              {criteria.map((item) => (
                <div key={item} className="border border-[#d7c7aa] bg-white p-4 rounded-2xl">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">Process</h2>

            <div className="mt-6 space-y-4">
              {process.map((item) => (
                <div key={item.step} className="border border-[#d7c7aa] bg-white p-5 rounded-2xl">
                  <div className="text-sm text-slate-500">{item.step}</div>
                  <div className="font-semibold">{item.title}</div>
                  <p className="text-sm text-slate-600 mt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
