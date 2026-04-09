"use client";

import { motion } from "framer-motion";

function APGLogoMark() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative flex h-16 w-16 items-center justify-center rounded-[1.35rem] border border-[#b89b63]/60 bg-[linear-gradient(145deg,#fbf6ee_0%,#e9dec9_100%)] shadow-[0_12px_32px_rgba(111,90,51,0.14)] sm:h-20 sm:w-20">
        <svg
          viewBox="0 0 64 64"
          className="h-11 w-11 sm:h-14 sm:w-14"
          aria-hidden="true"
        >
          <rect x="7" y="7" width="50" height="50" rx="14" fill="rgba(255,255,255,0.55)" stroke="rgba(184,155,99,0.45)" />
          <path d="M19 42V22h8.2c5.4 0 8.5 2.7 8.5 7.1 0 4.6-3.4 7.3-8.8 7.3h-4.1V42H19Zm3.8-8.7h3.8c3.1 0 5-1.4 5-4.1 0-2.5-1.7-4-4.8-4h-4V33.3Z" fill="#6f5a33" />
          <path d="M36.8 42V22h4.2l7.6 12.7c.8 1.3 1.4 2.6 1.4 2.6h.1s-.2-1.6-.2-3.5V22h3.7v20h-4.2l-7.6-12.7c-.8-1.3-1.4-2.6-1.4-2.6h-.1s.2 1.6.2 3.5V42h-3.7Z" fill="#6f5a33" opacity="0.9" />
        </svg>
      </div>
      <div>
        <div className="font-serif text-[1.08rem] font-semibold tracking-[0.14em] text-slate-900 sm:text-[1.3rem]">
          A.P.G Investments Ltd.
        </div>
        <div className="mt-1 text-[11px] uppercase tracking-[0.34em] text-[#8b6f3d] sm:text-xs">
          Private Investment Firm
        </div>
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

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
      title: "Operator led",
      text: "A.P.G brings practical experience across growth, digital execution, and operating discipline.",
    },
    {
      title: "Fast decisions",
      text: "We move quickly, communicate directly, and avoid the drawn out process many founders face elsewhere.",
    },
    {
      title: "Selective capital",
      text: "We back a focused number of businesses where conviction, time, and support can matter.",
    },
  ];

  const credibility = [
    {
      stat: "Practical value creation",
      label: "Growth, conversion, operating leverage, and strategic execution.",
    },
    {
      stat: "Direct access",
      label: "No layers, no unnecessary process, and no institutional theater.",
    },
    {
      stat: "Long term mindset",
      label: "Built for durable value, not just quick optics or passive ownership.",
    },
  ];

  const criteria = [
    "Check size from $25K to $100K",
    "Pre seed and seed stage",
    "Clear customer demand or commercial traction",
    "Founders with speed, judgment, and resilience",
    "Businesses where growth, operational improvement, or expansion can unlock value",
  ];

  const process = [
    {
      step: "01",
      title: "Initial review",
      text: "Send a concise overview, traction snapshot, and raise details.",
    },
    {
      step: "02",
      title: "Focused diligence",
      text: "We assess fundamentals quickly and concentrate on where we can genuinely help.",
    },
    {
      step: "03",
      title: "Fast decision",
      text: "If conviction is there, we move efficiently and keep the process clear.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f5ef] text-slate-900">
      <section className="relative overflow-hidden border-b border-[#d8c8aa]/60 bg-[linear-gradient(135deg,#fbfaf7_0%,#f3ede3_55%,#ede3d2_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,155,99,0.14),transparent_26%),radial-gradient(circle_at_left,rgba(255,255,255,0.55),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
          <header className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <APGLogoMark />
            <a
              href="#contact"
              className="rounded-full border border-[#cbb58a] bg-white px-5 py-2.5 text-sm font-medium tracking-[0.08em] text-slate-900 shadow-sm transition hover:bg-[#faf6ef]"
            >
              Contact
            </a>
          </header>

          <div className="grid items-center gap-10 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:py-18">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.45 }}
              className="max-w-3xl"
            >
              <div className="inline-flex rounded-full border border-[#d8c8aa] bg-white/80 px-4 py-2 text-[12px] font-medium uppercase tracking-[0.28em] text-[#7a6337] shadow-sm">
                Private capital with operator discipline
              </div>

              <h1 className="mt-5 max-w-4xl font-serif text-[2.85rem] font-semibold leading-[0.98] tracking-[-0.03em] text-slate-900 sm:text-[4rem] lg:text-[4.7rem]">
                Backing strong businesses with capital and speed.
              </h1>

              <p className="mt-5 max-w-2xl text-[1.05rem] leading-8 text-slate-600 sm:text-[1.12rem]">
                We back businesses with strong fundamentals, real customer demand, and clear upside. Our focus is on companies where disciplined execution, smart capital, and faster decision making unlock meaningful long term value.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold tracking-[0.06em] text-white shadow-[0_10px_24px_rgba(15,23,42,0.14)] transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  Submit your company
                </a>
                <a
                  href="#credibility"
                  className="rounded-full border border-[#cbb58a] bg-white px-6 py-3 text-sm font-semibold tracking-[0.06em] text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-[#faf6ef]"
                >
                  Why A.P.G
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.45, delay: 0.08 }}
              className="grid gap-4"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      <section id="thesis" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b6f3d]">
            Investment focus
          </div>
          <h2 className="mt-4 font-serif text-[2.2rem] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[2.9rem]">
            Sectors where execution and discipline compound value.
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {thesis.map((item, index) => (
            <motion.div
              key={item}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="rounded-[1.6rem] border border-[#d7c7aa] bg-white p-6 text-center shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5"
            >
              <div className="text-lg font-medium text-slate-900">{item}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="credibility" className="border-y border-[#e2d6bf] bg-[#f3ede4] py-18">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mb-10"
          >
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b6f3d]">
              Why A.P.G
            </div>
            <h2 className="mt-4 font-serif text-[2.2rem] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[2.8rem]">
              A practical investment partner with real operating context.
            </h2>
            <p className="mt-4 text-[1.02rem] leading-8 text-slate-600">
              Founders and business owners do not just need capital. They need clear thinking, quick decisions, and a partner who understands growth, execution, and operational leverage.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-[1.6rem] border border-[#d7c7aa] bg-white p-6 text-center shadow-[0_12px_32px_rgba(15,23,42,0.05)]"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="mb-12 grid gap-5 md:grid-cols-3">
          {credibility.map((item, index) => (
            <motion.div
              key={item.stat}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-[1.6rem] border border-[#dfd3bf] bg-[#fcfaf6] p-6 shadow-[0_10px_26px_rgba(15,23,42,0.035)]"
            >
              <div className="font-serif text-[1.65rem] font-semibold tracking-[-0.02em] text-slate-900">
                {item.stat}
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-14 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="rounded-[2rem] border border-[#e2d6bf] bg-[#fcfaf6] p-8 shadow-[0_14px_34px_rgba(15,23,42,0.04)]"
          >
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b6f3d]">
              What we look for
            </div>
            <h2 className="mt-4 font-serif text-[2.1rem] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[2.7rem]">
              Clear signals, strong operators, and room to scale.
            </h2>

            <div className="mt-6 space-y-3">
              {criteria.map((item) => (
                <div key={item} className="rounded-2xl border border-[#d7c7aa] bg-white p-4 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="rounded-[2rem] border border-[#e2d6bf] bg-white p-8 shadow-[0_14px_34px_rgba(15,23,42,0.04)]"
          >
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b6f3d]">
              Process
            </div>
            <h2 className="mt-4 font-serif text-[2.1rem] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[2.7rem]">
              Simple, quick, and founder friendly.
            </h2>

            <div className="mt-6 space-y-4">
              {process.map((item) => (
                <div key={item.step} className="rounded-[1.35rem] border border-[#d7c7aa] bg-[#fcfaf6] p-5">
                  <div className="text-sm text-slate-500">{item.step}</div>
                  <div className="mt-1 font-semibold text-slate-900">{item.title}</div>
                  <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="border-t border-[#d7c7aa] bg-[#fbfaf7]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] border border-[#d7c7aa] bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-10 lg:flex lg:items-start lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b6f3d]">
                Contact
              </div>
              <h2 className="mt-4 font-serif text-[2.1rem] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[2.7rem]">
                Ready to start a conversation?
              </h2>
              <p className="mt-4 max-w-2xl text-[1.02rem] leading-8 text-slate-600">
                Share a brief overview of your business, current traction, funding needs, and where you believe A.P.G can add value.
              </p>
            </div>

            <form
              action="https://formsubmit.co/hello@apginvests.com"
              method="POST"
              className="mt-8 w-full space-y-4 rounded-[1.75rem] border border-[#d7c7aa] bg-[#fcfaf6] p-6 shadow-sm lg:mt-0 lg:w-[500px]"
            >
              <input type="hidden" name="_subject" value="New inquiry from apginvests.com" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid gap-4 sm:grid-cols-2">
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
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
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
                  <label className="mb-2 block text-sm text-slate-500">Website</label>
                  <input
                    type="url"
                    name="website"
                    className="w-full rounded-2xl border border-[#d2c3a4] bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400"
                    placeholder="https://yourcompany.com"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-slate-500">Revenue</label>
                  <input
                    type="text"
                    name="revenue"
                    className="w-full rounded-2xl border border-[#d2c3a4] bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400"
                    placeholder="e.g. Pre revenue or $500K ARR"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-500">Raise amount</label>
                  <input
                    type="text"
                    name="raise_amount"
                    className="w-full rounded-2xl border border-[#d2c3a4] bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400"
                    placeholder="e.g. $250K"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-500">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-2xl border border-[#d2c3a4] bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400"
                  placeholder="Tell us about your business, traction, and why A.P.G is a fit."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold tracking-[0.06em] text-white transition hover:opacity-95"
              >
                Submit inquiry
              </button>

              <div className="pt-2 text-sm text-slate-500">
                Contact: hello@apginvests.com • Toronto, Canada
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
