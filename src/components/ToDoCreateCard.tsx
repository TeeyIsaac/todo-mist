'use client'
import { useToDoForm } from '@/hook/useToDoForm'

export function ToDoCreateCard() {
	const { message, onSubmit, onChangeForm } = useToDoForm()

	return (
		<form
			onSubmit={onSubmit}
			method='POST'
			// padingg mobile m y s
			className='bg-[#252525] rounded-lg px-5 py-3 xl:px-8 xl:py-4 shadow-[10px_11px_6px_-1px_rgba(13,13,13,0.64)]'
		>
			<div className='inline-block'>
				<input
					type='text'
					name='message'
					value={message}
					className=' text-white bg-[#141414] p-[3px] w-64 xl:p-[6px] xl:w-96 rounded-sm text-sm focus:ring-2 focus:outline-none dark:focus:ring-purple-600'
					maxLength={81}
					onChange={onChangeForm}
					placeholder='Ingrese el ToDo'
					autoComplete='off'
					required
				/>
			</div>
			<button
				type='submit'
				className='text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-7 text-center dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'
			>
				Crear
			</button>
		</form>
	)
}
