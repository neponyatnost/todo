import {
  PostgrestResponse,
  PostgrestSingleResponse,
} from '@supabase/supabase-js'
import { ITask } from '../types'
import supabase from './supabase'

export async function getTasks() {
  const { data, error }: PostgrestResponse<ITask> = await supabase
    .from('tasks')
    .select('*')

  if (error) {
    console.log(error.message)
    throw new Error(error.message)
  }

  return data
}

export async function deleteTask(id: string) {
  const { error } = await supabase.from('tasks').delete().eq('id', id)

  if (error) {
    console.log(error.message)
    throw new Error(error.message)
  }
}

export async function createEditTask(newTask: ITask, id?: string) {
  let query = id
    ? supabase
        .from('tasks')
        .update({ ...newTask })
        .eq('id', id)
    : supabase.from('tasks').insert([{ ...newTask }])

  const { data, error }: PostgrestSingleResponse<ITask | null> = await query
    .select()
    .single()

  if (error) {
    console.log(error.message)
    throw new Error(error.message)
  }

  return data
}

export async function getTaskById(id: string) {
  const { data, error }: PostgrestSingleResponse<ITask | null> = await supabase
    .from('tasks')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.log(error.message)
    throw new Error(error.message)
  }

  return data
}
