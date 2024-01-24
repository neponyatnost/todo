import { useQuery } from '@tanstack/react-query'
import { getTasks } from '../services/api'

export function useGetTasks() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  })

  return { data, error, isLoading }
}
