import Icon from '@/components/Icon'
import Table from '@/components/Table'
import useTasks from '@/hooks/useTasks'
import Cookies from 'js-cookie'
import Popover from '../Popover'
import Submit from '../Submit'

/**
 * Tasks component.
 * @returns The component.
 */
export default function Tasks() {
	const tasks = useTasks(Cookies.get('userId'), Cookies.get('token'))

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
							<Icon type="check" />
							<Icon type="edit" />
							<Popover>
								<Popover.trigger>
									<Icon type="trash" />
								</Popover.trigger>
								<Popover.Content>
									<form className="flex h-12 w-48 items-center justify-center gap-2 rounded bg-theme-white">
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
