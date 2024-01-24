import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EditTask from '../components/EditTask'
import { useGetTaskById } from '../hooks/useGetTaskById'

interface EditTaskPageProps {}

const EditTaskPage: FC<EditTaskPageProps> = () => {
  const { id } = useParams()

  const { data: task, error, isLoading } = useGetTaskById(id || '')

  const navigate = useNavigate()

  if (!id) {
    return null
  }

  if (isLoading) {
    return <h3>Loading...</h3>
  }

  if (error) {
    return <h3>{error.message}</h3>
  }

  return (
    <div className='mx-auto py-20 flex flex-col gap-8 w-full max-w-7xl'>
      <div>
        <button className='btn btn-info' onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
      <div className='w-full'>
        Edit task ID: <strong>{id}</strong>
      </div>
      <EditTask taskToEdit={task} />
    </div>
  )
}

export default EditTaskPage
