'use client'

import signOut from '@/actions/sign-out'
import Header from '@/components/Header'
import Submit from '@/components/Submit'
import TasksBar from '@/components/app/TasksBar'
import useTasks from '@/hooks/useTasks'
import useUser from '@/hooks/useUser'
import Cookies from 'js-cookie'

/**
 * User page component.
 * @returns The page component.
 */
export default function Page() {
	const user = useUser(Cookies.get('userId'), Cookies.get('token'))
	const tasks = useTasks(Cookies.get('userId'), Cookies.get('token'))

	if (user.name && user.email && tasks.length > 0) {
		return (
			<main>
				<Header>
					<h1 className="text-theme-white xs:text-lg">Hello {user.name}</h1>
					<form action={signOut}>
						<Submit type="destructive">Sign out</Submit>
					</form>
				</Header>
				<TasksBar />
			</main>
		)
	}
}
