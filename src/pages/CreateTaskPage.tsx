import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import EditTask from '../components/EditTask'

interface CreateTaskPageProps {}

const CreateTaskPage: FC<CreateTaskPageProps> = () => {
  const navigate = useNavigate()

  return (
    <div className='mx-auto py-20 flex flex-col gap-8 w-full max-w-7xl'>
      <div>
        <button className='btn btn-info' onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
      <div className='w-full'>Create new task</div>
      <EditTask />
    </div>
  )
}

export default CreateTaskPage
