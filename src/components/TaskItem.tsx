import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDeleteTask } from '../hooks/useDeleteTask'
import { ITask } from '../types'
import { formatDistanceFromNow } from '../utils'

interface TaskItemProps {
  task: ITask
}

const TaskItem: FC<TaskItemProps> = ({ task }) => {
  const navigate = useNavigate()

  const { mutateAsync: deleteTask, isPending } = useDeleteTask(task.id)

  return (
    <div className='card bg-base-300 max-w-96 shadow-md shadow-slate-700 flex-auto'>
      <div className='card-body'>
        <h2 className='card-title'>{task.title}</h2>
        <p className='break-words'>{task.description}</p>
        <p className='text-sm text-gray-600'>
          {formatDistanceFromNow(task.created_at)}
        </p>
        <div className='card-actions justify-end items-center'>
          <p>{task.completed ? 'Completed' : 'Not completed'}</p>
          <button
            className='btn btn-info btn-sm'
            onClick={() => navigate(`/edit/${task.id}`)}
          >
            Edit
          </button>
          <button
            className='btn btn-error btn-sm'
            onClick={() => deleteTask()}
            disabled={isPending}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskItem
