// src/FormsPage.tsx
import ActionCards from "./components/ActionCards";
import Filters from "./components/Filters";
import Table from "./components/Table";

export default function FormsPage() {
  return (
    // respeita sidebar/topbar fixas (usa CSS vars)
    <main className="ml-[var(--sidebar-w)] pt-[calc(var(--topbar-h)+18px)] pb-12 bg-[var(--bg)] min-h-screen">
      {/* largura/recuo iguais à ref. */}
      <div className="max-w-[960px] mx-auto px-6 md:px-7 space-y-8">
        {/* Cabeçalho */}
        <header aria-label="Cabeçalho da página" className="pt-1">
          <h1 className="text-[28px] leading-[1.25] font-semibold tracking-[0.1px] text-[var(--heading)]">
            Criar e Gerenciar Formulários
          </h1>
          <p className="mt-2 text-[15px] text-[color:rgba(15,23,42,.56)]">
            Escolha uma das opções abaixo para começar
          </p>
          {/* sem divisor sob o subtítulo */}
        </header>

        {/* Painel de Ações — card externo + interno (sutil) */}
        <section aria-label="Ações rápidas">
          <div className="panel-hero">
            <div className="panel-hero__inner">
              <ActionCards />
            </div>
          </div>
        </section>

        {/* Painel de Formulários */}
        <section
          aria-label="Lista de formulários"
          className="bg-white rounded-[12px] shadow-[var(--elev-1)] border border-[var(--card-border)] overflow-hidden"
        >
          {/* Cabeçalho */}
          <div className="px-6 py-4 border-b border-[var(--card-border)] bg-white">
            <h2 className="text-[18px] font-semibold text-[var(--heading)]">Formulários</h2>
          </div>

          {/* Filtros */}
          <div className="px-6 py-4 border-b border-[var(--card-border)] bg-[#F9FAFB]">
            <Filters />
          </div>

          {/* Tabela */}
          <div className="px-6 py-4">
            <Table withTitlebar={false} />
          </div>
        </section>

        {/* Rodapé */}
        <footer
          aria-label="Rodapé"
          className="text-center text-[13px] text-[var(--muted)] mt-10 pt-4 border-t border-[var(--line)]"
        >
          Light Serviços de Eletricidade S/A © 2025 — Todos os direitos reservados · Política de Privacidade · Gestão de Cookies
        </footer>
      </div>
    </main>
  );
}
