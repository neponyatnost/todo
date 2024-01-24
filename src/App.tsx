import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import CreateTaskPage from './pages/CreateTaskPage'
import EditTaskPage from './pages/EditTaskPage'
import TasksPage from './pages/TasksPage'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<TasksPage />} />
            <Route path={'/edit/:id'} element={<EditTaskPage />} />
            <Route path={'/create'} element={<CreateTaskPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position='bottom-center' containerStyle={{}} />
    </QueryClientProvider>
  )
}

export default App
