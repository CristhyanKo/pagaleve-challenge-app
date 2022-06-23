export default interface IButton {
	id?: string
	name: string
	disabled?: boolean
	className?: string
	size?: 'small' | 'medium' | 'large' | undefined
	isLoading?: boolean
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
	color?: string
	textColor?: string
}
