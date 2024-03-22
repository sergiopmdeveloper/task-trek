import { type UserResponse } from '@/types/user'
import { create } from 'zustand'

type UserActions = {
	setUser(user: UserResponse): void // eslint-disable-line no-unused-vars
	resetUser(): void
}

type UserStore = UserResponse & UserActions

const defaultInitState: UserResponse = {
	name: '',
	email: '',
}

export const useUserStore = create<UserStore>()((set) => ({
	...defaultInitState,
	setUser: (user) => set(() => ({ ...user })),
	resetUser: () => set(() => defaultInitState),
}))
