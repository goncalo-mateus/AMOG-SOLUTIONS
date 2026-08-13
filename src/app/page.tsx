'use client';

import { motion } from 'framer-motion';

export default function Home() {
  const packages = [
    {
      name: "Business Starter Pack",
      badge: "Fast Market Entry",
      featured: false,
      summary: "Designed for startups and new ventures that need to enter the market quickly with a professional brand image and an essential outbound lead generation engine.",
      features: [
        "Professional email setup and automated outbound outreach sequences",
        "Instant lead notifications routed directly to Slack or WhatsApp",
        "Automated calendar booking and meeting scheduling workflows",
      ],
      cta: "Get Started",
    },
    {
      name: "Full Scale Growth Engine",
      badge: "Most Popular",
      featured: true,
      summary: "A complete end-to-end architecture for growing companies wanting enterprise-grade operations, seamlessly connecting branding, paid traffic, and sales execution.",
      features: [
        "AI Sales Engine: Automated prospecting and intelligent response triage",
        "Autonomous calendar booking directly into your sales team’s schedule",
        "RevOps & CRM Integration: End-to-end setup (HubSpot / Pipedrive)",
        "Automated lead qualification powered by AI & Stripe payment flows",
      ],
      cta: "Scale Your Operation",
    },
    {
      name: "Turnkey Enterprise System",
      badge: "Custom AI & Infrastructure",
      featured: false,
      summary: "A complete turnkey operation for capital-backed enterprises requiring total automation, proprietary AI trained on internal data, and guaranteed ongoing support.",
      features: [
        "Premium Branding, multi-page web platform, and full marketing asset kit",
        "Proprietary AI Agent trained on your private internal database",
        "Advanced database infrastructure integration (Supabase / PostgreSQL)",
        "2 months of dedicated maintenance and continuous process optimization",
      ],
      cta: "Request Enterprise Proposal",
    },
  ];

  // Variantes de Animação
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#F4E8A3] text-[#0F172A] font-sans antialiased selection:bg-[#FF6B4A] selection:text-white">
      
      {/* ================= HEADER ================= */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/80 backdrop-blur-md border-b border-white/10 text-white"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FF6B4A] flex items-center justify-center font-bold text-xs text-white shadow-sm">
              A
            </div>
            <div>
              <span className="font-bold tracking-widest text-sm uppercase block">
                AMOG SOLUTIONS
              </span>
              <span className="text-[9px] text-slate-300 tracking-wider hidden sm:block">
                Advanced Machinery for Operational Growth
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase font-medium text-slate-200">
            <a href="#about" className="hover:text-[#FF6B4A] transition-colors">Philosophy</a>
            <a href="#packages" className="hover:text-[#FF6B4A] transition-colors">Solutions</a>
            <a href="#contact" className="hover:text-[#FF6B4A] transition-colors">Contact</a>
          </nav>

          {/* Menu Button / CTA */}
          <div className="flex items-center gap-4">
            <a 
              href="mailto:contacto@amog.pt" 
              className="text-xs font-semibold text-white bg-[#FF6B4A] px-5 py-2.5 rounded-full hover:bg-opacity-90 hover:scale-105 active:scale-95 transition-all shadow-sm"
            >
              Get in Touch
            </a>
            
            <button className="md:hidden p-2 text-slate-200 hover:text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>

        </div>
      </motion.header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-slate-950 text-white">
        
        {/* Background Video Layer */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center"
          >
            <source src="/hf_20260813_180344_dd9e9583-b2f2-4034-bf44-2e3f45e05c9c.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-slate-950/65 backdrop-brightness-90"></div>
          
          {/* Degrau suave para fundir com a cor amarela base da página */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F4E8A3] to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7"
          >
            <motion.span variants={fadeInUp} className="text-xs font-mono uppercase tracking-widest text-[#FF6B4A] block mb-4">
              01 • SENSITIVE UTOPIA
            </motion.span>
            
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl font-serif font-light tracking-tight leading-[1.1]">
              Technology <br />
              that learns to <br />
              <span className="italic font-normal">touch with care.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="mt-6 text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-xl">
              We do not build machines that take people’s place. We cultivate sensitive extensions: systems that protect human work from mechanical weight, so attention stays where it is irreplaceable.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-6 border-l-2 border-[#FF6B4A] pl-4 py-1">
              <span className="text-[10px] uppercase tracking-widest text-slate-300 block font-semibold">
                OUR PROMISE
              </span>
              <p className="text-sm font-serif italic text-white mt-1">
                “Give your team superpowers, never replace their presence.”
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#packages"
                className="inline-block bg-[#FF6B4A] text-white px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-opacity-90 hover:scale-105 active:scale-95 transition-all shadow-md"
              >
                Explore Solutions
              </a>
              <a
                href="mailto:contacto@amog.pt"
                className="inline-block bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-white hover:text-[#0F172A] transition-all"
              >
                Book a Diagnosis
              </a>
            </motion.div>
          </motion.div>

          {/* Right Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="w-full h-[420px] rounded-t-[160px] rounded-b-2xl border border-white/30 bg-white/5 backdrop-blur-sm p-3 relative overflow-hidden group hover:border-[#FF6B4A]/60 transition-all duration-500">
              <div className="w-full h-full rounded-t-[145px] rounded-b-xl border border-white/10 overflow-hidden relative flex items-center justify-center">
                <span className="text-xs font-mono text-slate-300 uppercase tracking-widest text-center px-6">
                  [ Interactive 3D / Editorial Asset ]
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= PHILOSOPHY / ABOUT SECTION ================= */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto relative z-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="p-10 md:p-16 rounded-3xl bg-white/90 backdrop-blur-sm border border-[#0F172A]/10 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-[#A62D26]">
              Our Philosophy
            </span>
            <h2 className="mt-3 text-3xl font-serif text-[#0F172A] tracking-tight">
              Boosting workforce productivity, not replacing jobs.
            </h2>
            <p className="mt-4 text-slate-700 font-light text-sm leading-relaxed">
              At AMOG Solutions, we approach technology from a human-first perspective. Advanced automation and artificial intelligence should act as your team’s ultimate co-pilot—handling mechanical tasks so your people can focus on strategy, innovation, and high-value relationships.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= PACKAGES SECTION ================= */}
      <section id="packages" className="py-16 px-6 max-w-6xl mx-auto border-t border-[#0F172A]/10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="text-xs font-bold tracking-widest uppercase text-slate-600">
            Operational Architecture
          </h2>
          <p className="mt-2 text-3xl font-normal tracking-tight text-[#0F172A]">
            Service Suites & Systems Engineering
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                pkg.featured 
                  ? "bg-[#0F172A] text-white shadow-xl ring-2 ring-[#FF6B4A]" 
                  : "bg-white/90 backdrop-blur-sm text-[#0F172A] border border-[#0F172A]/10 hover:shadow-lg"
              }`}
            >
              <div>
                <div className="flex justify-between items-center gap-2">
                  <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md ${
                    pkg.featured ? "bg-[#FF6B4A] text-white" : "bg-slate-100 text-slate-600"
                  }`}>
                    {pkg.badge}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-medium tracking-tight">
                  {pkg.name}
                </h3>
                
                <p className={`mt-4 text-xs font-light leading-relaxed ${
                  pkg.featured ? "text-slate-300" : "text-slate-600"
                }`}>
                  {pkg.summary}
                </p>

                <div className="mt-8 space-y-3">
                  <p className={`text-xs font-bold tracking-wider uppercase ${
                    pkg.featured ? "text-[#A8D6BB]" : "text-slate-500"
                  }`}>
                    Included Infrastructure:
                  </p>
                  <ul className="space-y-2 text-xs font-light">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className={pkg.featured ? "text-[#FF6B4A]" : "text-[#A62D26]"}>✓</span>
                        <span className={pkg.featured ? "text-slate-200" : "text-slate-700"}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-200/20">
                <a
                  href="mailto:contacto@amog.pt"
                  className={`block w-full text-center py-3 px-6 rounded-full text-xs font-semibold transition-all ${
                    pkg.featured 
                      ? "bg-[#FF6B4A] text-white hover:bg-opacity-90" 
                      : "bg-[#0F172A] text-white hover:bg-[#FF6B4A]"
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section id="contact" className="my-16 px-6 max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="p-10 md:p-16 rounded-3xl bg-[#0F172A] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl"
        >
          <div className="max-w-xl">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#A8D6BB]">
              Ready to upgrade your workflow?
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-normal tracking-tight leading-tight">
              Get an architecture blueprint & diagnosis in 48 hours.
            </h2>
            <p className="mt-4 text-slate-300 font-light text-sm leading-relaxed">
              We analyze your data bottlenecks, sales pipelines, and AI automation opportunities with zero upfront commitment.
            </p>
          </div>
          <div>
            <a
              href="mailto:contacto@amog.pt"
              className="inline-block bg-[#FF6B4A] text-white px-8 py-4 rounded-full text-xs uppercase tracking-wider font-medium hover:bg-opacity-90 hover:scale-105 active:scale-95 transition-all shadow-md whitespace-nowrap"
            >
              Talk to an Expert
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-12 px-6 max-w-6xl mx-auto border-t border-[#0F172A]/10 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-700 gap-4">
        <div>
          <p>© {new Date().getFullYear()} AMOG SOLUTIONS.</p>
          <p className="text-[10px] text-slate-600 mt-0.5">Advanced Machinery for Operational Growth</p>
        </div>
        <div className="flex gap-6 font-medium">
          <a href="mailto:contacto@amog.pt" className="hover:text-[#FF6B4A] transition-colors">Email</a>
          <a href="#packages" className="hover:text-[#FF6B4A] transition-colors">Solutions</a>
        </div>
      </footer>

    </main>
  );
}
