import React from "react";

type FooterLink = { label: string; href: string };

type SiteFooterProps = {
  links?: FooterLink[];
  companyName?: string;
};

export default function SiteFooter({
  links = [
    { label: "Política de Privacidade", href: "#" },
    { label: "Políticas de Segurança", href: "#" },
    { label: "Gestão de Cookies", href: "#" },
  ],
  companyName = "Light Serviços de Eletricidade S/A",
}: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo" aria-label="Rodapé do sistema">
      <div className="site-footer__wrap">
        <span>
          {companyName} © {year} - Todos os direitos reservados
        </span>

        <nav aria-label="Links do rodapé" className="site-footer__links">
          {links.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
