import { useNavigate } from 'react-router-dom'
import RegisterForm from '../components/RegisterForm'

function Register() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Register</h1>
      <RegisterForm />
      <span className='text-sm mt-4 block'>
        Estas registrado?{' '}
        <a
          className='underline cursor-pointer hover:text-blue-500'
          onClick={() => navigate('/login')}
        >
          Inicia sesion
        </a>
      </span>
    </div>
  )
}

export default Register
