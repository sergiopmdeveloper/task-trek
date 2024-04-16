import deleteTask from '@/actions/delete-task'
import finishTask from '@/actions/finish-task'
import Icon from '@/components/Icon'
import Input from '@/components/Input'
import Modal from '@/components/Modal'
import Popover from '@/components/Popover'
import Select from '@/components/Select'
import Submit from '@/components/Submit'
import Table from '@/components/Table'
import Textarea from '@/components/Textarea'
import useTasks from '@/hooks/useTasks'
import Cookies from 'js-cookie'

/**
 * Tasks component.
 * @returns The component.
 */
export default function Tasks() {
	let tasks = useTasks(Cookies.get('userId'), Cookies.get('token')).filter(
		(task) => !task.done,
	)

	return (
		<Table>
			<Table.Header>
				<Table.HeaderRow>Name</Table.HeaderRow>
				<Table.HeaderRow>Description</Table.HeaderRow>
				<Table.HeaderRow>Priority</Table.HeaderRow>
				<Table.HeaderRow>Deadline</Table.HeaderRow>
				<Table.HeaderRow>Actions</Table.HeaderRow>
			</Table.Header>
			<Table.Body>
				{tasks.map((task, index) => (
					<Table.Row key={index}>
						<Table.Cell>{task.name}</Table.Cell>
						<Table.Cell>{task.description}</Table.Cell>
						<Table.Cell>{task.priority}</Table.Cell>
						<Table.Cell>
							{new Date(task.deadline).toLocaleDateString()}
						</Table.Cell>
						<Table.Cell classname="flex gap-2">
							<Popover>
								<Popover.trigger>
									<Icon type="check" />
								</Popover.trigger>
								<Popover.Content>
									<form
										className="flex w-max items-center gap-2 rounded bg-theme-white p-2"
										action={() => finishTask(task.id)}
									>
										<h1 className="text-base text-theme-black">
											Are you sure?
										</h1>
										<Submit>Mark as done</Submit>
									</form>
								</Popover.Content>
							</Popover>
							<Modal>
								<Modal.trigger>
									<Icon type="edit" />
								</Modal.trigger>
								<Modal.Content>
									<form className="flex w-60 flex-col rounded bg-theme-white p-4 xs:w-80">
										<h1 className="mb-4 text-lg font-semibold text-theme-black xs:text-xl">
											Add task
										</h1>
										<div className="mb-4 flex flex-col gap-4">
											<div className="flex flex-col gap-1">
												<Input
													name="name"
													id="name"
													type="text"
													placeholder="Name..."
													autoComplete="off"
												/>
											</div>
											<div className="flex flex-col gap-1">
												<Select
													name="priority"
													id="priority"
													autoComplete="off"
												>
													<option value="High">High</option>
													<option value="Medium">Medium</option>
													<option value="Low">Low</option>
												</Select>
											</div>
											<div className="flex flex-col gap-1">
												<Input
													name="deadline"
													id="deadline"
													type="date"
													autoComplete="off"
												/>
											</div>
											<div className="flex flex-col gap-1">
												<Textarea
													name="description"
													id="description"
													rows={4}
													placeholder="Description"
													autoComplete="off"
												/>
											</div>
										</div>
										<Submit>Send</Submit>
									</form>
								</Modal.Content>
							</Modal>
							<Popover>
								<Popover.trigger>
									<Icon type="trash" />
								</Popover.trigger>
								<Popover.Content>
									<form
										className="flex w-max items-center gap-2 rounded bg-theme-white p-2"
										action={() => deleteTask(task.id)}
									>
										<h1 className="text-base text-theme-black">
											Are you sure?
										</h1>
										<Submit>Delete</Submit>
									</form>
								</Popover.Content>
							</Popover>
						</Table.Cell>
					</Table.Row>
				))}
			</Table.Body>
		</Table>
	)
}
