// src/FormsPage.tsx
import { useState } from "react";
import ActionCards from "./components/ActionCards";
import Filters from "./components/Filters";
import Table from "./components/Table";

export default function FormsPage() {
  const [page, setPage] = useState<number>(1);
  const totalPages = 12; // exemplo

  // sequência fixa: 1..6, depois "…"
  const displayPages: (number | "...")[] =
    totalPages <= 6
      ? Array.from({ length: totalPages }, (_, i) => i + 1)
      : [1, 2, 3, 4, 5, 6, "..."];

  const goto = (p: number) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    // fetch da tabela por página (se precisar)
  };

  return (
    <main className="main-encostado">
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

          {/* Paginação colada ao card */}
          <div className="panel__pagin">
            <nav className="pagination" aria-label="Paginação">
              {/* Prev */}
              <button
                type="button"
                className="page-link prev"
                aria-label="Voltar"
                onClick={() => goto(page - 1)}
                disabled={page === 1}
              >
                <svg viewBox="0 0 24 24" className="caret" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                <span className="sr-only sm:not-sr-only">Voltar</span>
              </button>

              {/* Números 1..6 + “…” */}
              <div className="pages">
                {displayPages.map((it, idx) =>
                  it === "..." ? (
                    <span key={`e-${idx}`} className="page-ellipsis" aria-hidden="true">
                      …
                    </span>
                  ) : (
                    <button
                      key={it}
                      type="button"
                      className={`page-btn ${it === page ? "is-current" : ""}`}
                      aria-current={it === page ? "page" : undefined}
                      onClick={() => goto(it as number)}
                    >
                      {it}
                    </button>
                  )
                )}
              </div>

              {/* Next */}
              <button
                type="button"
                className="page-link next"
                aria-label="Próximo"
                onClick={() => goto(page + 1)}
                disabled={page === totalPages}
              >
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
