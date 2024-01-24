import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useCreateTask } from '../hooks/useCreateTask'
import { useEditTask } from '../hooks/useEditTask'
import { ITask } from '../types'

interface EditTaskProps {
  taskToEdit?: ITask | null | undefined
}

const EditTask: FC<EditTaskProps> = ({ taskToEdit }) => {
  const { id: editId, ...editValues } = taskToEdit
    ? taskToEdit
    : { id: undefined }

  const isEditSession = Boolean(editId)

  const { register, handleSubmit, reset } = useForm<ITask>({
    defaultValues: isEditSession ? editValues : {},
  })

  const navigate = useNavigate()

  const { mutate: createTask, isPending: isCreating } = useCreateTask()

  const { mutate: editTask, isPending: isEditing } = useEditTask()

  const onSubmit: SubmitHandler<ITask> = (data: ITask) => {
    if (isEditSession) {
      editTask(
        {
          newTaskData: { ...data },
          id: editId,
        },
        {
          onSuccess: () => {
            reset()
          },
        }
      )
    } else {
      createTask(
        {
          ...data,
        },
        {
          onSuccess: () => {
            reset()
          },
        }
      )
    }

    navigate(-1)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-4 py-6'
    >
      <label className='flex flex-col items-start gap-2' htmlFor='title'>
        Title
        <input
          className='input input-bordered input-primary w-full max-w-xl'
          type='text'
          id='title'
          disabled={isCreating || isEditing}
          {...register('title', { required: 'This field is required' })}
        />
      </label>
      <label className='flex flex-col items-start gap-2' htmlFor='description'>
        Description
        <textarea
          className='input input-bordered input-primary w-full max-w-xl'
          // type='text'
          id='description'
          disabled={isCreating || isEditing}
          {...register('description')}
        />
      </label>
      {/* <label className='flex flex-col items-start gap-2' htmlFor='status'>
        Status
        <input
          className='input input-bordered input-primary w-full max-w-xl'
          type='text'
          id='status'
          placeholder='"created" & "in-process" & "rejected" & "deleted"'
          disabled={isCreating || isEditing}
          {...register('status')}
        />
      </label> */}
      <label className='flex flex-col items-start gap-2' htmlFor='completed'>
        Complete
        <input
          type='checkbox'
          id='completed'
          disabled={isCreating || isEditing}
          {...register('completed')}
        />
      </label>
      <button
        className='btn btn-success max-w-40'
        disabled={isCreating || isEditing}
        type='submit'
      >
        {isEditSession ? 'Edit task' : 'Create task'}
      </button>
    </form>
  )
}

export default EditTask
