import { type TaskResponse } from '@/types/tasks'
import { create } from 'zustand'

type TasksActions = {
	setTasks(tasks: TaskResponse): void // eslint-disable-line no-unused-vars
	resetTasks(): void
}

type TasksStore = {
	tasks: TaskResponse
} & TasksActions

const defaultInitState: TaskResponse = []

export const useTasksStore = create<TasksStore>((set) => ({
	tasks: defaultInitState,
	setTasks: (tasks) => set(() => ({ tasks })),
	resetTasks: () => set(() => ({ tasks: defaultInitState })),
}))
