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
      text: "Send a short deck and a concise note on the business, traction, raise, and why A&P is a fit.",
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
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_left,rgba(255,255,255,0.07),transparent_22%)]' />
        <div className="relative mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-white/60">
                A&P Investments
              </div>
              <div className="mt-2 text-sm text-white/70">
                Early stage private investment firm
              </div>
            </div>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white px-5 py-2 text-sm font-medium text-neutral-950 transition hover:scale-[1.02]"
            >
              Contact
            </a>
          </header>

          <div className="grid gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-white/75">
                Backing founders with capital and operator insight
              </div>
              <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Investing in early stage companies with practical growth upside.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                A&P Investments backs select startups and growing businesses with
                private capital and hands on strategic support. We focus on
                companies where strong execution, digital growth, customer
                traction, and operational discipline can create meaningful long
                term value.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#thesis"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:scale-[1.02]"
                >
                  Our investment focus
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  Pitch your company
                </a>
              </div>
            </div>

            <div className="grid gap-4 self-end">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="text-sm text-white/60">Typical check size</div>
                <div className="mt-2 text-3xl font-semibold">$25K to $100K</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="text-sm text-white/60">Stage</div>
                <div className="mt-2 text-3xl font-semibold">
                  Pre seed and seed
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="text-sm text-white/60">Approach</div>
                <div className="mt-2 text-3xl font-semibold">
                  Selective and operator led
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="thesis" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-white/45">
              Investment thesis
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Focused sectors where execution matters.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
              We are most interested in opportunities where capital, digital
              growth strategy, and strong operating discipline can accelerate the
              business across consumer, trade, and digital sectors.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {thesis.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="text-lg font-medium">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="mb-10 max-w-2xl">
            <div className="text-sm uppercase tracking-[0.3em] text-white/45">
              Why founders work with us
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              More than capital.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-neutral-950 p-7 shadow-2xl shadow-black/20"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-white/45">
              What we look for
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Clear founder quality and clear upside.
            </h2>
            <div className="mt-8 space-y-4">
              {criteria.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-white" />
                  <p className="text-white/75">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-white/45">
              Process
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Simple and founder friendly.
            </h2>
            <div className="mt-8 space-y-5">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="text-sm text-white/45">{item.step}</div>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10 lg:flex lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.3em] text-white/45">
                Contact
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Building something exceptional?
              </h2>
              <p className="mt-5 text-base leading-7 text-white/70">
                Send your deck, a short company overview, current traction, and
                target raise. We review opportunities selectively and prioritize
                companies where we can add meaningful value.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:text-right">
              <div className="text-sm text-white/50">Email</div>
              <a
                href="mailto:hello@apinvestments.com"
                className="mt-2 block text-2xl font-semibold tracking-tight"
              >
                hello@apinvestments.com
              </a>
              <div className="mt-3 text-sm text-white/50">
                Toronto, Canada
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}