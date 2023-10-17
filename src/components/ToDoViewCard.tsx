'use client'
import type { ToDoTypes } from '@/types/ToDo'
import { getDataPrisma } from '@/utils/getDataPrisma'
import { useRouter } from 'next/navigation'

export function ToDoViewCard({ id, message }: ToDoTypes) {
	const route = useRouter()

	const handleDelete = async () => {
		const data = await getDataPrisma({ method: 'DELETE', id: id })
		route.refresh()
		return data
	}

	return (
		<div className='bg-[#252525] px-6 py-7 rounded-lg shadow-[10px_11px_6px_-1px_rgba(13,13,13,0.64)]'>
			<div className='text-center'>
				<p className='text-gray-500'>{message}</p>
			</div>
			<div className='flex flex-row justify-center items-center mt-8'>
				<button
					onClick={handleDelete}
					className='text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-400 dark:text-red-400 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-red-900'
				>
					Eliminar
				</button>
			</div>
		</div>
	)
}
