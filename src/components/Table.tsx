// src/components/Table.tsx
type TableProps = { withTitlebar?: boolean };

export default function Table({ withTitlebar = true }: TableProps) {
  const rows: [string, string, string, string, string][] = [
    ['Mobiliário Extra / Manutenção de Mobiliário', 'Facilities', 'Solicitante', 'Ativo', '12/05/2025'],
    ['Manutenção Predial', 'Facilities', 'Solicitante', 'Ativo', '12/05/2025'],
    ['Ajuste de Temperatura do Ar Condicionado', 'Facilities', 'Aprovador', 'Ativo', '12/05/2025'],
    ['Entregas de Correios ou Malotes', 'Viagens', 'Aprovador', 'Ativo', '12/05/2025'],
    ['Descartar de Papéis, Papelão e Mobiliário', 'Facilities', 'Solicitante', 'Ativo', '12/05/2025'],
    ['Cadastro/Alteração/Inativação de Colaborador no Sistema de Viagens', 'Viagens', 'Aprovador', 'Ativo', '12/05/2025'],
    ['Suporte Exclusivo para Viagens Executivas', 'Viagens', 'Solicitante', 'Ativo', '12/05/2025'],
    ['Utilização de veículo do Pool (Marechal Floriano)', 'Frota e Mobilidade', 'Solicitante', 'Ativo', '12/05/2025'],
  ];

  return (
    // Wrapper para aplicar as regras ".forms-card .table" do seu CSS
    <section className="forms-card">
      {/* Cabeçalho opcional da tabela (não usado no card principal) */}
      {withTitlebar && (
        <div className="px-6 py-4 border-b border-[var(--card-border)] bg-[#F8FAFC]">
          <h2 className="text-[18px] font-semibold text-[var(--heading)]">Formulários</h2>
        </div>
      )}

      {/* Container visual da tabela (classe .table é estilizada no CSS) */}
      <div className="table">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="w-[40px] px-3 py-3 text-left align-middle">
                  <input type="checkbox" aria-label="Selecionar todos" />
                </th>
                <th className="px-3 py-3 text-left text-[12px] font-semibold text-[rgba(15,23,42,.60)]">
                  NOME DO FORMULÁRIO
                </th>
                <th className="px-3 py-3 text-left text-[12px] font-semibold text-[rgba(15,23,42,.60)]">
                  MACROPROCESSO
                </th>
                <th className="px-3 py-3 text-left text-[12px] font-semibold text-[rgba(15,23,42,.60)]">
                  TIPO
                </th>
                <th className="px-3 py-3 text-left text-[12px] font-semibold text-[rgba(15,23,42,.60)]">
                  STATUS
                </th>
                <th className="px-3 py-3 text-left text-[12px] font-semibold text-[rgba(15,23,42,.60)]">
                  ABERTURA
                </th>
                <th className="w-[40px] px-3 py-3 text-center text-[12px] font-semibold text-transparent">
                  Ações
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="hover:bg-[#FAFBFC] transition-colors">
                  <td className="px-3 py-3 align-middle">
                    <input type="checkbox" aria-label={`Selecionar linha ${i + 1}`} />
                  </td>

                  <td className="px-3 py-3 text-[14px] text-[var(--text)]">
                    {r[0]}
                  </td>

                  <td className="px-3 py-3 text-[14px] text-[var(--text)]">
                    {r[1]}
                  </td>

                  <td className="px-3 py-3 text-[14px] text-[var(--text)]">
                    {r[2]}
                  </td>

                  <td className="px-3 py-3">
                    <span className="badge badge--ativo">{r[3]}</span>
                  </td>

                  <td className="px-3 py-3 text-[14px] text-[var(--text)]">
                    {r[4]}
                  </td>

                  <td className="px-3 py-3 text-center">
                    <button
                      aria-label="Mais ações"
                      className="text-[18px] text-[var(--muted)] hover:text-[var(--text)] transition"
                    >
                      ⋮
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ❌ Sem paginação aqui — ela fica fora, no FormsPage, colada ao card */}
    </section>
  );
}
