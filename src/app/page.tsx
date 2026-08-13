'use client';

import React from 'react';
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
              <span className="text-[9px] text-slate-300 tracking-wider hidden sm:block">
                Advanced Machinery for Operational Growth
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

      {/* ================= HERO SECTION (2 COLUNAS: TEXTO ESQ, VÍDEO DIR COM ARCO) ================= */}
      <section className="relative w-full pt-28 pb-12 px-6 flex justify-center">
        <div className="relative w-full max-w-[1082px] rounded-[32px] overflow-hidden shadow-2xl bg-slate-950 grid grid-cols-1 lg:grid-cols-12 items-center p-8 lg:p-12 gap-8 text-white">
          
          {/* Lado Esquerdo: Texto */}
          <div className="lg:col-span-6 z-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="text-xs font-mono uppercase tracking-widest text-[#FF6B4A] block mb-4">
                01 • SENSITIVE UTOPIA
              </motion.span>
              
              <motion.h1 variants={fadeInUp} className="text-3xl sm:text-5xl font-serif font-light tracking-tight leading-[1.1]">
                Technology <br />
                that learns to <br />
                <span className="italic font-normal">touch with care.</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="mt-6 text-sm text-slate-300 font-light leading-relaxed">
                We do not build machines that take people’s place. We cultivate sensitive extensions that protect human work from mechanical weight, so attention stays where it is irreplaceable.
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-8 pt-6 border-t border-white/15">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#A8D6BB] block mb-1">
                  OUR PROMISE
                </span>
                <p className="text-xs text-slate-300 italic font-serif">
                  Give your team superpowers, never replace their presence.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* ================= HERO SECTION (ESTILO COVER / CSS GRID) ================= */}
<section className="relative w-full pt-28 pb-12 px-6 flex justify-center">
  <div className="relative w-full max-w-[1082px] min-h-[650px] rounded-[32px] overflow-hidden shadow-2xl grid grid-cols-1 items-center bg-slate-950">
    
    {/* 1. VÍDEO DE FUNDO (Ocupa a célula 1/1 do Grid) */}
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="col-start-1 row-start-1 w-full h-full object-cover object-center min-h-[650px]"
    >
      <source src="/hf_20260813_180344_dd9e9583-b2f2-4034-bf44-2e3f45e05c9c.mp4" type="video/mp4" />
    </video>

    {/* 2. OVERLAY / GRADIENTE (Ocupa a mesma célula, por cima do vídeo) */}
    <div className="col-start-1 row-start-1 w-full h-full bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/30"></div>

    {/* 3. CONTEÚDO / TEXTO (Ocupa a mesma célula, flutuando à frente) */}
    <div className="col-start-1 row-start-1 relative z-10 w-full lg:max-w-xl p-8 sm:p-14 text-white">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.span variants={fadeInUp} className="text-xs font-mono uppercase tracking-widest text-[#FF6B4A] block mb-4">
          01 • SENSITIVE UTOPIA
        </motion.span>
        
        <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl font-serif font-light tracking-tight leading-[1.1]">
          Technology <br />
          that learns to <br />
          <span className="italic font-normal">touch with care.</span>
        </motion.h1>

        <motion.p variants={fadeInUp} className="mt-6 text-sm sm:text-base text-slate-200 font-light leading-relaxed">
          We do not build machines that take people’s place. We cultivate sensitive extensions that protect human work from mechanical weight, so attention stays where it is irreplaceable.
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-8 pt-6 border-t border-white/15">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#A8D6BB] block mb-1">
            OUR PROMISE
          </span>
          <p className="text-xs text-slate-300 italic font-serif">
            Give your team superpowers, never replace their presence.
          </p>
        </motion.div>
      </motion.div>
    </div>

  </div>
</section>

        </div>
      </section>

      {/* ================= PHILOSOPHY SECTION ================= */}
      <section id="about" className="py-16 px-6 max-w-[1082px] mx-auto relative z-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="p-10 md:p-14 rounded-3xl bg-white/90 backdrop-blur-sm border border-[#0F172A]/10 shadow-sm"
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

      {/* ================= SOLUTIONS SECTION ================= */}
      <section id="packages" className="py-16 px-6 max-w-[1082px] mx-auto border-t border-[#0F172A]/10">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`p-8 aspect-square flex flex-col justify-between border rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md ${
                pkg.featured 
                  ? "bg-[#0F172A] text-white border-[#0F172A] ring-2 ring-[#FF6B4A]" 
                  : "bg-white text-[#0F172A] border-[#0F172A]/15 hover:border-[#0F172A]/40"
              }`}
            >
              <div>
                <div className="flex justify-between items-center gap-2 mb-4">
                  <span className={`text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md ${
                    pkg.featured ? "bg-[#FF6B4A] text-white" : "bg-[#F4E8A3] text-[#0F172A] font-bold"
                  }`}>
                    {pkg.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-medium tracking-tight">
                  {pkg.name}
                </h3>
                
                <p className={`mt-3 text-xs font-light leading-relaxed ${
                  pkg.featured ? "text-slate-300" : "text-slate-600"
                }`}>
                  {pkg.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-current/10">
                <a
                  href="mailto:contacto@amog.pt"
                  className={`block w-full text-center py-3 px-4 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
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
      <section id="contact" className="my-16 px-6 max-w-[1082px] mx-auto">
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
      <footer className="py-12 px-6 max-w-[1082px] mx-auto border-t border-[#0F172A]/10 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-700 gap-4">
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