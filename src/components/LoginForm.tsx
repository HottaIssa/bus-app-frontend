import { useForm, type SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { loginService } from '../services/authService'
import type { LoginFormData } from '../types/auth'

function LoginForm() {
  const { saveToken } = useAuth()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>()
  const onSubmit: SubmitHandler<LoginFormData> = (data) => handleLogin(data)

  const handleLogin = async (data: LoginFormData) => {
    try {
      const response = await loginService(data)
      saveToken(response.token)
      navigate('/bus')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='form-container bg-gray-300 dark:bg-gray-700'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-4 w-full text-left'
      >
        <div>
          <label htmlFor='email'>Email</label>
          <input {...register('email', { required: true })} type='email' />
          {errors.email && <span className='error'>El email es requerido</span>}
        </div>
        <div>
          <label htmlFor='password'>Contraseña</label>
          <input
            {...register('password', { required: true })}
            type='password'
          />
          {errors.password && (
            <span className='error'>La contraseña es requerida</span>
          )}
        </div>

        <input type='submit' />
      </form>
    </div>
  )
}

export default LoginForm
