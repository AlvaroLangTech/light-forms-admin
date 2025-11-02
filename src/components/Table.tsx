type TableProps = { withTitlebar?: boolean };

export default function Table({ withTitlebar = true }: TableProps) {
  const rows: [string, string, string, string, string][] = [
    [
      'Mobiliário Extra / Manutenção de Mobiliário',
      'Facilities',
      'Solicitante',
      'Ativo',
      '12/05/2025',
    ],
    ['Manutenção Predial', 'Facilities', 'Solicitante', 'Ativo', '12/05/2025'],
    [
      'Ajuste de Temperatura do Ar Condicionado',
      'Facilities',
      'Aprovador',
      'Ativo',
      '12/05/2025',
    ],
    [
      'Entregas de Correios ou Malotes',
      'Viagens',
      'Aprovador',
      'Ativo',
      '12/05/2025',
    ],
    [
      'Descartar de Papéis, Papelão e Mobiliário',
      'Facilities',
      'Solicitante',
      'Ativo',
      '12/05/2025',
    ],
    [
      'Cadastro/Alteração/Inativação de Colaborador no Sistema de Viagens',
      'Viagens',
      'Aprovador',
      'Ativo',
      '12/05/2025',
    ],
    [
      'Suporte Exclusivo para Viagens Executivas',
      'Viagens',
      'Solicitante',
      'Ativo',
      '12/05/2025',
    ],
    [
      'Utilização de veículo do Pool (Marechal Floriano)',
      'Frota e Mobilidade',
      'Solicitante',
      'Ativo',
      '12/05/2025',
    ],
  ];

  return (
    <section className='table'>
      {withTitlebar && (
        <div className='px-6 py-4 border-b border-[var(--line)] bg-[#F9FAFB]'>
          <h2 className='text-[18px] font-semibold text-[var(--heading)]'>
            Formulários
          </h2>
        </div>
      )}

      <div className='overflow-x-auto'>
        <table className='min-w-full text-sm border-collapse'>
          <thead className='bg-[#F8F9FA] border-b border-[var(--line)]'>
            <tr>
              <th className='w-[38px] px-3 py-3 text-left'>
                <input type='checkbox' aria-label='Selecionar todos' />
              </th>
              <th className='px-3 py-3 text-left text-[13px] text-[var(--muted)] font-medium'>
                NOME DO FORMULÁRIO
              </th>
              <th className='px-3 py-3 text-left text-[13px] text-[var(--muted)] font-medium'>
                MACROPROCESSO
              </th>
              <th className='px-3 py-3 text-left text-[13px] text-[var(--muted)] font-medium'>
                TIPO
              </th>
              <th className='px-3 py-3 text-left text-[13px] text-[var(--muted)] font-medium'>
                STATUS
              </th>
              <th className='px-3 py-3 text-left text-[13px] text-[var(--muted)] font-medium'>
                ABERTURA
              </th>
              <th className='w-[60px] px-3 py-3 text-right text-[13px] text-[var(--muted)] font-medium'>
                Ações
              </th>
            </tr>
          </thead>

          <tbody className='divide-y divide-[var(--line)]'>
            {rows.map((r, i) => (
              <tr key={i} className='hover:bg-[#F9FAFB] transition-colors'>
                <td className='px-3 py-3 align-middle'>
                  <input
                    type='checkbox'
                    aria-label={`Selecionar linha ${i + 1}`}
                  />
                </td>
                <td className='px-3 py-3 text-[14px] text-[var(--text)]'>
                  {r[0]}
                </td>
                <td className='px-3 py-3 text-[14px] text-[var(--text)]'>
                  {r[1]}
                </td>
                <td className='px-3 py-3 text-[14px] text-[var(--text)]'>
                  {r[2]}
                </td>
                <td className='px-3 py-3'>
                  <span className='inline-block bg-[#E8F6EE] text-[#1F8A53] text-[12px] font-medium px-3 py-[2px] rounded-full'>
                    {r[3]}
                  </span>
                </td>
                <td className='px-3 py-3 text-[14px] text-[var(--text)]'>
                  {r[4]}
                </td>
                <td className='px-3 py-3 text-right'>
                  <button
                    aria-label='Mais ações'
                    className='text-[18px] text-[var(--muted)] hover:text-[var(--text)] transition'>
                    ⋮
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ==================== Paginação ==================== */}
      <div className='border-t border-[var(--line)] bg-white px-6 py-3 flex items-center justify-between'>
        <button
          className='text-[13px] text-[var(--muted)] hover:text-[var(--text)] transition'
          aria-label='Voltar'>
          ‹ Voltar
        </button>

        <div className='flex gap-2'>
          {[1, 2, 3, 4, 5, 6].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 rounded-md text-[13px] font-medium ${
                page === 1
                  ? 'bg-[var(--side)] text-white'
                  : 'text-[var(--muted)] hover:text-[var(--text)] hover:bg-[#F1F5F9]'
              } transition`}>
              {page}
            </button>
          ))}
        </div>

        <button
          className='text-[13px] text-[var(--muted)] hover:text-[var(--text)] transition'
          aria-label='Próximo'>
          Próximo ›
        </button>
      </div>
    </section>
  );
}
