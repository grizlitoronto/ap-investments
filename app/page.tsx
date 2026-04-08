function APGLogoMark() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-[1.35rem] border border-[#b89b63]/60 bg-[linear-gradient(145deg,#fbf6ee_0%,#e9dec9_100%)] shadow-[0_10px_30px_rgba(111,90,51,0.12)] sm:h-20 sm:w-20">
        <div className="rounded-[1rem] border border-[#c8ab71]/35 bg-white/60 px-2.5 py-1.5">
          <span className="block text-[13px] font-semibold tracking-[0.38em] text-[#6f5a33] sm:text-[15px]">
            APG
          </span>
        </div>
      </div>
      <div>
        <div className="font-serif text-[1.1rem] font-semibold tracking-[0.14em] text-slate-900 sm:text-[1.32rem]">
          A.P.G Investments Ltd.
        </div>
        <div className="mt-1 text-[11px] uppercase tracking-[0.34em] text-[#8b6f3d] sm:text-xs">
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
      text: "Real experience scaling growth and improving operations.",
    },
    {
      title: "Fast execution",
      text: "We move quickly and avoid long processes.",
    },
    {
      title: "Aligned capital",
      text: "We invest selectively and think long term.",
    },
  ];

  const criteria = [
    "Check size from $25K to $100K",
    "Pre seed and seed stage",
    "Clear customer demand or traction",
    "Strong founders with speed and judgment",
    "Room to scale and improve",
  ];

  const credibility = [
    {
      stat: "Operator led",
      label: "Built for practical value creation, not passive capital",
    },
    {
      stat: "Fast decisions",
      label: "Lean process with quick evaluations and direct feedback",
    },
    {
      stat: "Selective",
      label: "A focused portfolio where time, capital, and attention matter",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f5ef] text-slate-900">
      <section className="border-b border-[#d8c8aa]/50">
        <div className="max-w-7xl mx-auto px-5 py-10">
          <header className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <APGLogoMark />
            <a
              href="#contact"
              className="rounded-full border border-[#cbb58a] bg-white px-5 py-2.5 text-sm font-medium tracking-[0.08em] text-slate-900 shadow-sm transition hover:bg-[#faf6ef]"
            >
              Contact
            </a>
          </header>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 mt-12 items-center">
            <div>
              <div className="inline-flex rounded-full border border-[#d8c8aa] bg-white/80 px-4 py-2 text-[12px] font-medium uppercase tracking-[0.28em] text-[#7a6337] shadow-sm">
                Private capital with operator discipline
              </div>
              <h1 className="mt-5 max-w-3xl font-serif text-[2.85rem] font-semibold leading-[0.98] tracking-[-0.03em] text-slate-900 sm:text-[4rem] lg:text-[4.7rem]">
                Backing strong businesses with capital and speed.
              </h1>

              <p className="mt-5 max-w-2xl text-[1.05rem] leading-8 text-slate-600 sm:text-[1.12rem]">
                We back businesses with strong fundamentals, real customer demand, and clear upside. Our focus is on companies where disciplined execution, smart capital, and faster decision making unlock meaningful long term value.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold tracking-[0.06em] text-white shadow-[0_10px_24px_rgba(15,23,42,0.14)] transition hover:opacity-95"
                >
                  Submit your company
                </a>
                <a
                  href="#credibility"
                  className="rounded-full border border-[#cbb58a] bg-white px-6 py-3 text-sm font-semibold tracking-[0.06em] text-slate-900 shadow-sm transition hover:bg-[#faf6ef]"
                >
                  Why A.P.G
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.6rem] border border-[#d7c7aa] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                <div className="text-sm uppercase tracking-[0.18em] text-slate-500">Check size</div>
                <div className="mt-2 text-2xl font-semibold text-slate-900">$25K to $100K</div>
              </div>
              <div className="rounded-[1.6rem] border border-[#d7c7aa] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                <div className="text-sm uppercase tracking-[0.18em] text-slate-500">Stage</div>
                <div className="mt-2 text-2xl font-semibold text-slate-900">Pre seed and seed</div>
              </div>
              <div className="rounded-[1.6rem] border border-[#d7c7aa] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                <div className="text-sm uppercase tracking-[0.18em] text-slate-500">Approach</div>
                <div className="mt-2 text-2xl font-semibold text-slate-900">Fast and selective</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="mb-12 grid gap-5 md:grid-cols-3">
          {credibility.map((item) => (
            <div
              key={item.stat}
              className="rounded-[1.6rem] border border-[#dfd3bf] bg-[#fcfaf6] p-6 shadow-[0_10px_26px_rgba(15,23,42,0.035)]"
            >
              <div className="font-serif text-[1.65rem] font-semibold tracking-[-0.02em] text-slate-900">
                {item.stat}
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-14 lg:grid-cols-2">
        <h2 className="text-2xl font-semibold mb-6">Investment focus</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {thesis.map((item) => (
            <div key={item} className="border rounded-xl p-5 text-center">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="credibility" className="bg-[#f3ede4] py-18 border-y border-[#e2d6bf]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-3xl mb-10">
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b6f3d]">
              Why A.P.G
            </div>
            <h2 className="mt-4 font-serif text-[2.2rem] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[2.8rem]">
              A practical investment partner with real operating context.
            </h2>
            <p className="mt-4 text-[1.02rem] leading-8 text-slate-600">
              Founders and business owners do not just need capital. They need clear thinking, quick decisions, and a partner who understands growth, execution, and operational leverage.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((item) => (
              <div key={item.title} className="rounded-[1.6rem] border border-[#d7c7aa] bg-white p-6 text-center shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
                <div className="text-lg font-semibold text-slate-900">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-16">
        <div>
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b6f3d]">
              What we look for
            </div>
            <h2 className="mt-4 font-serif text-[2.1rem] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[2.7rem]">
              Clear signals, strong operators, and room to scale.
            </h2>
        <div className="mt-6 space-y-3">
          {criteria.map((item) => (
            <div key={item} className="border p-4 rounded-xl">
              {item}
            </div>
          ))}
        </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b6f3d]">
              Process
            </div>
            <h2 className="mt-4 font-serif text-[2.1rem] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[2.7rem]">
              Simple, quick, and founder friendly.
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-[1.35rem] border border-[#d7c7aa] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                <div className="text-sm text-slate-500">01</div>
                <div className="mt-1 font-semibold text-slate-900">Intro</div>
                <p className="mt-1 text-sm leading-7 text-slate-600">
                  Send a short overview with traction and raise details.
                </p>
              </div>
              <div className="rounded-[1.35rem] border border-[#d7c7aa] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                <div className="text-sm text-slate-500">02</div>
                <div className="mt-1 font-semibold text-slate-900">Review</div>
                <p className="mt-1 text-sm leading-7 text-slate-600">
                  We evaluate quickly and focus on where we can add value.
                </p>
              </div>
              <div className="rounded-[1.35rem] border border-[#d7c7aa] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                <div className="text-sm text-slate-500">03</div>
                <div className="mt-1 font-semibold text-slate-900">Decision</div>
                <p className="mt-1 text-sm leading-7 text-slate-600">
                  If aligned, we move fast into diligence and close.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b6f3d]">
            Contact
          </div>
          <h2 className="mt-4 font-serif text-[2.1rem] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[2.7rem]">
            Ready to start a conversation?
          </h2>
          <p className="mt-4 max-w-2xl text-[1.02rem] leading-8 text-slate-600">
            Share a brief overview of your business, current traction, funding needs, and where you believe A.P.G can add value.
          </p>

          <form action="https://formsubmit.co/hello@apginvests.com" method="POST" className="space-y-4 max-w-md">
            <input type="text" name="name" placeholder="Name" className="w-full border p-3 rounded" required />
            <input type="email" name="email" placeholder="Email" className="w-full border p-3 rounded" required />
            <textarea name="message" placeholder="Message" className="w-full border p-3 rounded" required />

            <button className="bg-black text-white px-6 py-3 rounded">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
