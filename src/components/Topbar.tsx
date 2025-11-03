// src/components/Topbar.tsx
import logo from "../assets/img/light-logo.svg";

export default function Topbar() {
  return (
    <header className="topbar">
      {/* Chevron fixo na junção topbar/sidebar */}
      <button className="topbar-toggle" aria-label="Alternar menu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Logo Light+ — posicionada via CSS (.topbar-brand) */}
      <div className="topbar-brand" aria-label="Light+">
        <img src={logo} alt="Light+ logo" />
      </div>

      {/* Conteúdo da direita (busca + ações) */}
      <div className="flex items-center justify-between flex-1 pr-6">
        {/* Busca com lupa à direita */}
<div className="relative flex-1 max-w-[640px]">
  <label htmlFor="topbar-search" className="sr-only">Buscar</label>
  <input
    id="topbar-search"
    type="search"
    placeholder="Busca"
    className="
      w-full h-[38px] px-4 pr-12 rounded-lg
      border border-transparent text-[14px]
      focus:outline-none focus:ring-2 focus:ring-white/40
      placeholder-white/70 bg-white/20 text-white
      appearance-none
      relative z-0
    "
  />
  {/* Lupa fixa no canto direito (acima do input e visível em fundo branco) */}
  <span className="pointer-events-none absolute inset-y-0 right-3 grid place-items-center z-10">
    <svg
      aria-hidden="true"
      className="w-4 h-4 text-[#64748B]"   // cinza visível com input branco
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  </span>
</div>



        {/* Ações */}
        <div className="flex items-center gap-6 ml-6">
          {/* Notificações (com badge simples) */}
          <button aria-label="Notificações" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[20px] h-[20px] text-white/90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute -top-1 -right-1 grid place-items-center h-4 min-w-4 px-1 rounded-full bg-white text-[10px] font-bold text-[var(--top)]">
              9
            </span>
          </button>

          {/* Usuário: avatar + nome + seta */}
          <button
            type="button"
            className="flex items-center gap-2 text-white/95 hover:text-white transition"
            aria-label="Abrir menu do usuário"
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="Avatar do usuário"
              className="w-8 h-8 rounded-full border-2 border-white/40"
            />
            <span className="hidden sm:inline text-[14px] font-medium">
              Adalesio Watkins
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[16px] h-[16px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
