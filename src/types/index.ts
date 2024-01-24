export interface ITask {
  id: string
  created_at: string
  title: string
  description?: string
  completed: boolean
  status: 'created' | 'in-process' | 'rejected' | 'deleted'
}
