// src/FormsPage.tsx
import ActionCards from './components/ActionCards';
import Filters from './components/Filters';
import Table from './components/Table';

export default function FormsPage() {
  return (
    // respeita a sidebar fixa e a topbar fixa (usa var CSS)
    <main className='ml-[var(--sidebar-w)] pt-[var(--topbar-h)] pb-8 bg-[var(--bg)] min-h-screen'>
      <div className='max-w-[1100px] mx-auto space-y-6 px-8'>
        {/* Cabeçalho */}
        <header aria-label='Cabeçalho da página'>
          <h1 className='text-[26px] font-semibold text-[var(--heading)] leading-[1.3]'>
            Criar e Gerenciar Formulários
          </h1>
          <p className='text-[15px] text-[var(--muted)] mt-[4px]'>
            Escolha uma das opções abaixo para começar
          </p>
        </header>

        {/* Painel de Ações */}
        <section aria-label='Ações rápidas'>
          <div className='bg-white rounded-2xl shadow-md p-6'>
            <ActionCards />
          </div>
        </section>

        {/* Painel de Formulários */}
        <section
          aria-label='Lista de formulários'
          className='bg-white rounded-2xl shadow-sm border border-[var(--line)] overflow-hidden'>
          {/* Cabeçalho do card */}
          <div className='px-6 py-4 border-b border-[var(--line)]'>
            <h2 className='text-[18px] font-semibold text-[var(--heading)]'>
              Formulários
            </h2>
          </div>

          {/* Filtros */}
          <div className='px-6 py-4 border-b border-[var(--line)] bg-[#F9FAFB]'>
            <Filters />
          </div>

          {/* Tabela */}
          <div className='px-6 py-4'>
            <Table withTitlebar={false} />
          </div>
        </section>

        {/* Rodapé */}
        <footer
          aria-label='Rodapé'
          className='text-center text-[13px] text-[var(--muted)] mt-10 pt-4 border-t border-[var(--line)]'>
          Light Serviços de Eletricidade S/A © 2025 — Todos os direitos
          reservados · Política de Privacidade · Gestão de Cookies
        </footer>
      </div>
    </main>
  );
}
