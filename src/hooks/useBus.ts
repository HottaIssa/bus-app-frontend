import { useEffect, useState } from 'react'
import { busService } from '../services/busService'
import type { Bus } from '../types/bus'

export const useBus = (id: string) => {
  const [data, setData] = useState<Bus>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true)

    busService(id)
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [id])

  return { data, loading }
}
