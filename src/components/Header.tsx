import { useAuth } from '../hooks/useAuth'

function Header({ title }: { title: string }) {
  const { logout } = useAuth()

  return (
    <header className='flex w-full justify-between h-8 items-center p-4'>
      <span className='font-bold'>{title}</span>

      <button
        onClick={logout}
        className='cursor-pointer text-sm text-gray-500 hover:text-fuchsia-700'
      >
        Cerrar Sesión
      </button>
    </header>
  )
}

export default Header
