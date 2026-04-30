import { useNavigate } from 'react-router-dom'
import type { Bus } from '../types/bus'

function BusRow({ data }: { data: Bus }) {
  const navigate = useNavigate()

  return (
    <tr
      className='border-t border-gray-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700'
      onClick={() => navigate(`/bus/${data.id}`)}
    >
      <td>{data.num}</td>
      <td>{data.placa}</td>
      <td>{data.model.name}</td>
      <td>
        <span
          className={`px-2 py-1 rounded text-xs ${data.active ? 'bg-green-100 text-green-800 border border-green-800' : 'bg-red-100 text-red-800 border-red-800'}`}
        >
          {data.active ? 'Activo' : 'Inactivo'}
        </span>
      </td>
    </tr>
  )
}

export default BusRow
