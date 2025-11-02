// src/FormsPage.tsx
import ActionCards from "./components/ActionCards";
import Filters from "./components/Filters";
import Table from "./components/Table";

export default function FormsPage() {
  return (
    <main className="main-encostado">
      {/* ⚠️ nada de max-w/ mx-auto aqui */}
      <div className="page-inner space-y-7">
        {/* Cabeçalho */}
        <header aria-label="Cabeçalho da página" className="pt-1">
          <h1 className="text-[28px] leading-[1.25] font-semibold tracking-[0.1px] text-[var(--heading)]">
            Criar e Gerenciar Formulários
          </h1>
          <p className="mt-1.5 text-[15px] text-[color:rgba(15,23,42,.56)]">
            Escolha uma das opções abaixo para começar
          </p>
        </header>

        {/* Ações */}
        <section aria-label="Ações rápidas">
          <div className="panel-hero">
            <div className="panel-hero__inner">
              <ActionCards />
            </div>
          </div>
        </section>

        {/* Card: título + filtros + tabela + paginação */}
        <section
          aria-label="Lista de formulários"
          className="forms-card rounded-[12px] shadow-[var(--elev-1)] border border-[var(--card-border)] overflow-hidden"
          style={{ background: "#fff" }}
        >
          <div className="px-6 py-4">
            <h2 className="text-[18px] font-semibold text-[var(--heading)]">Formulários</h2>
          </div>

          <div className="filters-row px-6 py-4">
            <Filters />
          </div>

          <div className="px-6 py-4">
            <Table withTitlebar={false} />
          </div>

          <div className="panel__pagin">
            <nav className="pagination" aria-label="Paginação">
              <button type="button" className="page-link prev" aria-label="Voltar">
                <svg viewBox="0 0 24 24" className="caret" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                <span className="sr-only sm:not-sr-only">Voltar</span>
              </button>

              <div className="pages">
                <button type="button" className="page-btn is-current" aria-current="page">1</button>
                <button type="button" className="page-btn">2</button>
                <button type="button" className="page-btn">3</button>
                <button type="button" className="page-btn">4</button>
                <button type="button" className="page-btn">5</button>
                <button type="button" className="page-btn">6</button>
              </div>

              <button type="button" className="page-link next" aria-label="Próximo">
                <span className="sr-only sm:not-sr-only">Próximo</span>
                <svg viewBox="0 0 24 24" className="caret" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </nav>
          </div>
        </section>
      </div>
    </main>
  );
}
