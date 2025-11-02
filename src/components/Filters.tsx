export default function Filters() {
  return (
    <section className='flex flex-wrap items-end gap-4' aria-label='Filtros'>
      {/* ==================== Macroprocesso ==================== */}
      <label className='flex flex-col text-[13px] text-[var(--muted)]'>
        <span className='mb-[4px] font-medium'>Macroprocesso</span>
        <select className='w-[220px] h-[38px] rounded-lg border border-[var(--line)] bg-white px-3 text-[14px] text-[var(--text)] focus:outline-none focus:ring-1 focus:ring-[var(--side)]'>
          <option>Todos</option>
          <option>Facilities</option>
          <option>Viagens</option>
          <option>Frota e Mobilidade</option>
        </select>
      </label>

      {/* ==================== Tipo ==================== */}
      <label className='flex flex-col text-[13px] text-[var(--muted)]'>
        <span className='mb-[4px] font-medium'>Tipo</span>
        <select className='w-[220px] h-[38px] rounded-lg border border-[var(--line)] bg-white px-3 text-[14px] text-[var(--text)] focus:outline-none focus:ring-1 focus:ring-[var(--side)]'>
          <option>Todos</option>
          <option>Solicitante</option>
          <option>Aprovador</option>
        </select>
      </label>

      {/* ==================== Status ==================== */}
      <label className='flex flex-col text-[13px] text-[var(--muted)]'>
        <span className='mb-[4px] font-medium'>Status</span>
        <select className='w-[220px] h-[38px] rounded-lg border border-[var(--line)] bg-white px-3 text-[14px] text-[var(--text)] focus:outline-none focus:ring-1 focus:ring-[var(--side)]'>
          <option>Todos</option>
          <option>Ativo</option>
          <option>Rascunho</option>
          <option>Arquivado</option>
        </select>
      </label>

      {/* ==================== Ordem ==================== */}
      <label className='flex flex-col text-[13px] text-[var(--muted)]'>
        <span className='mb-[4px] font-medium'>Ordem</span>
        <select className='w-[220px] h-[38px] rounded-lg border border-[var(--line)] bg-white px-3 text-[14px] text-[var(--text)] focus:outline-none focus:ring-1 focus:ring-[var(--side)]'>
          <option>Mais recentes</option>
          <option>Mais antigos</option>
        </select>
      </label>
    </section>
  );
}
