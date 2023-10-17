import { prismalib } from '@/db/prisma'
import { NextRequest, NextResponse } from 'next/server'
import type { ParamsType } from '@/types/ToDo'

export async function DELETE(
	request: NextRequest,
	{ params }: ParamsType
): Promise<object> {
	try {
		const id = params.todoId
		const deleteToDoId = await prismalib.toDo.delete({
			where: {
				id: Number(id)
			},
			select: {
				id: true,
				message: true
			}
		})

		return NextResponse.json(
			{
				message: 'El ToDo fue eliminado correctamente',
				deleteToDoId
			},
			{ status: 200 }
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
