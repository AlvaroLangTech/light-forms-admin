// src/components/Topbar.tsx
import logo from '../assets/img/light-logo.svg';

export default function Topbar() {
  return (
    <header className='topbar'>
      {/* Chevron fixo na junção topbar/sidebar */}
      <button className='topbar-toggle' aria-label='Alternar menu'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          viewBox='0 0 24 24'
          aria-hidden='true'>
          <path d='M15 18l-6-6 6-6' />
        </svg>
      </button>

      {/* Logo Light+ — posicionada via CSS (.topbar-brand) */}
      <div className='topbar-brand' aria-label='Light+'>
        <img src={logo} alt='Light+ logo' />
      </div>

      {/* Conteúdo da direita (busca + ações) */}
      <div className='flex items-center justify-between flex-1 pr-6'>
        {/* Busca */}
        <div className='flex-1 max-w-[640px]'>
          <label htmlFor='topbar-search' className='sr-only'>
            Buscar
          </label>
          <input
            id='topbar-search'
            type='search'
            placeholder='Busca'
            className='w-full h-[38px] px-4 rounded-lg border border-transparent text-[14px] focus:outline-none focus:ring-2 focus:ring-white/40 placeholder-white/70 bg-white/20 text-white'
          />
        </div>

        {/* Ações */}
        <div className='flex items-center gap-6 ml-6'>
          <button aria-label='Notificações'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-[20px] h-[20px] text-white/90'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
              />
            </svg>
          </button>

          <img
            src='https://i.pravatar.cc/40'
            alt='Avatar do usuário'
            className='w-8 h-8 rounded-full border-2 border-white/40'
          />
        </div>
      </div>
    </header>
  );
}
