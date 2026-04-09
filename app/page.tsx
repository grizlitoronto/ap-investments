"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f8f5ef] text-slate-900">

      {/* HEADER */}
      <header className="max-w-7xl mx-auto px-5 py-6 flex items-center justify-between">
        <img src="/apg-logo.svg" className="h-14 w-auto" />

        <nav className="flex gap-6 text-sm">
          <a href="#focus">Focus</a>
          <a href="#why">Why A.P.G</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-5 py-20 grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <h1 className="text-4xl lg:text-5xl font-serif font-semibold leading-tight">
            Backing high potential businesses with decisive capital and operator insight.
          </h1>

          <p className="mt-6 text-slate-600 text-lg leading-8 max-w-xl">
            We invest in businesses with real demand, strong operators, and clear room to scale. Our focus is on execution, speed, and practical value creation.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="bg-slate-900 text-white px-6 py-3 rounded-full text-sm"
            >
              Submit your company
            </a>

            <a
              href="#why"
              className="border px-6 py-3 rounded-full text-sm"
            >
              Why A.P.G
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.1 }}
          className="grid gap-4"
        >
          <div className="border p-6 rounded-xl bg-white">
            <div className="text-sm text-slate-500">Check size</div>
            <div className="text-xl font-semibold">$25K to $100K</div>
          </div>

          <div className="border p-6 rounded-xl bg-white">
            <div className="text-sm text-slate-500">Stage</div>
            <div className="text-xl font-semibold">Pre seed and seed</div>
          </div>

          <div className="border p-6 rounded-xl bg-white">
            <div className="text-sm text-slate-500">Approach</div>
            <div className="text-xl font-semibold">Fast and selective</div>
          </div>
        </motion.div>
      </section>

      {/* FOCUS */}
      <section id="focus" className="max-w-7xl mx-auto px-5 py-16">
        <h2 className="text-2xl font-serif font-semibold mb-8">
          Investment focus
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Consumer brands",
            "Home services businesses",
            "eCommerce and retail tech",
            "AI tools and digital platforms",
            "Healthcare services",
            "Logistics and distribution",
          ].map((item) => (
            <div key={item} className="border p-6 rounded-xl bg-white text-center">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="bg-[#f3ede4] py-16">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-2xl font-serif font-semibold mb-8">
            Why A.P.G
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              ["Operator led", "Hands on experience in growth and execution"],
              ["Fast decisions", "No long processes or unnecessary friction"],
              ["Selective capital", "Focused, high conviction investments"],
            ].map(([title, text]) => (
              <div key={title} className="border p-6 rounded-xl bg-white text-center">
                <div className="font-semibold">{title}</div>
                <p className="text-sm mt-2 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRITERIA */}
      <section className="max-w-7xl mx-auto px-5 py-16 grid lg:grid-cols-2 gap-12">
        
        <div>
          <h2 className="text-2xl font-serif font-semibold mb-6">
            What we look for
          </h2>

          <div className="space-y-3">
            {[
              "Clear demand or traction",
              "Strong founders",
              "Room to scale",
              "Execution driven businesses",
            ].map((item) => (
              <div key={item} className="border p-4 rounded-xl bg-white">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-semibold mb-6">
            Process
          </h2>

          <div className="space-y-4">
            {[
              ["01", "Initial review"],
              ["02", "Quick evaluation"],
              ["03", "Fast decision"],
            ].map(([num, text]) => (
              <div key={num} className="border p-5 rounded-xl bg-white">
                <div className="text-sm text-slate-500">{num}</div>
                <div className="font-semibold">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t py-20">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-2xl font-serif font-semibold">
              Submit your company
            </h2>

            <p className="mt-4 text-slate-600 max-w-xl">
              Share a brief overview of your business, traction, and funding needs.
            </p>
          </div>

          <form
            action="https://formsubmit.co/hello@apginvests.com"
            method="POST"
            className="space-y-4"
          >
            <input name="name" placeholder="Name" className="w-full border p-3 rounded" required />
            <input name="email" placeholder="Email" className="w-full border p-3 rounded" required />
            <input name="company" placeholder="Company" className="w-full border p-3 rounded" />
            <input name="website" placeholder="Website" className="w-full border p-3 rounded" />
            <input name="revenue" placeholder="Revenue" className="w-full border p-3 rounded" />
            <input name="raise_amount" placeholder="Raise amount" className="w-full border p-3 rounded" />

            <textarea
              name="message"
              placeholder="Tell us about your business"
              className="w-full border p-3 rounded"
              required
            />

            <button className="bg-slate-900 text-white px-6 py-3 rounded-full w-full">
              Submit
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}