export type AddTaskState = {
	name: string[]
	priority: string[]
	deadline: string[]
	description: string[]
}

export type Task = {
	id: string
	name: string
	priority: string
	deadline: Date
	description: string
}

export type TaskResponse = Task[]

export type ErrorResponse = {
	detail: string
}
