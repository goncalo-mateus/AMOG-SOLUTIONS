export default function Home() {
  const soluciones = [
    {
      tag: "RevOps & Dados",
      titulo: "Arquitetura de RevOps & CRM",
      descricao: "Unificação de pipelines de vendas, marketing e customer success. Estruturação de dados para previsibilidade total do pipeline.",
    },
    {
      tag: "Automação por IA",
      titulo: "Motores de Qualificação & Vendas",
      descricao: "Agentes autónomos de IA e rotinas automatizadas para triagem, enriquecimento de leads e atendimento comercial sem fricção.",
    },
    {
      tag: "Engenharia de Processos",
      titulo: "Automações Avançadas de Workflows",
      descricao: "Integração de infraestruturas via APIs, webhooks e fluxos complexos no Make/Postman para eliminar tarefas manuais e erros.",
    },
  ];

  const metricas = [
    { valor: "+40%", rotulo: "Eficiência Operacional em Vendas" },
    { valor: "100%", rotulo: "Integridade de Dados & Pipeline" },
    { valor: "< 5min", rotulo: "Tempo Médio de Qualificação de Lead" },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] px-6 py-12 md:px-20 max-w-6xl mx-auto font-sans antialiased selection:bg-[#FF6B4A] selection:text-white">
      {/* Header */}
      <header className="flex justify-between items-center py-6 border-b border-slate-200/80">
        <span className="font-bold tracking-widest text-xs uppercase text-[#0F172A]">
          AMOG SOLUTIONS
        </span>
        <a 
          href="mailto:contacto@amog.pt" 
          className="text-sm font-medium text-[#0F172A] hover:text-[#FF6B4A] transition-colors"
        >
          Contactar
        </a>
      </header>

      {/* Hero Section */}
      <section className="py-20 max-w-3xl">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-[#A8D6BB]/20 text-[#0F172A] text-xs font-semibold tracking-wide">
          Sistemas & Automação B2B
        </div>
        <h1 className="text-4xl sm:text-6xl font-normal tracking-tight leading-[1.15] text-[#0F172A]">
          Sistemas Inteligentes & Motores de Vendas por IA
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-slate-600 font-light leading-relaxed">
          Arquitetura de RevOps, automações avançadas de dados e integração de infraestruturas à medida para maximizar a retenção e escalabilidade.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contacto"
            className="inline-block bg-[#FF6B4A] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all shadow-sm"
          >
            Agendar Diagnóstico
          </a>
          <a
            href="#solucoes"
            className="inline-block bg-white text-[#0F172A] border border-slate-200 px-8 py-4 rounded-full text-sm font-medium hover:bg-slate-50 transition-all"
          >
            Explorar Soluções
          </a>
        </div>
      </section>

      {/* Seção de Soluções / Serviços */}
      <section id="solucoes" className="py-16 border-t border-slate-200/80">
        <div className="mb-12">
          <h2 className="text-xs font-bold tracking-widest uppercase text-slate-400">
            Capacidades & Especialização
          </h2>
          <p className="mt-2 text-2xl font-normal tracking-tight text-[#0F172A]">
            Soluções desenhadas para otimizar todo o ciclo de vida do cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {soluciones.map((solucao, idx) => (
            <div 
              key={idx}
              className="group p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-[#FF6B4A]/50 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#A62D26] bg-[#A62D26]/5 px-2.5 py-1 rounded-md">
                  {solucao.tag}
                </span>
                <h3 className="mt-6 text-xl font-medium text-[#0F172A] group-hover:text-[#FF6B4A] transition-colors">
                  {solucao.titulo}
                </h3>
                <p className="mt-4 text-sm text-slate-600 font-light leading-relaxed">
                  {solucao.descricao}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center text-xs font-medium text-[#0F172A] group-hover:translate-x-1 transition-transform">
                <span>Saber mais</span>
                <span className="ml-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Métricas de Impacto */}
      <section className="py-16 border-t border-slate-200/80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metricas.map((m, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-100/50 border border-slate-200/60">
              <span className="text-3xl font-normal text-[#0F172A] tracking-tight">{m.valor}</span>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-500">{m.rotulo}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bloco de Conversão / Diagnóstico */}
      <section id="contacto" className="my-12 p-10 md:p-16 rounded-3xl bg-[#0F172A] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
        <div className="max-w-xl">
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#A8D6BB]">
            Pronto para otimizar a operação?
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-normal tracking-tight leading-tight">
            Desenho de arquitetura e diagnóstico de RevOps em 48h.
          </h2>
          <p className="mt-4 text-slate-300 font-light text-sm leading-relaxed">
            Analisamos os teus gargalos de dados, fluxos de vendas e oportunidades de automação por IA sem compromisso.
          </p>
        </div>
        <div>
          <a
            href="mailto:contacto@amog.pt"
            className="inline-block bg-[#FF6B4A] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all shadow-md whitespace-nowrap"
          >
            Falar com Especialista
          </a>
        </div>
      </section>

      {/* Footer Minimalista */}
      <footer className="py-12 border-t border-slate-200/80 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
        <p>© {new Date().getFullYear()} AMOG SOLUTIONS. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="mailto:contacto@amog.pt" className="hover:text-[#0F172A] transition-colors">E-mail</a>
          <a href="#solucoes" className="hover:text-[#0F172A] transition-colors">Soluções</a>
        </div>
      </footer>
    </main>
  );
}