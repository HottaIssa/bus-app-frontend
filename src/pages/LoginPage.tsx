import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm'

function Login() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
      <span className='text-sm mt-4 block'>
        No estas registrado?{' '}
        <a
          className='underline cursor-pointer hover:text-blue-500'
          onClick={() => navigate('/register')}
        >
          Registrate
        </a>
      </span>
    </div>
  )
}

export default Login
