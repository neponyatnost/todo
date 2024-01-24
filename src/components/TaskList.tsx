import { FC } from 'react'
import { useGetTasks } from '../hooks/useGetTasks'
import TaskItem from './TaskItem'

interface TaskListProps {}

const TaskList: FC<TaskListProps> = () => {
  const { data, error, isLoading } = useGetTasks()

  if (error) {
    throw new Error(error.message)
  }

  if (isLoading) {
    return <p>'Loading...'</p>
  }

  if (!data) {
    return <p>'There is no tasks yet.'</p>
  }

  return (
    <div className='max-w-7xl mx-auto flex gap-4 py-20 flex-wrap justify-start'>
      {data.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </div>
  )
}

export default TaskList
