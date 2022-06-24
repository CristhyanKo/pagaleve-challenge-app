export default interface IButton {
	id?: string
	name: string
	type?: 'button' | 'submit' | 'reset' | undefined
	disabled?: boolean
	className?: string
	size?: 'small' | 'medium' | 'large' | undefined
	isLoading?: boolean
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
	color?: string
	textColor?: string
	marginTop?: string
}
