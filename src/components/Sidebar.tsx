// src/components/Sidebar.tsx
import { useState } from 'react';

type NavItem = {
  label: string;
  icon?: JSX.Element;
  active?: boolean;
  onClick?: () => void;
};

type NavGroup = {
  title: string;
  items: (NavItem | Submenu)[];
};

type Submenu = {
  label: string;
  icon?: JSX.Element;
  openByDefault?: boolean;
  children: NavItem[];
};

function Chev({ open }: { open: boolean }) {
  return (
    <svg
      className={`chev ${open ? 'is-open' : ''}`}
      width='16'
      height='16'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'>
      <polyline points='9 18 15 12 9 6' />
    </svg>
  );
}

/* Ícones simples (inline SVG) */
const IcHome = (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'>
    <path d='M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-10.5z' />
  </svg>
);
const IcForm = (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'>
    <rect x='3' y='4' width='18' height='16' rx='2' />
    <path d='M7 8h10M7 12h7M7 16h5' />
  </svg>
);
const IcCog = (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'>
    <path d='M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z' />
    <path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 7.03 3.3l.06.06c.49.49 1.2.64 1.82.33A1.65 1.65 0 0 0 10.4 2.2V2a2 2 0 1 1 4 0v.09c0 .67.39 1.28 1 1.51.62.31 1.33.16 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82c.31.62.84 1 1.51 1H21a2 2 0 1 1 0 4h-.09c-.67 0-1.28.39-1.51 1Z' />
  </svg>
);
const IcFolder = (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'>
    <path d='M3 7h5l2 2h11v9a2 2 0 0 1-2 2H3z' />
  </svg>
);

/* Estrutura da navegação (exemplo coerente com Light+ Forms) */
const NAV: NavGroup[] = [
  {
    title: 'Navegação',
    items: [
      { label: 'Visão Geral', icon: IcHome },
      {
        label: 'Criar e Gerenciar',
        icon: IcForm,
        active: true, // página atual
      },
    ],
  },
  {
    title: 'Formulários',
    items: [
      {
        label: 'Catálogos',
        icon: IcFolder,
        openByDefault: true,
        children: [
          { label: 'Facilities' },
          { label: 'Viagens' },
          { label: 'TI' },
          { label: 'Compras' },
        ],
      },
      {
        label: 'Meus Itens',
        icon: IcFolder,
        openByDefault: false,
        children: [
          { label: 'Favoritos' },
          { label: 'Rascunhos' },
          { label: 'Arquivados' },
        ],
      },
    ],
  },
  {
    title: 'Administração',
    items: [{ label: 'Configurações', icon: IcCog }],
  },
];

export default function Sidebar() {
  // controla o estado aberto/fechado por label (estável e simples)
  const initialOpens = new Map<string, boolean>();
  NAV.forEach((g) =>
    g.items.forEach((it) => {
      if ('children' in (it as Submenu)) {
        const sm = it as Submenu;
        initialOpens.set(sm.label, !!sm.openByDefault);
      }
    }),
  );

  const [openMap, setOpenMap] = useState<Map<string, boolean>>(initialOpens);

  function toggle(label: string) {
    setOpenMap((prev) => {
      const next = new Map(prev);
      next.set(label, !prev.get(label));
      return next;
    });
  }

  return (
    <aside className='sidebar' aria-label='Barra lateral de navegação'>
      <nav>
        {NAV.map((group) => (
          <div key={group.title}>
            <h2>{group.title}</h2>

            <ul>
              {group.items.map((item) => {
                // Submenu
                if ('children' in (item as Submenu)) {
                  const sm = item as Submenu;
                  const isOpen = !!openMap.get(sm.label);

                  return (
                    <li key={sm.label}>
                      <button
                        type='button'
                        onClick={() => toggle(sm.label)}
                        aria-expanded={isOpen}
                        aria-controls={`submenu-${sm.label}`}>
                        <span className='flex items-center gap-2'>
                          {sm.icon ?? IcFolder}
                          <span>{sm.label}</span>
                        </span>
                        <Chev open={isOpen} />
                      </button>

                      {isOpen && (
                        <ul id={`submenu-${sm.label}`}>
                          {sm.children.map((ch) => (
                            <li key={ch.label}>
                              <a
                                href='#'
                                aria-current={ch.active ? 'page' : undefined}>
                                <span>{ch.label}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                // Item simples
                const it = item as NavItem;
                const cls = it.active ? 'is-active' : undefined;

                return (
                  <li key={it.label}>
                    <a
                      href='#'
                      className={cls}
                      aria-current={it.active ? 'page' : undefined}>
                      <span className='flex items-center gap-2'>
                        {it.icon ?? IcFolder}
                        <span>{it.label}</span>
                      </span>
                      {/* espaço para badge/contador futuro */}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
