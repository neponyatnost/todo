import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { createEditTask } from '../services/api'

export function useCreateTask() {
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: createEditTask,
    onSuccess: () => {
      toast.success('Task was successfully created.')
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      })
    },
    onError: (error: Error) => toast.error(error.message),
  })

  return { mutate, isPending }
}
