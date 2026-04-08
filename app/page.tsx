function APGLogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c9a96a]/40 bg-gradient-to-br from-[#1a1a1a] to-black shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        <span className="ml-1 text-sm font-semibold tracking-[0.35em] text-[#d8bc84]">
          APG
        </span>
      </div>
      <div>
        <div className="text-sm font-semibold uppercase tracking-[0.35em] text-white/90">
          A.P.G Investments Ltd.
        </div>
        <div className="mt-1 text-xs uppercase tracking-[0.28em] text-[#c9a96a]">
          Private Investment Firm
        </div>
      </div>
    </div>
  );
}

export default function APGWebsite() {
  const thesis = [
    "Consumer brands",
    "Professional trade companies",
    "eCommerce and retail tech",
    "AI and digital platforms",
  ];

  const stats = [
    { label: "Typical Check", value: "$25K to $100K" },
    { label: "Stage", value: "Early and growth" },
    { label: "Approach", value: "Selective and operator led" },
  ];

  const credibility = [
    "Senior operator background across digital growth, eCommerce, and customer experience",
    "Practical value creation across acquisition, conversion, retention, and operating execution",
    "Focused on selective opportunities where strategic support can accelerate outcomes",
  ];

  const differentiators = [
    {
      title: "Operator perspective",
      text: "Hands on experience in digital growth, eCommerce, performance marketing, and scaling execution.",
    },
    {
      title: "Disciplined capital",
      text: "Selective investments where capital and strategy can meaningfully improve outcomes.",
    },
    {
      title: "Long term alignment",
      text: "Partnership driven approach focused on building durable, valuable businesses.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,169,106,0.16),transparent_24%),radial-gradient(circle_at_left,rgba(255,255,255,0.05),transparent_20%)]' />
        <div className="relative mx-auto max-w-7xl px-6 py-10">
          <header className="flex items-center justify-between">
            <APGLogoMark />
            <a
              href="#contact"
              className="rounded-full border border-[#c9a96a]/30 px-5 py-2 text-sm text-[#e3c995] transition hover:bg-[#c9a96a]/10"
            >
              Contact
            </a>
          </header>

          <div className="max-w-4xl py-20">
            <div className="mb-5 inline-flex rounded-full border border-[#c9a96a]/25 bg-[#c9a96a]/10 px-4 py-2 text-sm text-[#e3c995]">
              Private capital, strategic insight, and operator value
            </div>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Backing exceptional businesses with disciplined capital, premium
              judgment, and operator led advantage.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
              A.P.G Investments Ltd. backs select startups and growth
              businesses with private capital and hands on strategic support
              across consumer, trade, eCommerce, and digital sectors.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#c9a96a]/20 bg-white/[0.03] p-5"
                >
                  <div className="text-sm text-white/50">{item.label}</div>
                  <div className="mt-2 text-xl font-semibold text-white">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-[#c9a96a] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Submit Your Deck
              </a>
              <a
                href="#about"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Why A.P.G
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 text-sm uppercase tracking-[0.28em] text-[#c9a96a]">
          Investment Focus
        </div>
        <h2 className="mb-10 text-3xl font-semibold">
          Focused sectors where execution can create outsized value.
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {thesis.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="text-lg font-medium">{item}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <div className="text-sm uppercase tracking-[0.28em] text-[#c9a96a]">
              Why A.P.G
            </div>
            <h2 className="mt-4 text-3xl font-semibold">
              Operator experience with investor discipline.
            </h2>
            <div className="mt-6 space-y-4">
              {credibility.map((item) => (
                <div key={item} className="flex items-start gap-3 text-white/70">
                  <div className="mt-2 h-2 w-2 rounded-full bg-[#c9a96a]" />
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#c9a96a]/15 bg-gradient-to-br from-[#111111] to-[#050505] p-6"
              >
                <div className="text-sm uppercase tracking-[0.24em] text-[#c9a96a]">
                  Advantage
                </div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-[#c9a96a]">
              Contact
            </div>
            <h2 className="mt-4 text-3xl font-semibold">
              Ready to start a conversation?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
              Share a brief overview of your business, current traction, funding
              needs, and where you believe A.P.G can add value.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="text-sm text-white/50">Contact</div>
              <div className="mt-2 text-xl font-semibold">
                hello@apginvests.com
              </div>
              <div className="mt-2 text-white/50">Toronto, Canada</div>
            </div>
          </div>

          <form
            action="https://formsubmit.co/hello@apginvests.com"
            method="POST"
            className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6"
          >
            <input type="hidden" name="_subject" value="New inquiry from apginvests.com" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div>
              <label className="mb-2 block text-sm text-white/60">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/30"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/60">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/30"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/60">Company</label>
              <input
                type="text"
                name="company"
                placeholder="Company name"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/30"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/60">Message</label>
              <textarea
                name="message"
                placeholder="Tell us about your business, traction, and raise."
                required
                rows={5}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/30"
              />
            </div>

            <button className="w-full rounded-full bg-[#c9a96a] px-6 py-3 font-semibold text-black transition hover:opacity-90">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}