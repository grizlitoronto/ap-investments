// app/page.tsx  (or pages/index.tsx — works for both App Router and Pages Router)
// Drop this file in and adjust imports to match your existing layout/font setup

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A.P.G Investments — Capital & Digital Execution for High-Potential Businesses",
  description:
    "A.P.G Investments backs pre-seed and seed businesses with $25K–$100K in capital, plus hands-on digital and AI operational support. Toronto-based. Fast decisions.",
  openGraph: {
    title: "A.P.G Investments — Capital & Digital Execution",
    description:
      "We back high-potential businesses with decisive capital and real operator support — including digital transformation and AI improvements.",
    url: "https://www.apginvests.com",
    siteName: "A.P.G Investments Ltd.",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A.P.G Investments — Capital & Digital Execution",
    description:
      "Pre-seed and seed capital ($25K–$100K) plus digital and AI operational support. Toronto. Fast and selective.",
  },
  alternates: {
    canonical: "https://www.apginvests.com",
  },
};

export default function Home() {
  return (
    <main className="apg">
      {/* ─── NAV ─────────────────────────────────────────────── */}
      <nav className="apg-nav">
        <a href="/" className="apg-logo" aria-label="A.P.G Investments home">
          {/* Replace with your SVG logo import if preferred */}
          <img src="/apg-final-logo.svg" alt="A.P.G Investments Ltd." height={32} />
        </a>
        <div className="apg-nav-links">
          <a href="#what-we-offer">What we offer</a>
          <a href="#thesis">Focus</a>
          <a href="#credibility">Why A.P.G</a>
          <a href="#contact" className="apg-nav-cta">Get in touch</a>
        </div>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────── */}
      <section className="apg-hero">
        <div className="apg-hero-inner">
          <p className="apg-eyebrow">Pre-seed &amp; seed · $25K–$100K · Toronto</p>
          <h1>
            Capital and digital execution for businesses built to last.
          </h1>
          <p className="apg-hero-sub">
            We back high-potential businesses with two things most investors
            can't offer together: decisive capital and hands-on digital and AI
            operational support.
          </p>
          <div className="apg-hero-actions">
            <a href="#contact" className="apg-btn-primary">Submit your company</a>
            <a href="#what-we-offer" className="apg-btn-ghost">See what we offer</a>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE OFFER (new section) ─────────────────────── */}
      <section className="apg-section" id="what-we-offer">
        <p className="apg-section-label">What we offer</p>
        <h2>Two levers, not one.</h2>
        <p className="apg-section-sub">
          Most investors write a cheque and send a quarterly update request.
          We bring capital and the operational knowledge to help you grow faster
          once it's deployed.
        </p>
        <div className="apg-offer-grid">
          <div className="apg-offer-card">
            <div className="apg-offer-icon">◆</div>
            <h3>Decisive capital</h3>
            <p>
              Check sizes from $25K to $100K at pre-seed and seed. We move
              quickly, communicate directly, and don't run drawn-out processes.
              If conviction is there, you'll know fast.
            </p>
            <ul>
              <li>$25K – $100K per investment</li>
              <li>Pre-seed and seed stage</li>
              <li>Fast diligence, clear terms</li>
            </ul>
          </div>
          <div className="apg-offer-card apg-offer-card--accent">
            <div className="apg-offer-icon">⬡</div>
            <h3>Digital &amp; AI operational support</h3>
            <p>
              Beyond capital, we help portfolio businesses improve how they
              operate — from conversion and eCommerce performance to AI workflow
              automation, data infrastructure, and digital marketing execution.
            </p>
            <ul>
              <li>eCommerce &amp; conversion optimization</li>
              <li>AI tools and workflow automation</li>
              <li>Digital marketing and growth infrastructure</li>
              <li>Data and analytics foundations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── FOCUS / THESIS ──────────────────────────────────── */}
      <section className="apg-section apg-section--alt" id="thesis">
        <p className="apg-section-label">Investment focus</p>
        <h2>Sectors where execution and discipline compound value.</h2>
        <div className="apg-sector-grid">
          {[
            "Consumer brands",
            "Home services businesses",
            "eCommerce and retail tech",
            "AI tools and digital platforms",
            "Healthcare services",
            "Logistics and distribution",
          ].map((s) => (
            <div key={s} className="apg-sector-pill">{s}</div>
          ))}
        </div>
      </section>

      {/* ─── CREDIBILITY (expanded, no name) ─────────────────── */}
      <section className="apg-section" id="credibility">
        <p className="apg-section-label">Why A.P.G</p>
        <h2>Operator experience, not just operator vocabulary.</h2>
        <p className="apg-section-sub">
          The principal behind A.P.G has spent over a decade building and
          leading digital and eCommerce businesses — owning P&amp;Ls, running
          product and engineering orgs, and turning digital divisions from
          loss-making to profitable. This is capital backed by someone who has
          sat in the chair.
        </p>

        <div className="apg-cred-grid">
          <div className="apg-cred-stat">
            <span className="apg-cred-num">10+</span>
            <span className="apg-cred-desc">Years operating digital and eCommerce businesses</span>
          </div>
          <div className="apg-cred-stat">
            <span className="apg-cred-num">VP+</span>
            <span className="apg-cred-desc">Leadership experience across product, marketing, and digital ops</span>
          </div>
          <div className="apg-cred-stat">
            <span className="apg-cred-num">$0 → ✓</span>
            <span className="apg-cred-desc">Track record turning digital divisions from losses to profitability</span>
          </div>
        </div>

        <div className="apg-pillars">
          {[
            {
              title: "Operator-led",
              body: "Practical experience across growth, digital execution, product management, and operating discipline — not advisory distance.",
            },
            {
              title: "Fast decisions",
              body: "We move quickly, communicate directly, and avoid the drawn-out process many founders face with institutional investors.",
            },
            {
              title: "Selective capital",
              body: "We back a focused number of businesses where conviction, time, and support can genuinely matter.",
            },
            {
              title: "Digital & AI edge",
              body: "We help portfolio companies implement the tools and workflows that drive real operating leverage — not just point to them.",
            },
          ].map((p) => (
            <div key={p.title} className="apg-pillar">
              <h4>{p.title}</h4>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WHAT WE LOOK FOR ────────────────────────────────── */}
      <section className="apg-section apg-section--alt">
        <p className="apg-section-label">What we look for</p>
        <h2>Clear signals, strong operators, room to scale.</h2>
        <div className="apg-criteria-list">
          {[
            "Check size from $25K to $100K",
            "Pre-seed and seed stage",
            "Clear customer demand or commercial traction",
            "Founders with speed, judgment, and resilience",
            "Businesses where digital improvements, growth, or expansion can unlock real value",
            "Openness to working closely with the investment partner — not just taking capital",
          ].map((c) => (
            <div key={c} className="apg-criteria-item">
              <span className="apg-criteria-check">→</span>
              <span>{c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────────── */}
      <section className="apg-section">
        <p className="apg-section-label">Process</p>
        <h2>Simple, quick, and founder-friendly.</h2>
        <div className="apg-process-steps">
          {[
            { n: "01", title: "Initial review", body: "Send a concise overview, traction snapshot, and raise details. We read everything." },
            { n: "02", title: "Focused diligence", body: "We assess fundamentals quickly and focus on where we can genuinely help beyond capital." },
            { n: "03", title: "Fast decision", body: "If conviction is there, we move efficiently and keep the process clear and direct." },
          ].map((s) => (
            <div key={s.n} className="apg-step">
              <span className="apg-step-num">{s.n}</span>
              <div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CONTACT (dual CTA) ──────────────────────────────── */}
      <section className="apg-section apg-section--contact" id="contact">
        <p className="apg-section-label">Get in touch</p>
        <h2>Ready to start a conversation?</h2>
        <p className="apg-section-sub">
          Two ways in — a quick intro if you're still exploring, or the full
          submission if you're ready to move.
        </p>

        <div className="apg-contact-split">
          {/* Light-touch CTA */}
          <div className="apg-contact-light">
            <h3>Quick intro</h3>
            <p>
              Not ready for a full submission? Send a short note to{" "}
              <a href="mailto:hello@apginvests.com">hello@apginvests.com</a>{" "}
              with a one-paragraph overview of what you're building and where
              you are. We respond to everything.
            </p>
            <a href="mailto:hello@apginvests.com" className="apg-btn-ghost">
              Send a note →
            </a>
          </div>

          {/* Full form */}
          <div className="apg-contact-form-wrap">
            <h3>Full submission</h3>
            <form
              className="apg-form"
              action="/api/contact" // wire to your preferred handler / Resend / Formspree
              method="POST"
            >
              <div className="apg-form-row apg-form-row--half">
                <div className="apg-field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required placeholder="Your name" />
                </div>
                <div className="apg-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required placeholder="you@company.com" />
                </div>
              </div>
              <div className="apg-form-row apg-form-row--half">
                <div className="apg-field">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" placeholder="Company name" />
                </div>
                <div className="apg-field">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" type="url" placeholder="https://" />
                </div>
              </div>
              <div className="apg-form-row apg-form-row--half">
                <div className="apg-field">
                  <label htmlFor="revenue">Current revenue</label>
                  <input id="revenue" name="revenue" type="text" placeholder="e.g. Pre-revenue / $5K MRR" />
                </div>
                <div className="apg-field">
                  <label htmlFor="raise">Raise amount</label>
                  <input id="raise" name="raise" type="text" placeholder="e.g. $50K" />
                </div>
              </div>

              {/* New field: what kind of support */}
              <div className="apg-field">
                <label htmlFor="support">What kind of support matters most to you?</label>
                <select id="support" name="support">
                  <option value="">Select one</option>
                  <option value="capital">Capital only</option>
                  <option value="digital">Digital &amp; AI operational support</option>
                  <option value="both">Both capital and operational support</option>
                </select>
              </div>

              <div className="apg-field">
                <label htmlFor="message">Overview</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Brief overview of your business, traction, and why A.P.G is the right fit."
                />
              </div>
              <button type="submit" className="apg-btn-primary apg-btn-full">
                Submit inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────── */}
      <footer className="apg-footer">
        <div className="apg-footer-inner">
          <span>© {new Date().getFullYear()} A.P.G Investments Ltd. · Toronto, Canada</span>
          <div className="apg-footer-links">
            <a href="mailto:hello@apginvests.com">hello@apginvests.com</a>
            {/* Replace href with your actual LinkedIn URL */}
            <a href="https://www.linkedin.com/company/apg-investments-ltd-canada" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}