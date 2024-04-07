import addTask from '@/actions/add-task'
import Error from '@/components/Error'
import Input from '@/components/Input'
import Popover from '@/components/Popover'
import Select from '@/components/Select'
import Submit from '@/components/Submit'
import Textarea from '@/components/Textarea'
import { AddTaskState } from '@/types/tasks'
import { Plus } from 'lucide-react'
import { useFormState } from 'react-dom'

const addTaskInitialState: AddTaskState = {
	name: [],
	priority: [],
	deadline: [],
	description: [],
}

/**
 * Tasks bar component.
 * @returns The component.
 */
export default function TasksBar() {
	const [formState, formAction] = useFormState(addTask, addTaskInitialState)

	return (
		<>
			<div className="mt-4 h-16 w-full px-4">
				<div className="relative mx-auto flex h-full w-full max-w-screen-xl items-center justify-between rounded-xl bg-theme-yellow px-4">
					<h1 className="font-semibold text-theme-white xs:text-lg">Tasks</h1>
					<Popover>
						<Popover.trigger>
							<div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded bg-theme-gray hover:brightness-75 xs:h-7 xs:w-7">
								<Plus className="h-5 w-5 stroke-theme-black xs:h-6 xs:w-6" />
							</div>
						</Popover.trigger>
						<Popover.Content>
							<form
								className="flex w-60 flex-col rounded bg-theme-white p-4 xs:w-80"
								action={formAction}
							>
								<h1 className="mb-4 text-lg font-semibold xs:text-xl">
									Add task
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
										/>
										{formState?.name.length > 0 && (
											<Error>{formState?.name[0]}</Error>
										)}
									</div>
									<div className="flex flex-col gap-1">
										<Select
											errors={formState?.priority}
											name="priority"
											id="priority"
											autoComplete="off"
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
										/>
										{formState?.description.length > 0 && (
											<Error>{formState?.description[0]}</Error>
										)}
									</div>
								</div>
								<Submit>Send</Submit>
							</form>
						</Popover.Content>
					</Popover>
				</div>
			</div>
		</>
	)
}
