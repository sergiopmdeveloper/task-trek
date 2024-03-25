import * as Z from 'zod'

export const AddTaskSchema = Z.object({
	name: Z.string().min(1, 'Required'),
	priority: Z.string().min(1, 'Required'),
	deadline: Z.string().min(1, 'Required'),
	description: Z.string().min(1, 'Required'),
})
