import { useNavigate, useParams } from 'react-router-dom'
import type { Bus } from '../types/bus'
import { useBus } from '../hooks/useBus'
import './BusDetail.css'

export default function Bus() {
  const navigate = useNavigate()
  const id = useParams().id
  const { data } = useBus(id!)

  return (
    <div className='flex flex-col items-center gap-4'>
      <h1>Detalles del Bus</h1>
      <div className='flex  flex-col text-left border border-gray-500 w-86 sm:w-1/2 py-4 px-8 rounded-lg shadow-md gap-4 dark:shadow-md dark:shadow-gray-700 dark:bg-[#1c222f]'>
        <div className='flex gap-2'>
          <div className='details dark:bg-[#141a28]'>
            <p className='dark:text-gray-300'>N° de Bus</p>
            <span>{data?.num}</span>
          </div>
          <div className='details dark:bg-[#141a28]'>
            <p className='dark:text-gray-300'>Placa</p>
            <span>{data?.placa}</span>
          </div>
        </div>
        <div className='flex gap-2'>
          <div className='details dark:bg-[#141a28]'>
            <p className='dark:text-gray-300'>Modelo</p>
            <span>{data?.model.name}</span>
          </div>
          <div className='details dark:bg-[#141a28]'>
            <p className='dark:text-gray-300'>Estado</p>
            <span
              className={` w-fit px-2 py-1 text-sm rounded ${data?.active ? 'bg-green-100 text-green-800 border border-green-800' : 'bg-red-100 text-red-800 border-red-800'}`}
            >
              {data?.active ? 'Activo' : 'Inactivo'}
            </span>
          </div>
        </div>
        <div className='details dark:bg-[#141a28]'>
          <p className='dark:text-gray-300'>Fecha de registro</p>
          <span>
            {data?.createdAt
              ? new Date(data.createdAt).toLocaleDateString()
              : 'N/A'}
          </span>
        </div>
      </div>
      <a
        onClick={() => navigate('/bus')}
        className='hover:text-fuchsia-700 cursor-pointer'
      >
        ← Volver
      </a>
    </div>
  )
}
