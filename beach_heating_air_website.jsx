export default function BeachHeatingAirWebsite() {
  const reviews = [
    {
      name: "Sarah M.",
      text: "Fast response, honest pricing, and our new system works amazing. Super clean install.",
    },
    {
      name: "David R.",
      text: "They explained all our options clearly and got the install done fast. Highly recommend.",
    },
    {
      name: "Monica T.",
      text: "Professional from start to finish. Financing made it easy to move forward right away.",
    },
  ];

  const plans = [
    {
      name: "Good",
      badge: "Budget Friendly",
      price: "$7.9k+",
      description: "Reliable comfort for homeowners who want a solid replacement at a value price.",
      features: ["Standard efficiency system", "1-year labor coverage", "Smart thermostat option"],
    },
    {
      name: "Better",
      badge: "Most Popular",
      price: "$9.8k+",
      description: "The best mix of efficiency, comfort, and long-term value.",
      features: ["High-efficiency system", "Extended warranty", "Improved airflow and comfort"],
      featured: true,
    },
    {
      name: "Best",
      badge: "Premium Comfort",
      price: "$12.5k+",
      description: "Top-tier comfort, energy savings, and premium protection.",
      features: ["Premium variable-speed system", "Best warranty package", "Indoor air quality upgrade"],
    },
  ];

  const services = [
    "Same-day HVAC installation",
    "AC and heating repair",
    "Preventive maintenance",
    "Ductwork improvements",
    "Thermostat upgrades",
    "Indoor air quality solutions",
  ];

  const faqs = [
    {
      q: "Do you offer same-day install?",
      a: "Yes. When availability allows, we prioritize same-day replacements and urgent comfort issues.",
    },
    {
      q: "Do you offer financing?",
      a: "Yes. We can present monthly payment options and promotional financing for qualified homeowners.",
    },
    {
      q: "What areas do you serve?",
      a: "We serve Orange County and surrounding communities with fast, professional residential HVAC service.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-orange-400 text-lg font-bold text-white shadow-md">
              B
            </div>
            <div>
              <div className="text-lg font-extrabold tracking-tight">Beach Heating &amp; Air</div>
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-sky-600">Coastal Comfort Experts</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#services" className="hover:text-sky-600">Services</a>
            <a href="#systems" className="hover:text-sky-600">Systems</a>
            <a href="#reviews" className="hover:text-sky-600">Reviews</a>
            <a href="#financing" className="hover:text-sky-600">Financing</a>
            <a href="#contact" className="hover:text-sky-600">Contact</a>
          </nav>

          <a
            href="tel:+19492873618"
            className="rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600"
          >
            Call Now
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.32),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(251,146,60,0.28),_transparent_24%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-sky-200">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-orange-400" />
                Same-Day Install Available
              </div>
              <h1 className="max-w-xl text-4xl font-black leading-tight text-white md:text-6xl">
                Same-Day HVAC Service in Orange County
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Fast, clean, professional heating and air service with premium installation options,
                financing, and comfort solutions built for coastal homes.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-orange-500 px-6 py-4 text-center text-sm font-bold text-white shadow-xl shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
                >
                  Get Free Estimate
                </a>
                <a
                  href="#systems"
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-center text-sm font-bold text-white transition hover:bg-white/15"
                >
                  View System Options
                </a>
              </div>
              <div className="mt-8 grid max-w-xl grid-cols-3 gap-4 text-white">
                {[
                  ["24/7", "Priority Response"],
                  ["5-Star", "Customer Care"],
                  ["Flexible", "Financing Options"],
                ].map(([top, bottom]) => (
                  <div key={top} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-black">{top}</div>
                    <div className="mt-1 text-sm text-slate-300">{bottom}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="rounded-[2rem] border border-white/10 bg-white p-4 shadow-2xl shadow-sky-950/40">
                <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-sky-100 via-white to-orange-100 p-6">
                  <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white shadow-xl">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Featured Offer</p>
                        <h2 className="mt-2 text-2xl font-black">Replace Now. Pay Over Time.</h2>
                        <p className="mt-3 text-sm leading-7 text-slate-300">
                          High-efficiency system upgrades with monthly payment options and honest recommendations.
                        </p>
                      </div>
                      <div className="rounded-2xl bg-orange-500 px-4 py-3 text-right shadow-lg shadow-orange-500/30">
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-100">As Low As</div>
                        <div className="text-3xl font-black">$99/mo</div>
                      </div>
                    </div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {[
                        "Same-day install openings",
                        "Energy-efficient systems",
                        "Smart thermostat upgrades",
                        "Flexible financing plans",
                      ].map((item) => (
                        <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-700">Our Services</div>
            <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">Heating and cooling solutions that are built to close.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Built for homeowners who want speed, clarity, and confidence. Every visit is designed to solve the problem and make the next step easy.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <div key={service} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-orange-400 text-lg font-black text-white shadow-md">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-xl font-bold">{service}</h3>
                <p className="mt-3 text-slate-600">
                  Clean workmanship, clear communication, and practical comfort upgrades without the runaround.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="systems" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">System Options</div>
                <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">Good, Better, Best — made easy to understand.</h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-slate-600">
                Position the right system clearly, show the value, and guide homeowners toward the most confident choice.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-[2rem] border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                    plan.featured
                      ? "border-sky-500 bg-slate-950 text-white shadow-2xl shadow-sky-200/60"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className={`inline-flex rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] ${plan.featured ? "bg-orange-500 text-white" : "bg-slate-100 text-slate-700"}`}>
                    {plan.badge}
                  </div>
                  <div className="mt-6 flex items-end justify-between gap-4">
                    <h3 className="text-3xl font-black">{plan.name}</h3>
                    <div className={`text-2xl font-black ${plan.featured ? "text-orange-300" : "text-sky-600"}`}>{plan.price}</div>
                  </div>
                  <p className={`mt-4 leading-7 ${plan.featured ? "text-slate-300" : "text-slate-600"}`}>{plan.description}</p>
                  <div className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className={`rounded-2xl px-4 py-3 text-sm ${
                          plan.featured ? "bg-white/10 text-slate-100" : "bg-slate-50 text-slate-700"
                        }`}
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className={`mt-8 inline-flex rounded-full px-5 py-3 text-sm font-bold transition ${
                      plan.featured
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "bg-sky-600 text-white hover:bg-sky-700"
                    }`}
                  >
                    Request This Option
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="financing" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-700">Financing Available</div>
              <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">Comfort now. Payments that feel manageable.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Monthly payment framing helps homeowners move forward faster and with more confidence.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["$99/mo", "Entry monthly option"],
                  ["0% OAC", "Promotional financing"],
                  ["Fast", "Application decisions"],
                ].map(([headline, sub]) => (
                  <div key={headline} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="text-3xl font-black text-sky-700">{headline}</div>
                    <div className="mt-2 text-sm text-slate-600">{sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-sky-500 to-slate-950 p-[1px] shadow-2xl shadow-sky-200">
              <div className="rounded-[2rem] bg-white p-8">
                <div className="rounded-[1.75rem] bg-slate-950 p-7 text-white">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Example Breakdown</div>
                  <div className="mt-4 grid gap-4">
                    {[
                      ["Better System", "$9,800"],
                      ["Promo Financing", "0% OAC"],
                      ["Estimated Payment", "$99–$149/mo"],
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-4">
                        <span className="text-slate-300">{label}</span>
                        <span className="text-lg font-black text-orange-300">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-sky-200">Before &amp; After</div>
                <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">Show the upgrade. Sell the confidence.</h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                  This section is designed for real job photos. Swap in your install images to instantly increase trust.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="flex h-64 items-center justify-center rounded-[1.5rem] border border-dashed border-white/20 bg-slate-900 text-center text-slate-400">
                    Before Install Photo
                  </div>
                  <div className="mt-4 text-lg font-bold">Before</div>
                  <p className="mt-2 text-sm leading-7 text-slate-300">Older equipment, poor airflow, rising energy bills.</p>
                </div>
                <div className="rounded-[2rem] border border-orange-400/30 bg-gradient-to-b from-orange-400/10 to-white/5 p-4 backdrop-blur">
                  <div className="flex h-64 items-center justify-center rounded-[1.5rem] border border-dashed border-orange-300/30 bg-slate-900 text-center text-orange-100/70">
                    After Install Photo
                  </div>
                  <div className="mt-4 text-lg font-bold">After</div>
                  <p className="mt-2 text-sm leading-7 text-slate-300">Clean install, better comfort, and improved efficiency.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">Customer Reviews</div>
            <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">Trust that feels immediate.</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.name} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="text-lg text-orange-500">★★★★★</div>
                <p className="mt-4 leading-8 text-slate-600">“{review.text}”</p>
                <div className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-sky-700">{review.name}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <div className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-700">Maintenance Plan</div>
              <h2 className="mt-5 text-3xl font-black tracking-tight">Beach Comfort Club</h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
                Recurring service plans that keep comfort predictable and help homeowners say yes to long-term care.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Priority scheduling",
                  "Seasonal tune-ups",
                  "Repair discounts",
                  "Extended system life",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Frequently Asked</div>
              <div className="mt-6 space-y-5">
                {faqs.map((faq) => (
                  <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="font-bold">{faq.q}</div>
                    <div className="mt-2 text-sm leading-7 text-slate-300">{faq.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-sky-600 to-slate-950 py-20 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(251,146,60,0.22),_transparent_22%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
              <div>
                <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-sky-100">
                  Ready to Book?
                </div>
                <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">Let’s get your home comfortable again.</h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-slate-200">
                  Use this section as your conversion engine. Connect it to Wix or Webflow forms, phone links, and review badges.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="tel:+19492873618" className="rounded-full bg-orange-500 px-6 py-4 text-sm font-bold text-white transition hover:bg-orange-600">
                    Call (949) 287-3618
                  </a>
                  <a href="mailto:info@beachheatingair.com" className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/15">
                    Email Us
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] bg-white p-8 text-slate-900 shadow-2xl">
                <h3 className="text-2xl font-black">Request Your Free Estimate</h3>
                <div className="mt-6 grid gap-4">
                  {[
                    "Full Name",
                    "Phone Number",
                    "Email Address",
                    "City / Zip Code",
                  ].map((field) => (
                    <div key={field} className="rounded-2xl border border-slate-200 px-4 py-4 text-sm text-slate-400">
                      {field}
                    </div>
                  ))}
                  <div className="min-h-28 rounded-2xl border border-slate-200 px-4 py-4 text-sm text-slate-400">How can we help?</div>
                  <button className="rounded-full bg-sky-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-sky-700">
                    Submit Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-bold text-slate-800">Beach Heating &amp; Air</span> · Same-day install · Orange County HVAC
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-sky-600">Privacy</a>
            <a href="#" className="hover:text-sky-600">Terms</a>
            <a href="#contact" className="hover:text-sky-600">Get Estimate</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- FULL SEO SYSTEM ---

const ServiceTemplate = ({ city }) => (
  <div className="p-10 max-w-4xl mx-auto">
    <h1 className="text-4xl font-black">HVAC Services in {city}, CA</h1>

    <p className="mt-4 text-lg text-slate-600">
      Beach Heating & Air provides same-day HVAC installation, AC repair, heating service, and energy-efficient upgrades in {city}. We specialize in fast response times, clean installs, and long-term comfort solutions for Orange County homeowners.
    </p>

    <h2 className="mt-8 text-2xl font-bold">Our Services in {city}</h2>
    <ul className="mt-4 space-y-2 text-slate-700">
      <li>• Same-day HVAC installation</li>
      <li>• AC repair and diagnostics</li>
      <li>• Furnace and heating repair</li>
      <li>• Ductwork and airflow improvements</li>
      <li>• Smart thermostat installation</li>
    </ul>

    <h2 className="mt-8 text-2xl font-bold">Why Homeowners in {city} Choose Us</h2>
    <ul className="mt-4 space-y-2 text-slate-700">
      <li>• Fast response and same-day installs</li>
      <li>• Honest, transparent pricing</li>
      <li>• Financing options available</li>
      <li>• Licensed & insured HVAC professionals</li>
    </ul>

    <h2 className="mt-8 text-2xl font-bold">FAQs</h2>
    <div className="mt-4 space-y-4">
      <div>
        <strong>How much does HVAC replacement cost in {city}?</strong>
        <p className="text-slate-600">Most systems range from $7,000–$12,000 depending on efficiency and home size.</p>
      </div>
      <div>
        <strong>Do you offer same-day service in {city}?</strong>
        <p className="text-slate-600">Yes, we prioritize same-day installs and urgent repairs when availability allows.</p>
      </div>
    </div>

    <div className="mt-10 rounded-2xl bg-sky-600 p-6 text-white">
      <h3 className="text-xl font-bold">Get Fast HVAC Service in {city}</h3>
      <p className="mt-2">Call (949) 287-3618 or request a free estimate today.</p>
    </div>
  </div>
);

// Individual City Pages
export const Irvine = () => <ServiceTemplate city="Irvine" />;
export const NewportBeach = () => <ServiceTemplate city="Newport Beach" />;
export const CostaMesa = () => <ServiceTemplate city="Costa Mesa" />;
export const LagunaBeach = () => <ServiceTemplate city="Laguna Beach" />;
export const SantaAna = () => <ServiceTemplate city="Santa Ana" />;
export const Tustin = () => <ServiceTemplate city="Tustin" />;
export const Anaheim = () => <ServiceTemplate city="Anaheim" />;
export const Orange = () => <ServiceTemplate city="Orange" />;
export const HuntingtonBeach = () => <ServiceTemplate city="Huntington Beach" />;
export const MissionViejo = () => <ServiceTemplate city="Mission Viejo" />;

// --- BLOG CONTENT FOR SEO ---

export const BlogHVACCost = () => (
  <div className="p-10 max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold">How Much Does HVAC Cost in Orange County?</h1>
    <p className="mt-4">HVAC system replacement in Orange County typically ranges from $7,000 to $12,500 depending on system type, efficiency, and installation complexity.</p>
  </div>
);

export const BlogBestSystem = () => (
  <div className="p-10 max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold">Best AC Systems for Coastal Homes</h1>
    <p className="mt-4">Coastal homes benefit from corrosion-resistant systems, high-efficiency units, and proper airflow design to handle humidity and salt air exposure.</p>
  </div>
);

// --- SCHEMA MARKUP (SEO BOOST) ---

export const LocalBusinessSchema = () => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HVACBusiness",
      name: "Beach Heating & Air",
      areaServed: "Orange County",
      telephone: "+1-949-287-3618",
      url: "https://beachheatingair.com",
    })
  }} />
);
