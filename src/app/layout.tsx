import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'], preload: true })

export const metadata: Metadata = {
	title: 'Task trek',
	description:
		'🚀 Your all-in-one task manager! Organize tasks effortlessly, sync seamlessly and conquer your goals with ease 🌟',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
