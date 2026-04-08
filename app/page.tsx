import { motion } from "framer-motion";

function APGLogoMark() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-[1.35rem] border border-[#b89b63]/55 bg-gradient-to-br from-[#f8f2e8] to-[#e8ddc9] shadow-[0_10px_30px_rgba(111,90,51,0.12)] sm:h-20 sm:w-20">
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

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
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
      <section className="relative overflow-hidden border-b border-[#d8c8aa]/60 bg-[linear-gradient(135deg,#fbfaf7_0%,#f3ede3_55%,#ede3d2_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,155,99,0.14),transparent_26%),radial-gradient(circle_at_left,rgba(255,255,255,0.55),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
          <header className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <APGLogoMark />
            <a
              href="#contact"
              className="rounded-full border border-[#cbb58a] bg-white/85 px-5 py-2.5 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-white"
            >
              Contact
            </a>
          </header>

          <div className="grid items-center gap-8 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.45 }}
              className="max-w-2xl"
            >
              <div className="mb-5 inline-flex rounded-full border border-[#d8c8aa] bg-white/70 px-4 py-2 text-sm text-[#7a6337] shadow-sm">
                Private capital, strategic insight, and long term operator value
              </div>

              <h1 className="text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] text-slate-900 sm:text-5xl lg:text-[4rem]">
                Backing strong businesses with capital and speed.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                We back businesses with strong fundamentals, real customer demand, and clear upside. Our focus is on companies where disciplined execution, smart capital, and faster decision making can unlock meaningful long term value and accelerate growth beyond what traditional investors enable.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#thesis"
                  className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(15,23,42,0.14)] transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  Our investment focus
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-[#cbb58a] bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Pitch your company
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.45, delay: 0.08 }}
              className="grid gap-4 lg:pl-4"
            >
              <div className="rounded-3xl border border-[#d7c7aa] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                <div className="text-sm text-slate-500">Check size</div>
                <div className="mt-2 text-xl font-semibold text-slate-900">$25K to $100K</div>
              </div>
              <div className="rounded-3xl border border-[#d7c7aa] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                <div className="text-sm text-slate-500">Stage</div>
                <div className="mt-2 text-xl font-semibold text-slate-900">Pre seed and seed</div>
              </div>
              <div className="rounded-3xl border border-[#d7c7aa] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                <div className="text-sm text-slate-500">Approach</div>
                <div className="mt-2 text-xl font-semibold text-slate-900">Fast and selective</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="thesis" className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:px-10">
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
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-4xl">
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
              className="rounded-3xl border border-[#d7c7aa] bg-white p-6 text-center shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5"
            >
              <div className="text-lg font-medium text-slate-900">{item}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#e2d6bf] bg-[#f3ede4]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mb-10"
          >
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b6f3d]">
              Why A.P.G
            </div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-4xl">
              Practical operators. Fast decisions. Aligned capital.
            </h2>
            <p className="mt-3 text-slate-600">
              We combine capital with real operating experience and move faster than traditional investors.
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
                className="rounded-3xl border border-[#d7c7aa] bg-white p-6 text-center shadow-[0_12px_32px_rgba(15,23,42,0.05)]"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
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
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-4xl">
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
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-4xl">
              Simple, quick, and founder friendly.
            </h2>

            <div className="mt-6 space-y-4">
              {process.map((item) => (
                <div key={item.step} className="rounded-2xl border border-[#d7c7aa] bg-[#fcfaf6] p-5">
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
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-4xl">
                Ready to start a conversation?
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Share a brief overview of your business, current traction, funding needs, and where you believe A.P.G can add value.
              </p>
            </div>

            <form
              action="https://formsubmit.co/hello@apginvests.com"
              method="POST"
              className="mt-8 w-full space-y-4 rounded-3xl border border-[#d7c7aa] bg-[#fcfaf6] p-6 shadow-sm lg:mt-0 lg:w-[460px]"
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
      </section>
    </div>
  );
}
