import editTask from '@/actions/edit-task'
import Error from '@/components/Error'
import Input from '@/components/Input'
import Select from '@/components/Select'
import Submit from '@/components/Submit'
import Textarea from '@/components/Textarea'
import { type AddTaskState, type Task } from '@/types/tasks'
import { useFormState } from 'react-dom'

const editTaskInitialState: AddTaskState = {
	name: [],
	priority: [],
	deadline: [],
	description: [],
}

export default function EditTask({ task }: { task: Task }) {
	const [formState, formAction] = useFormState(editTask, editTaskInitialState)

	return (
		<form
			className="flex w-60 flex-col rounded bg-theme-white p-4 xs:w-80"
			action={formAction}
		>
			<h1 className="mb-4 text-lg font-semibold text-theme-black xs:text-xl">
				Edit task
			</h1>
			<div className="mb-4 flex flex-col gap-4">
				<div className="flex flex-col gap-1">
					<Input
						errors={formState?.name}
						name="name"
						id="name"
						type="text"
						placeholder="Name..."
						autoComplete="off"
						defaultValue={task.name}
					/>
					{formState?.name.length > 0 && <Error>{formState?.name[0]}</Error>}
				</div>
				<div className="flex flex-col gap-1">
					<Select
						errors={formState?.priority}
						name="priority"
						id="priority"
						autoComplete="off"
						defaultValue={task.priority}
					>
						<option value="High">High</option>
						<option value="Medium">Medium</option>
						<option value="Low">Low</option>
					</Select>
					{formState?.priority.length > 0 && (
						<Error>{formState?.priority[0]}</Error>
					)}
				</div>
				<div className="flex flex-col gap-1">
					<Input
						errors={formState?.deadline}
						name="deadline"
						id="deadline"
						type="date"
						autoComplete="off"
						defaultValue={new Date(task.deadline).toISOString().slice(0, 10)}
					/>
					{formState?.deadline.length > 0 && (
						<Error>{formState?.deadline[0]}</Error>
					)}
				</div>
				<div className="flex flex-col gap-1">
					<Textarea
						errors={formState?.description}
						name="description"
						id="description"
						rows={4}
						placeholder="Description"
						autoComplete="off"
						defaultValue={task.description}
					/>
					{formState?.description.length > 0 && (
						<Error>{formState?.description[0]}</Error>
					)}
				</div>
			</div>
			<Submit>Send</Submit>
		</form>
	)
}
