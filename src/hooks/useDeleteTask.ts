import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { deleteTask } from '../services/api'

export function useDeleteTask(id: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['tasks', id],
    mutationFn: () => deleteTask(id),
    onSuccess: () => {
      toast.success('Task was successfully deleted.')
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      })
    },
  })
}
