import getTasks from '@/services/getTasks'
import { useTasksStore } from '@/stores/tasksStore'
import { useEffect } from 'react'

/**
 * Tasks hook.
 * @param {string} userId - The user ID.
 * @param {token} token - The authentication token.
 * @returns The tasks state.
 */
export default function useTasks(
	userId: string | undefined,
	token: string | undefined,
) {
	const setTasks = useTasksStore((state) => state.setTasks)

	useEffect(() => {
		async function getTasksWrapper() {
			setTasks(await getTasks(userId, token))
		}

		getTasksWrapper()
	}, [userId, token, setTasks])

	return Object.values(useTasksStore((state) => state.tasks)).map((obj) => obj)
}
