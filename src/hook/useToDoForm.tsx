'use client'
import { getDataPrisma } from '@/utils/getDataPrisma'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import type { useFormTypes } from '@/types/ToDo'

export function useToDoForm(): useFormTypes {
	const [message, setMessage] = useState('')
	const route = useRouter()

	const onChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.name === 'message') {
			setMessage(e.target.value)
		}
	}

	const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<object> => {
		e.preventDefault()

		const data = await getDataPrisma({
			method: 'POST',
			message: message
		})

		setMessage('')
		route.refresh()
		return data
	}

	return {
		message,
		onChangeForm,
		onSubmit
	}
}
