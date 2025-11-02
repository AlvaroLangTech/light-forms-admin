// src/components/Filters.tsx
export default function Filters() {
  return (
    <section aria-label="Filtros" className="filters">
      {/* Macroprocesso */}
      <label>
        <span className="label">Macroprocesso</span>
        <select defaultValue="Todos" aria-label="Macroprocesso">
          <option>Todos</option>
          <option>Facilities</option>
          <option>Viagens</option>
          <option>Frota e Mobilidade</option>
        </select>
      </label>

      {/* Tipo */}
      <label>
        <span className="label">Tipo</span>
        <select defaultValue="Todos" aria-label="Tipo">
          <option>Todos</option>
          <option>Solicitante</option>
          <option>Aprovador</option>
        </select>
      </label>

      {/* Status */}
      <label>
        <span className="label">Status</span>
        <select defaultValue="Todos" aria-label="Status">
          <option>Todos</option>
          <option>Ativo</option>
          <option>Rascunho</option>
          <option>Arquivado</option>
        </select>
      </label>

      {/* Ordem */}
      <label>
        <span className="label">Ordem</span>
        <select defaultValue="Mais recentes" aria-label="Ordem">
          <option>Mais recentes</option>
          <option>Mais antigos</option>
        </select>
      </label>
    </section>
  );
}
