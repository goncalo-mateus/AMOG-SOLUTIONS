export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] px-6 py-12 md:px-20 max-w-5xl mx-auto font-sans">
      <header className="flex justify-between items-center py-6 border-b border-slate-200">
        <span className="font-bold tracking-widest text-xs uppercase text-[#0F172A]">
          AMOG SOLUTIONS
        </span>
        <a 
          href="mailto:contacto@amog.pt" 
          className="text-sm font-medium hover:text-[#FF6B4A] transition-colors"
        >
          Contactar
        </a>
      </header>

      <section className="py-24 max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-normal tracking-tight leading-tight text-[#0F172A]">
          A inteligência artificial como companheira sensível e artesanal.
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-slate-600 font-light leading-relaxed">
          Desenvolvemos ecossistemas de dados, motores de vendas e arquiteturas automáticas em perfeita simbiose com a sua operação.
        </p>
        <div className="mt-10">
          <a
            href="#solucoes"
            className="inline-block bg-[#FF6B4A] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all shadow-sm"
          >
            Explorar Soluções
          </a>
        </div>
      </section>
    </main>
  );
}