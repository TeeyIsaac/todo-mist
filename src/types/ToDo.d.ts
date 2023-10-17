type ToDoTypes = {
	id?: string
	message?: string
	createAt?: Date
}

type DataPrismaTypes = {
	method: string
	id?: string
	message?: string
}

type useFormTypes = {
	message?: string
	onChangeForm?: (e: ChangeEvent<HTMLInputElement>) => void
	onSubmit?: (e: FormEvent<HTMLFormElement>) => Promise<object>
}

type ParamsType = {
	params: { [key: string]: string | string[] | undefined }
}

export { ToDoTypes, useFormTypes, DataPrismaTypes, ParamsType }
