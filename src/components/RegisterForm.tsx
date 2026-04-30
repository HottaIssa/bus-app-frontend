import { useForm, type SubmitHandler } from 'react-hook-form'
import { useAuth } from '../hooks/useAuth'
import { registerService } from '../services/authService'
import { useNavigate } from 'react-router-dom'
import type { RegisterFormData } from '../types/auth'

function RegisterForm() {
  const navigate = useNavigate()
  const { saveToken } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormData>()
  const onSubmit: SubmitHandler<RegisterFormData> = (data: RegisterFormData) =>
    handleRegister(data)

  const handleRegister = async (data: RegisterFormData) => {
    try {
      const response = await registerService(data)
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
          <label htmlFor='name'>Nombre</label>
          <input {...register('name', { required: true })} />
          {errors.name && <span className='error'>El nombre es requerido</span>}
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

export default RegisterForm
