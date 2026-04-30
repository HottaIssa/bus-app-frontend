import type { LoginFormData, RegisterFormData } from '../types/auth'

const BASE_URL = 'http://localhost:8080/api/auth'

export const loginService = async (data: LoginFormData) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (!res.ok) throw new Error('Error en login')

  return res.json()
}

export const registerService = async (data: RegisterFormData) => {
  const res = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (!res.ok) throw new Error('Error en register')

  return res.json()
}
