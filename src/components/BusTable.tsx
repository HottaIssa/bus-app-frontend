import { useState } from 'react'
import { useBuses } from '../hooks/useBuses.ts'
import BusRow from './BusRow'

function BusTable() {
  const [page, setPage] = useState<number>(0)
  const size = 10
  const { data, totalPages, loading } = useBuses(page, size)

  if (loading) return <p>Cargando...</p>

  if (!data || data.length === 0) {
    return <p>No hay buses</p>
  }

  return (
    <div className='w-full text-sm'>
      <table className='w-full text-left'>
        <thead>
          <tr className='bg-fuchsia-200 text-gray-800 dark:bg-fuchsia-700 dark:text-fuchsia-50'>
            <th>N°</th>
            <th>PLACA</th>
            <th>MODELO</th>
            <th>ESTADO</th>
          </tr>
        </thead>
        <tbody>
          {!data || data.length === 0 ? (
            <tr>
              <td colSpan={4} className='text-center py-4'>
                No hay buses
              </td>
            </tr>
          ) : (
            data.map((bus) => <BusRow key={bus.id} data={bus} />)
          )}
        </tbody>
      </table>
      {totalPages > 1 && (
        <div className='flex justify-center gap-4 mt-4 items-center'>
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 0}
            className='px-3 py-1 cursor-pointer text-fuchsia-700 rounded border border-fuchsia-700 hover:bg-fuchsia-700 hover:text-white  '
          >
            Anterior
          </button>
          <span>
            Página {page + 1} de {totalPages}
          </span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages - 1}
            className='px-3 py-1 cursor-pointer text-fuchsia-700 rounded border border-fuchsia-700 hover:bg-fuchsia-700 hover:text-white '
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  )
}

export default BusTable
