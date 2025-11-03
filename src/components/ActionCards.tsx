// src/components/ActionCards.tsx
type ActionCardsProps = {
  onCreateForm?: () => void;
  onCreateMacro?: () => void;
};

export default function ActionCards({ onCreateForm, onCreateMacro }: ActionCardsProps) {
  return (
    <div
      className="
        grid grid-cols-1 sm:grid-cols-2
        gap-8 md:gap-10 items-stretch
      "
    >
      {/* Novo Formulário */}
      <button
        type="button"
        className="action-card focus:outline-none"
        aria-label="Novo Formulário"
        onClick={onCreateForm}
      >
        <span className="action-card__chip" aria-hidden="true">
          {/* ícone + (stroke) */}
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>

        <span className="action-card__text">
          <span className="action-card__title">Novo Formulário</span>
          <span className="action-card__desc">Crie um formulário do zero</span>
        </span>
      </button>

      {/* Criar Macroprocesso */}
      <button
        type="button"
        className="action-card focus:outline-none"
        aria-label="Criar Macroprocesso"
        onClick={onCreateMacro}
      >
        <span className="action-card__chip" aria-hidden="true">
          {/* ícone grid/fluxo */}
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
            <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
            <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
            <path d="M10 6h4M6.5 10v4M17.5 10v4M10 17h4" strokeLinecap="round"></path>
          </svg>
        </span>

        <span className="action-card__text">
          <span className="action-card__title">Criar Macroprocesso</span>
          <span className="action-card__desc">Organize etapas e fluxos</span>
        </span>
      </button>
    </div>
  );
}
