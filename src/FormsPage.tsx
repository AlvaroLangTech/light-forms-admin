// src/FormsPage.tsx
import ActionCards from "./components/ActionCards";
import Filters from "./components/Filters";
import Table from "./components/Table";

export default function FormsPage() {
  return (
    <main className="ml-[var(--sidebar-w)] pt-[calc(var(--topbar-h)+10px)] pb-10 bg-[var(--bg)] min-h-screen">
      {/* largura/recuo iguais à ref */}
      <div className="max-w-[1000px] mx-auto px-6 space-y-7">
        {/* Cabeçalho */}
        <header aria-label="Cabeçalho da página" className="pt-1">
          <h1 className="text-[28px] leading-[1.25] font-semibold tracking-[0.1px] text-[var(--heading)]">
            Criar e Gerenciar Formulários
          </h1>
          <p className="mt-1.5 text-[15px] text-[color:rgba(15,23,42,.56)]">
            Escolha uma das opções abaixo para começar
          </p>
        </header>

        {/* Painel de Ações — card único (sem dupla camada) */}
        <section aria-label="Ações rápidas">
          <div className="panel-hero">
            <div className="panel-hero__inner">
              <ActionCards />
            </div>
          </div>
        </section>

        {/* ===== Card ÚNICO: título + filtros + tabela + paginação ===== */}
        <section
          aria-label="Lista de formulários"
          className="forms-card rounded-[12px] shadow-[var(--elev-1)] border border-[var(--card-border)] overflow-hidden"
          style={{ background: "#fff" }}
        >
{/* Cabeçalho do card (agora branco) */}
<div
  className="card-head px-6 py-4 border-b border-[var(--card-border)] bg-white"
>
  <h2 className="text-[18px] font-semibold text-[var(--heading)]">Formulários</h2>
</div>

          {/* Filtros */}
          <div
            className="filters-row px-6 py-4 border-b border-[var(--card-border)]"
            style={{ background: "#fff" }}
          >
            <Filters />
          </div>

          {/* Tabela (sem “mini-card”) */}
          <div className="px-6 py-4">
            <Table withTitlebar={false} />
          </div>

          {/* Paginação (fora do Table, colada ao card) */}
          <div className="panel__pagin">
            <nav className="pagination" aria-label="Paginação">
              {/* Voltar */}
              <button type="button" className="page-link prev" aria-label="Voltar">
                <svg viewBox="0 0 24 24" className="caret" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                <span className="sr-only sm:not-sr-only">Voltar</span>
              </button>

              {/* Números */}
              <div className="pages">
                <button type="button" className="page-btn is-current" aria-current="page">1</button>
                <button type="button" className="page-btn">2</button>
                <button type="button" className="page-btn">3</button>
                <button type="button" className="page-btn">4</button>
                <button type="button" className="page-btn">5</button>
                <button type="button" className="page-btn">6</button>
              </div>

              {/* Próximo */}
              <button type="button" className="page-link next" aria-label="Próximo">
                <span className="sr-only sm:not-sr-only">Próximo</span>
                <svg viewBox="0 0 24 24" className="caret" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </nav>
          </div>
        </section>

        {/* Rodapé do site */}
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
