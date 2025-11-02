// src/components/ActionCards.tsx


type ActionCardsProps = {
  onCreateForm?: () => void;
  onCreateMacro?: () => void;
};

export default function ActionCards({
  onCreateForm,
  onCreateMacro,
}: ActionCardsProps) {
  return (
    <div
      className="
        grid grid-cols-1 sm:grid-cols-2
        gap-8 md:gap-10
        items-stretch
      "
    >
      {/* Novo Formulário */}
      <button
        type="button"
        className="action-card"
        aria-label="Novo Formulário"
        onClick={onCreateForm}
      >
        <span className="action-card__chip" aria-hidden="true">+</span>
        <span className="action-card__text">
          <span className="action-card__title">Novo Formulário</span>
          <span className="action-card__desc">Crie um formulário do zero</span>
        </span>
      </button>

      {/* Criar Macroprocesso */}
      <button
        type="button"
        className="action-card"
        aria-label="Criar Macroprocesso"
        onClick={onCreateMacro}
      >
        <span className="action-card__chip" aria-hidden="true">+</span>
        <span className="action-card__text">
          <span className="action-card__title">Criar Macroprocesso</span>
          <span className="action-card__desc">Organize etapas e fluxos</span>
        </span>
      </button>
    </div>
  );
}
