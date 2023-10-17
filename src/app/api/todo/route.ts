import { prismalib } from '@/db/prisma'
import { NextRequest, NextResponse } from 'next/server'
import type { ToDoTypes } from '@/types/ToDo'

export async function GET(): Promise<object> {
	try {
		const getToDoAll = await prismalib.toDo.findMany()

		return NextResponse.json(getToDoAll, { status: 200 })
	} catch (error: unknown) {
		return NextResponse.json(
			{
				messageError: error
			},
			{ status: 500 }
		)
	}
}

export async function POST(request: NextRequest): Promise<object> {
	try {
		const { message }: ToDoTypes = await request.json()

		if (!message) {
			return NextResponse.json(
				{
					messageError: 'No puede haber ninguno campo vacio'
				},
				{ status: 400 }
			)
		}

		const postToDo = await prismalib.toDo.create({
			data: {
				message: message,
				createAt: new Date()
			},
			select: {
				id: true,
				message: true,
				createAt: true
			}
		})

		return NextResponse.json(
			{
				message: 'El ToDo ha sido creado',
				postToDo
			},
			{ status: 201 }
		)
	} catch (error: unknown) {
		return NextResponse.json(
			{
				messageError: error
			},
			{ status: 500 }
		)
	}
}
