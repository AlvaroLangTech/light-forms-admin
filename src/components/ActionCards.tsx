export default function ActionCards() {
  return (
    <section
      className='flex items-center gap-6 bg-white rounded-2xl shadow-md p-6 mt-4'
      aria-label='Ações de criação'>
      {/* Card — Novo Formulário */}
      <button
        type='button'
        aria-label='Novo Formulário'
        className='group flex flex-col justify-center items-center w-[210px] h-[120px] rounded-xl border border-gray-200 bg-white hover:shadow-sm transition-all duration-200'>
        <span className='text-[24px] text-[var(--side)] leading-none mb-2 group-hover:scale-110 transition'>
          +
        </span>
        <strong className='text-[15px] font-semibold text-[var(--text)]'>
          Novo Formulário
        </strong>
        <span className='text-[13px] text-[var(--muted)] mt-[2px]'>
          Crie um formulário do zero
        </span>
      </button>

      {/* Card — Criar Macroprocesso */}
      <button
        type='button'
        aria-label='Criar Macroprocesso'
        className='group flex flex-col justify-center items-center w-[210px] h-[120px] rounded-xl border border-gray-200 bg-white hover:shadow-sm transition-all duration-200'>
        <span className='text-[24px] text-[var(--side)] leading-none mb-2 group-hover:scale-110 transition'>
          +
        </span>
        <strong className='text-[15px] font-semibold text-[var(--text)]'>
          Criar Macroprocesso
        </strong>
        <span className='text-[13px] text-[var(--muted)] mt-[2px]'>
          Organize etapas e fluxos
        </span>
      </button>
    </section>
  );
}
