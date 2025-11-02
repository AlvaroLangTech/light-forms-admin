// src/components/Filters.tsx
export default function Filters() {
  return (
    <section
      aria-label="Filtros"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {/* Macroprocesso */}
      <label className="flex flex-col">
        <span className="mb-1 text-[12px] font-medium text-[rgba(15,23,42,.55)]">
          Macroprocesso
        </span>
        <select
          className="filter-select w-full"
          defaultValue="Todos"
          aria-label="Macroprocesso"
        >
          <option>Todos</option>
          <option>Facilities</option>
          <option>Viagens</option>
          <option>Frota e Mobilidade</option>
        </select>
      </label>

      {/* Tipo */}
      <label className="flex flex-col">
        <span className="mb-1 text-[12px] font-medium text-[rgba(15,23,42,.55)]">
          Tipo
        </span>
        <select
          className="filter-select w-full"
          defaultValue="Todos"
          aria-label="Tipo"
        >
          <option>Todos</option>
          <option>Solicitante</option>
          <option>Aprovador</option>
        </select>
      </label>

      {/* Status */}
      <label className="flex flex-col">
        <span className="mb-1 text-[12px] font-medium text-[rgba(15,23,42,.55)]">
          Status
        </span>
        <select
          className="filter-select w-full"
          defaultValue="Todos"
          aria-label="Status"
        >
          <option>Todos</option>
          <option>Ativo</option>
          <option>Rascunho</option>
          <option>Arquivado</option>
        </select>
      </label>

      {/* Ordem */}
      <label className="flex flex-col">
        <span className="mb-1 text-[12px] font-medium text-[rgba(15,23,42,.55)]">
          Ordem
        </span>
        <select
          className="filter-select w-full"
          defaultValue="Mais recentes"
          aria-label="Ordem"
        >
          <option>Mais recentes</option>
          <option>Mais antigos</option>
        </select>
      </label>
    </section>
  );
}
