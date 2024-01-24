import { useQuery } from '@tanstack/react-query'
import { getTaskById } from '../services/api'

export function useGetTaskById(taskId: string) {
  const { data, error, isLoading } = useQuery({
    queryKey: ['task', taskId],
    queryFn: () => getTaskById(taskId),
    retry: false,
  })

  return { data, error, isLoading }
}
