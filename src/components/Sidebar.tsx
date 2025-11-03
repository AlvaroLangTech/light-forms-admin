// src/components/Sidebar.tsx
import React, { useState, type ReactNode } from "react";

/* ---------- Tipos ---------- */
type NavItem = {
  label: string;
  icon?: ReactNode;
  active?: boolean;
  href?: string;
  onClick?: () => void;
};

type NavGroup = {
  title: string;
  openByDefault?: boolean; // grupos com filhos (Admin Center, etc.)
  items: NavItem[];        // filhos simples (sem sub-submenus)
};

/* ---------- Ícones inline (18px) ---------- */
const IcHome = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-10.5z" />
  </svg>
);
const IcGroup = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 11c1.657 0 3-1.79 3-4s-1.343-4-3-4-3 1.79-3 4 1.343 4 3 4Z" />
    <path d="M10 14c-2.761 0-5 1.79-5 4v3h16v-3c0-2.21-2.239-4-5-4h-6Z" />
    <circle cx="6" cy="7" r="3" />
  </svg>
);
const IcFolder = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 7h5l2 2h11v9a2 2 0 0 1-2 2H3z" />
  </svg>
);
const IcGear = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 1 1 4.4 16.82l.06-.06A1.65 1.65 0 0 0 4.79 15 1.65 1.65 0 0 0 3.28 14H3a2 2 0 1 1 0-4h.09c.67 0 1.28-.39 1.51-1 .31-.62.16-1.33-.33-1.82l-.06-.06A2 2 0 1 1 7.03 3.3l.06.06c.49.49 1.2.64 1.82.33A1.65 1.65 0 0 0 10.4 2.2V2a2 2 0 1 1 4 0v.09c0 .67.39 1.28 1 1.51.62.31 1.33.16 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.49.49-.64 1.2-.33 1.82.31.62.84 1 1.51 1H21a2 2 0 1 1 0 4h-.09c-.67 0-1.28.39-1.51 1Z" />
  </svg>
);

/* ---------- Chevron ---------- */
function Chev({ open }: { open: boolean }) {
  return (
    <svg
      className={`chev ${open ? "is-open" : ""}`}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

/* ---------- Navegação (ordem idêntica à referência) ---------- */
const NAV: (NavItem | NavGroup)[] = [
  // nível 1 — sem submenu
  { label: "Home", icon: IcHome },

  // grupos (com setas e filhos)
  {
    title: "Admin Center",
    openByDefault: true,
    items: [
      { label: "Gerenciar Equipe", icon: IcGroup },
      { label: "Usuários", icon: IcGroup },
      { label: "Grupos", icon: IcGroup },
      { label: "Relacionamento", icon: IcGroup },
      { label: "SLA", icon: IcGroup }
    ]
  },
  {
    title: "Comunicação",
    openByDefault: true,
    items: [
      { label: "Light News", icon: IcFolder },
      { label: "Light TV", icon: IcFolder },
      { label: "Banner", icon: IcFolder },
      { label: "Parcerias", icon: IcFolder },
      { label: "Benefícios", icon: IcFolder },
      { label: "Shopping", icon: IcFolder },
      { label: "Notificações", icon: IcFolder }
    ]
  },
  {
    title: "Solicitação de serviços",
    openByDefault: true,
    items: [
      { label: "Criar solicitação", icon: IcFolder },
      { label: "Minhas solicitações", icon: IcFolder },
      { label: "Aprovação pendente", icon: IcFolder },
      { label: "Execução pendente", icon: IcFolder }
    ]
  },
  {
    title: "Convênios",
    openByDefault: true,
    items: [
      { label: "Parceiros", icon: IcFolder },
      { label: "Benefícios", icon: IcFolder },
      { label: "Shopping", icon: IcFolder },
      { label: "Enviar indicação", icon: IcFolder }
    ]
  },
  {
    title: "Ajuda e Feedback",
    openByDefault: true,
    items: [
      { label: "Dúvidas e Sugestões", icon: IcFolder },
      { label: "Código de Ética", icon: IcFolder },
      { label: "Canal de Denúncias", icon: IcFolder },
      { label: "Políticas de Segurança", icon: IcFolder },
      { label: "FAQ", icon: IcFolder }
    ]
  },
];

/* ---------- Componente ---------- */
export default function Sidebar() {
  // estado dos grupos (abre/fecha) por título
  const init = new Map<string, boolean>();
  NAV.forEach((g) => {
    if ("title" in (g as any)) {
      const gg = g as NavGroup;
      init.set(gg.title, !!gg.openByDefault);
    }
  });
  const [openMap, setOpenMap] = useState<Map<string, boolean>>(init);
  const toggle = (title: string) =>
    setOpenMap((prev) => {
      const next = new Map(prev);
      next.set(title, !prev.get(title));
      return next;
    });

  return (
    <aside className="sidebar" aria-label="Barra lateral de navegação">
      <nav>
        {/* Home (nível 1 sem submenu) */}
        <ul className="mb-2">
          {NAV.filter((x) => !("title" in (x as any))).map((it) => {
            const item = it as NavItem;
            return (
              <li key={item.label}>
                <a href="#" className="sidebar__item" aria-current={item.active ? "page" : undefined}>
                  <span className="flex items-center gap-3">
                    {item.icon ?? IcFolder}
                    <span>{item.label}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Grupos com filhos */}
        {NAV.filter((x) => "title" in (x as any)).map((group) => {
          const g = group as NavGroup;
          const isOpen = !!openMap.get(g.title);
          return (
            <section className="group" key={g.title}>
              <h2 className="group__title">
                <button
                  type="button"
                  className="group__btn"
                  onClick={() => toggle(g.title)}
                  aria-expanded={isOpen}
                  aria-controls={`grp-${g.title}`}
                >
                  <span>{g.title}</span>
                  <Chev open={isOpen} />
                </button>
              </h2>

              {isOpen && (
                <ul id={`grp-${g.title}`} className="group__children">
                  {g.items.map((it) => (
                    <li key={it.label}>
                      {/* Filhos SEM ícone: o CSS já faz o recuo e mostra o trilho atrás */}
                      <a href="#" className="sidebar__item">
                        <span className="flex items-center gap-3">
                          <span>{it.label}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </nav>
    </aside>
  );
}
