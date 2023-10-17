'use client'
import { useRouter } from 'next/navigation'

export default function NotFoundPage() {
	const route = useRouter()

	const handleBack = () => {
		route.push('/')
	}
	return (
		<section className='flex flex-col justify-center items-center min-h-screen'>
			<div>
				<h1 className='text-3xl font-bold'>¡No Exite!</h1>
			</div>
			<div className='text-lg text-gray-400 mt-7'>
				<p>La pagina que tu intentas buscar</p>
				<p>no exite, por favor presione el boton</p>
				<button
					onClick={handleBack}
					className='text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-7 text-center dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'
				>
					Regresar
				</button>
			</div>
		</section>
	)
}
