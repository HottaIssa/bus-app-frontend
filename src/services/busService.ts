const BASE_URL = 'http://localhost:8080/api'

export const busService = async (id: string) => {
  const token = localStorage.getItem('token')

  const res = await fetch(`${BASE_URL}/bus/${id}`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  })

  if (!res.ok) throw new Error('Error al obtener bus')

  return res.json()
}

export const busesService = async (page: number, size: number) => {
  const token = localStorage.getItem('token')

  const res = await fetch(`${BASE_URL}/bus?page=${page}&size=${size}`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  })

  if (!res.ok) throw new Error('Error al obtener buses')

  return res.json()
}
