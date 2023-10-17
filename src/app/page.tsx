import { ToDoCreateCard } from '@/components/ToDoCreateCard'
import { ToDoViewCard } from '@/components/ToDoViewCard'
import { getDataPrisma } from '@/utils/getDataPrisma'
import type { ToDoTypes } from '@/types/ToDo'

export default async function Home() {
	const toDoView = await getDataPrisma({ method: 'GET' })

	return (
		<main>
			<section className='flex flex-row justify-center items-center h-44'>
				<ToDoCreateCard />
			</section>
			<section className='grid gap-4 mx-20 mb-8 md:grid-cols-2 lg:mx-48 lg:grid-cols-2 xl:grid-cols-3 xl:gap-4 xl:mx-80'>
				{toDoView &&
					toDoView.map(({ id, message }: ToDoTypes) => (
						<ToDoViewCard key={id} id={id} message={message} />
					))}
			</section>
		</main>
	)
}
