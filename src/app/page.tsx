'use client';

import { motion } from 'framer-motion';

export default function Home() {
  const packages = [
    {
      name: "Business Starter Pack",
      badge: "Fast Market Entry",
      featured: false,
      summary: "Designed for startups and new ventures that need to enter the market quickly with a professional brand image.",
      cta: "Get Started",
    },
    {
      name: "Full Scale Growth Engine",
      badge: "Most Popular",
      featured: true,
      summary: "A complete end-to-end architecture for growing companies wanting enterprise-grade operations and sales execution.",
      cta: "Scale Your Operation",
    },
    {
      name: "Turnkey Enterprise System",
      badge: "Custom AI & Infrastructure",
      featured: false,
      summary: "A complete turnkey operation for capital-backed enterprises requiring total automation and proprietary AI.",
      cta: "Request Proposal",
    },
  ];

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
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main style={{ backgroundColor: '#F4E8A3' }} className="min-h-screen text-[#0F172A] font-sans antialiased selection:bg-[#FF6B4A] selection:text-white">
      
      {/* ================= HEADER ================= */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/85 backdrop-blur-md border-b border-white/10 text-white"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FF6B4A] flex items-center justify-center font-bold text-xs text-white">
              A
            </div>
            <div>
              <span className="font-bold tracking-widest text-sm uppercase block">
                AMOG SOLUTIONS
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase font-medium text-slate-200">
            <a href="#about" className="hover:text-[#FF6B4A] transition-colors">Philosophy</a>
            <a href="#packages" className="hover:text-[#FF6B4A] transition-colors">Solutions</a>
            <a href="#contact" className="hover:text-[#FF6B4A] transition-colors">Contact</a>
          </nav>

          <div>
            <a 
              href="mailto:contacto@amog.pt" 
              className="text-xs font-semibold text-white bg-[#FF6B4A] px-5 py-2.5 rounded-full hover:bg-opacity-95 transition-all shadow-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </motion.header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full pt-32 pb-20 flex flex-col items-center">
        {/* VÍDEO NOVO: Mais largo, menos alto, atrás do texto */}
        <div className="w-[85%] lg:w-[65%] aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl z-0 mb-12">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hf_20260813_180344_dd9e9583-b2f2-4034-bf44-2e3f45e05c9c.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="text-xs font-mono uppercase tracking-widest text-[#FF6B4A] block mb-4">
              01 • SENSITIVE UTOPIA
            </motion.span>
            
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl font-serif font-light tracking-tight leading-[1.1]">
              Technology that learns to <br />
              <span className="italic font-normal">touch with care.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="mt-6 text-base sm:text-lg text-slate-800 font-light leading-relaxed max-w-xl mx-auto">
              We do not build machines that take people’s place. We cultivate sensitive extensions that protect human work from mechanical weight.
            </motion.p>
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
          className="p-10 md:p-16 rounded-3xl bg-white/60 backdrop-blur-sm border border-[#0F172A]/10 shadow-sm"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-[#A62D26]">
              Our Philosophy
            </span>
            <h2 className="mt-3 text-3xl font-serif text-[#0F172A] tracking-tight">
              Boosting workforce productivity, not replacing jobs.
            </h2>
            <p className="mt-4 text-slate-700 font-light text-sm leading-relaxed">
              At AMOG Solutions, we approach technology from a human-first perspective. Automation should act as your team’s ultimate co-pilot.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= PACKAGES / SERVIÇOS ================= */}
      <section id="packages" className="py-20 px-6 max-w-6xl mx-auto border-t border-[#0F172A]/10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#A62D26]">
            02 • SOLUTIONS
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif tracking-tight text-[#0F172A]">
            Service Suites & Systems Engineering
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`p-8 flex flex-col justify-between border-2 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-md ${
                pkg.featured 
                  ? "bg-[#0F172A] text-white border-[#0F172A]" 
                  : "bg-white text-[#0F172A] border-[#0F172A]/10 hover:border-[#0F172A]/30"
              }`}
            >
              <div>
                <div className="flex mb-4">
                  <span className={`text-[10px] font-mono tracking-wider uppercase px-3 py-1 rounded-full ${
                    pkg.featured ? "bg-[#FF6B4A] text-white" : "bg-[#F4E8A3] text-[#0F172A] font-bold"
                  }`}>
                    {pkg.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-medium tracking-tight">
                  {pkg.name}
                </h3>
                
                <p className={`mt-4 text-sm font-light leading-relaxed ${
                  pkg.featured ? "text-slate-300" : "text-slate-600"
                }`}>
                  {pkg.summary}
                </p>
              </div>

              <div className="pt-8">
                <a
                  href="mailto:contacto@amog.pt"
                  className={`block w-full text-center py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
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
          </div>
          <div>
            <a
              href="mailto:contacto@amog.pt"
              className="inline-block bg-[#FF6B4A] text-white px-8 py-4 rounded-full text-xs uppercase tracking-wider font-medium hover:bg-opacity-90 transition-all shadow-md whitespace-nowrap"
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
        </div>
        <div className="flex gap-6 font-medium">
          <a href="mailto:contacto@amog.pt" className="hover:text-[#FF6B4A] transition-colors">Email</a>
        </div>
      </footer>

    </main>
  );
}