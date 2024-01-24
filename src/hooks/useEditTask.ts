import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { createEditTask } from '../services/api'
import { ITask } from '../types'

export function useEditTask() {
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: ({ newTaskData, id }: { newTaskData: ITask; id?: string }) =>
      createEditTask(newTaskData, id),
    onSuccess: () => {
      toast.success('Task was successfully edited.')
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      })
    },
    onError: (error: Error) => toast.error(error.message),
  })

  return { mutate, isPending }
}
