import { useEffect, useState } from 'react'
import { busesService } from '../services/busService'
import type { Bus, Page } from '../types/bus'

export const useBuses = (page: number, size: number) => {
  const [data, setData] = useState<Bus[]>([])
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true)

    busesService(page, size)
      .then((res: Page<Bus>) => {
        setData(res.content)
        setTotalPages(res.page.totalPages)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [page, size])

  return { data, totalPages, loading }
}
