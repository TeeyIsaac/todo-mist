import type { DataPrismaTypes } from '@/types/ToDo'

export async function getDataPrisma({ method, id, message }: DataPrismaTypes) {
	switch (method) {
		case 'GET': {
			const res = await fetch('http://localhost:3000/api/todo', {
				method: method,
				headers: {
					'Content-Type': 'application/json'
				},
				cache: 'no-store'
			})

			const data = await res.json()
			return data
		}
		case 'POST': {
			return await fetch('http://localhost:3000/api/todo', {
				method: method,
				body: JSON.stringify({ message }),
				headers: {
					'Content-Type': 'application/json'
				},
				cache: 'no-store'
			})
		}
		case 'DELETE': {
			return await fetch(`http://localhost:3000/api/todo/${id}`, {
				method: method,
				cache: 'no-store'
			})
		}
	}
}
