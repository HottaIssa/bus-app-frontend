export interface Bus {
  id: string
  num: string
  placa: string
  createdAt: Date
  caracteristicas: string[]
  model: {
    id: string
    name: string
  }
  active: boolean
}

export interface Page<Bus> {
  content: Bus[]
  page: {
    size: number
    number: number
    totalElements: number
    totalPages: number
  }
}
