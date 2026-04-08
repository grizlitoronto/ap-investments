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
    "Professional trade companies",
    "eCommerce and retail tech",
    "AI tools and digital platforms",
  ];

  const values = [
    {
      title: "Capital with conviction",
      text: "We write focused early stage checks and move quickly when there is a strong founder fit.",
    },
    {
      title: "Operator led support",
      text: "Beyond capital, we help founders sharpen growth, customer acquisition, digital experience, and scaling execution.",
    },
    {
      title: "Selective by design",
      text: "We back a small number of companies where our network and operating experience can materially help.",
    },
  ];

  const differentiators = [
    {
      title: "Operator perspective",
      text: "We bring hands on experience across digital growth, eCommerce, performance marketing, customer experience, and execution at scale.",
    },
    {
      title: "Disciplined deployment",
      text: "We are selective with capital and prefer opportunities where thoughtful support can materially improve outcomes.",
    },
    {
      title: "Long term alignment",
      text: "We back founders and business owners with a partnership mindset, not a transactional approach.",
    },
  ];

  const criteria = [
    "Check size from $25K to $100K",
    "Pre seed and seed stage",
    "Clear customer demand or early traction",
    "Founders with speed, resilience, and strong market insight",
    "Businesses where digital growth, operational improvement, or market expansion can unlock outsized value",
  ];

  const process = [
    {
      step: "01",
      title: "Intro",
      text: "Send a short deck and a concise note on the business, traction, raise, and why A.P.G is a fit.",
    },
    {
      step: "02",
      title: "Review",
      text: "We assess founder strength, market potential, traction signals, and where we can add value beyond capital.",
    },
    {
      step: "03",
      title: "Decision",
      text: "If there is alignment, we move into diligence and can structure an investment through a SAFE or similar early stage vehicle.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f5ef] text-slate-900">
      <section className="relative overflow-hidden border-b border-[#d8c8aa]/50 bg-[linear-gradient(135deg,#fbfaf7_0%,#f3ede3_55%,#ede3d2_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,155,99,0.16),transparent_26%),radial-gradient(circle_at_left,rgba(255,255,255,0.55),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-10">
          <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <APGLogoMark />
            <a
              href="#contact"
              className="rounded-full border border-[#cbb58a] bg-white/80 px-5 py-2 text-sm font-medium text-slate-900 transition hover:bg-white"
            >
              Contact
            </a>
          </header>

          <div className="grid items-start gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex rounded-full border border-[#d8c8aa] bg-white/70 px-4 py-2 text-sm text-[#7a6337] shadow-sm">
                Private capital, strategic insight, and long term operator value
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.06] tracking-[-0.025em] text-slate-900 sm:text-5xl lg:text-[3.6rem]">
                Backing exceptional businesses with disciplined capital, sound judgment, and operator led advantage.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                A.P.G Investments Ltd. backs select startups and growth stage businesses with private capital and hands on strategic support. We focus on companies where disciplined execution, commercial traction, digital growth, and operational excellence can create meaningful long term value.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#thesis"
                  className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  Our investment focus
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-[#cbb58a] bg-white/60 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white"
                >
                  Pitch your company
                </a>
              </div>
            </div>

            <div className="grid gap-4 self-end">
              <div className="rounded-3xl border border-[#d7c7aa] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                <div className="text-sm text-slate-500">Typical check size</div>
                <div className="mt-2 text-2xl font-semibold text-slate-900">$25K to $100K</div>
              </div>
              <div className="rounded-3xl border border-[#d7c7aa] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                <div className="text-sm text-slate-500">Stage</div>
                <div className="mt-2 text-2xl font-semibold text-slate-900">Pre seed and seed</div>
              </div>
              <div className="rounded-3xl border border-[#d7c7aa] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                <div className="text-sm text-slate-500">Approach</div>
                <div className="mt-2 text-2xl font-semibold text-slate-900">Selective and operator led</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="thesis" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b6f3d]">
              Investment thesis
            </div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-4xl">
              Focused sectors where execution matters.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              We are most interested in opportunities where capital, digital growth strategy, and strong operating discipline can accelerate the business across consumer, trade, and digital sectors.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {thesis.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-[#d7c7aa] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
              >
                <div className="text-lg font-medium text-slate-900">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d7c7aa] bg-[#f3ede4]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="mb-10 max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b6f3d]">
              Why founders work with us
            </div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-4xl">
              More than capital.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#d7c7aa] bg-white p-7 shadow-[0_12px_32px_rgba(15,23,42,0.05)]"
              >
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="mb-16 grid gap-5 md:grid-cols-3">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[#d7c7aa] bg-[linear-gradient(180deg,#fffdf9_0%,#f7f1e7_100%)] p-7 shadow-[0_12px_32px_rgba(15,23,42,0.05)]"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8b6f3d]">
                Why A.P.G
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-slate-900">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b6f3d]">
              What we look for
            </div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-4xl">
              Clear founder quality and clear upside.
            </h2>
            <div className="mt-8 space-y-4">
              {criteria.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-[#d7c7aa] bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.03)]"
                >
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#8b6f3d]" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b6f3d]">
              Process
            </div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-4xl">
              Simple and founder friendly.
            </h2>
            <div className="mt-8 space-y-5">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="rounded-3xl border border-[#d7c7aa] bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.04)]"
                >
                  <div className="text-sm text-slate-500">{item.step}</div>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-[#d7c7aa] bg-[#fbfaf7]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] border border-[#d7c7aa] bg-white p-6 shadow-sm sm:p-10 lg:flex lg:items-start lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b6f3d]">
                Contact
              </div>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-4xl">
                Ready to start a conversation?
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Share a brief overview of your business, current traction, funding needs, and where you believe A.P.G can add value. We review opportunities selectively and focus on companies where our capital and operating experience can make a real difference.
              </p>
            </div>

            <div className="mt-8 w-full lg:mt-0 lg:w-[460px]">
              <form
                action="https://formsubmit.co/hello@apginvests.com"
                method="POST"
                className="space-y-4 rounded-3xl border border-[#d7c7aa] bg-[#fcfaf6] p-6 shadow-sm"
              >
                <input type="hidden" name="_subject" value="New inquiry from apginvests.com" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label className="mb-2 block text-sm text-slate-500">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-2xl border border-[#d2c3a4] bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-500">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-2xl border border-[#d2c3a4] bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-500">Company</label>
                  <input
                    type="text"
                    name="company"
                    className="w-full rounded-2xl border border-[#d2c3a4] bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-500">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-2xl border border-[#d2c3a4] bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400"
                    placeholder="Tell us about your business, traction, and raise."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  Submit inquiry
                </button>

                <div className="pt-2 text-sm text-slate-500">
                  Contact: hello@apginvests.com • Toronto, Canada
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}