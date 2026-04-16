"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

export default function APInvestmentsWebsite() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      access_key: "9c07c94c-7788-41ed-8a02-f5e9dbe31225",
      subject: "New inquiry from apginvests.com",
      from_name: "A.P.G Investments Ltd.",
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      website: formData.get("website"),
      revenue: formData.get("revenue"),
      raise_amount: formData.get("raise_amount"),
      support_type: formData.get("support_type"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("Thanks. Your submission was sent.");
        form.reset();
      } else {
        setStatus(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

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
      text: "The principal behind A.P.G has spent over a decade building and leading digital and eCommerce businesses — owning P&Ls, running product and engineering orgs, and turning digital divisions from loss-making to profitable.",
    },
    {
      title: "Fast decisions",
      text: "We move quickly, communicate directly, and avoid the drawn out process many founders face elsewhere.",
    },
    {
      title: "Selective capital",
      text: "We back a focused number of businesses where conviction, time, and support can matter.",
    },
    {
      title: "Digital & AI edge",
      text: "We help portfolio companies implement the tools and workflows that drive real operating leverage — eCommerce performance, AI automation, digital marketing infrastructure, and data foundations.",
    },
  ];

  const credibility = [
    {
      stat: "10+ years",
      label: "Operating digital and eCommerce businesses at VP level and above.",
    },
    {
      stat: "P&L owner",
      label: "Track record turning digital divisions from losses to profitability.",
    },
    {
      stat: "Capital + ops",
      label: "One of the few investors who can deploy capital and improve how you run the business.",
    },
  ];

  const criteria = [
    "Check size from $25K to $100K",
    "Pre seed and seed stage",
    "Clear customer demand or commercial traction",
    "Founders with speed, judgment, and resilience",
    "Businesses where growth, operational improvement, or expansion can unlock value",
    "Openness to working closely — not just taking capital",
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
        <div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-10">
          <header className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center">
              <img
                src="/apg-final-logo.svg"
                alt="A.P.G Investments Ltd."
                className="h-20 w-auto sm:h-24"
              />
            </div>

            <nav className="flex flex-wrap items-center gap-3 text-sm font-medium tracking-[0.08em] text-slate-700">
              <a
                href="#offer"
                className="rounded-full px-4 py-2 transition hover:bg-white/70"
              >
                What we offer
              </a>
              <a
                href="#thesis"
                className="rounded-full px-4 py-2 transition hover:bg-white/70"
              >
                Focus
              </a>
              <a
                href="#credibility"
                className="rounded-full px-4 py-2 transition hover:bg-white/70"
              >
                Why A.P.G
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[#cbb58a] bg-white px-5 py-2.5 text-slate-900 shadow-sm transition hover:bg-[#faf6ef]"
              >
                Contact
              </a>
            </nav>
          </header>

          <div className="grid items-center gap-10 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:py-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.45 }}
              className="max-w-3xl"
            >
              <div className="inline-flex rounded-full border border-[#d8c8aa] bg-white/80 px-4 py-2 text-[12px] font-medium uppercase tracking-[0.28em] text-[#7a6337] shadow-sm">
                Pre-seed &amp; seed · $25K–$100K · Toronto
              </div>

              <h1 className="mt-5 max-w-4xl font-serif text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.03em] text-slate-900 sm:text-[3.6rem] lg:text-[4.15rem]">
                Capital and digital execution for businesses built to last.
              </h1>

              <p className="mt-5 max-w-2xl text-[1.05rem] leading-8 text-slate-600 sm:text-[1.1rem]">
                We back high-potential businesses with two things most investors can't offer together: decisive capital and hands-on digital and AI operational support. Strong fundamentals, real demand, and room to scale — that's what we look for.
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
                <div className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  Check size
                </div>
                <div className="mt-2 text-2xl font-semibold text-slate-900">
                  $25K to $100K
                </div>
              </div>
              <div className="rounded-[1.6rem] border border-[#d7c7aa] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                <div className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  Stage
                </div>
                <div className="mt-2 text-2xl font-semibold text-slate-900">
                  Pre seed and seed
                </div>
              </div>
              <div className="rounded-[1.6rem] border border-[#d7c7aa] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                <div className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  Approach
                </div>
                <div className="mt-2 text-2xl font-semibold text-slate-900">
                  Fast and selective
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="offer" className="border-y border-[#e2d6bf] bg-[#f3ede4] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mb-10 max-w-3xl"
        >
          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b6f3d]">
            What we offer
          </div>
          <h2 className="mt-4 font-serif text-[2.2rem] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[2.9rem]">
            Two levers, not one.
          </h2>
          <p className="mt-4 text-[1.02rem] leading-8 text-slate-600">
            Most investors write a cheque and send a quarterly update request. We bring capital and the operational knowledge to help you grow faster once it's deployed.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="rounded-[2rem] border border-[#d7c7aa] bg-white p-8 shadow-[0_14px_34px_rgba(15,23,42,0.04)]"
          >
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b6f3d]">Capital</div>
            <h3 className="mt-3 font-serif text-[1.6rem] font-semibold leading-tight tracking-[-0.02em] text-slate-900">
              Decisive capital at pre-seed and seed.
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Check sizes from $25K to $100K. We move quickly, communicate directly, and don't run drawn-out processes. If conviction is there, you'll know fast.
            </p>
            <div className="mt-5 space-y-2">
              {["$25K – $100K per investment", "Pre-seed and seed stage", "Fast diligence, clear terms"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="text-[#b89b5e]">→</span>{item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.06 }}
            className="rounded-[2rem] border border-[#cbb58a] bg-[#fdfaf5] p-8 shadow-[0_14px_34px_rgba(15,23,42,0.04)]"
          >
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b6f3d]">Digital & AI support</div>
            <h3 className="mt-3 font-serif text-[1.6rem] font-semibold leading-tight tracking-[-0.02em] text-slate-900">
              Operational improvement beyond the cheque.
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We help portfolio businesses improve how they operate — from conversion and eCommerce performance to AI workflow automation, data infrastructure, and digital marketing execution.
            </p>
            <div className="mt-5 space-y-2">
              {[
                "eCommerce & conversion optimization",
                "AI tools and workflow automation",
                "Digital marketing and growth infrastructure",
                "Data and analytics foundations",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="text-[#b89b5e]">→</span>{item}
                </div>
              ))}
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
              Operator experience, not just operator vocabulary.
            </h2>
            <p className="mt-4 text-[1.02rem] leading-8 text-slate-600">
              Founders don't just need capital. They need quick conviction, direct access, and a partner who has actually built and scaled businesses — and can help digitally transform what they're building. We bring all of that from the first conversation.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
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
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
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
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {item.label}
              </p>
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
                <div
                  key={item}
                  className="rounded-2xl border border-[#d7c7aa] bg-white p-4 text-slate-700"
                >
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
                <div
                  key={item.step}
                  className="rounded-[1.35rem] border border-[#d7c7aa] bg-[#fcfaf6] p-5"
                >
                  <div className="text-sm text-slate-500">{item.step}</div>
                  <div className="mt-1 font-semibold text-slate-900">
                    {item.title}
                  </div>
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
                Share a brief overview of your business, current traction, funding needs, and why A.P.G is the right fit. We review opportunities selectively and prioritize situations where speed, clarity, and practical support matter.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 w-full space-y-4 rounded-[1.75rem] border border-[#d7c7aa] bg-[#fcfaf6] p-6 shadow-sm lg:mt-0 lg:w-[500px]"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-slate-500">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-2xl border border-[#d2c3a4] bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-500">
                    Email
                  </label>
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
                  <label className="mb-2 block text-sm text-slate-500">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full rounded-2xl border border-[#d2c3a4] bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-500">
                    Website
                  </label>
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
                  <label className="mb-2 block text-sm text-slate-500">
                    Revenue
                  </label>
                  <input
                    type="text"
                    name="revenue"
                    className="w-full rounded-2xl border border-[#d2c3a4] bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400"
                    placeholder="e.g. Pre revenue or $500K ARR"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-500">
                    Raise amount
                  </label>
                  <input
                    type="text"
                    name="raise_amount"
                    className="w-full rounded-2xl border border-[#d2c3a4] bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400"
                    placeholder="e.g. $250K"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-500">
                  What kind of support matters most?
                </label>
                <select
                  name="support_type"
                  className="w-full rounded-2xl border border-[#d2c3a4] bg-white px-4 py-3 text-slate-900 outline-none"
                >
                  <option value="">Select one</option>
                  <option value="capital">Capital only</option>
                  <option value="digital">Digital &amp; AI operational support</option>
                  <option value="both">Both capital and operational support</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-500">
                  Message
                </label>
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
                disabled={isSubmitting}
                className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold tracking-[0.06em] text-white transition hover:opacity-95 disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Submit inquiry"}
              </button>

              {status && (
                <div className="pt-2 text-sm text-slate-500">{status}</div>
              )}

              <div className="pt-1 text-sm text-slate-500">
                Contact: hello@apginvests.com • Toronto, Canada
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}