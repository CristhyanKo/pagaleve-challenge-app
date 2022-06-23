export default interface IInput {
	id: string
	label: string
	size?: 'small' | 'medium' | undefined
	type?: string
	name: string
	value?: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	required?: boolean
	disabled?: boolean
	className?: string
	error?: boolean
	errorMessage?: string
	width?: string
}
