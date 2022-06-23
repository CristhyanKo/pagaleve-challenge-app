import IButton from './interfaces/IButton'
import { CustomButton } from './style'

export default function Button({ id, name, disabled, onClick, className, size, isLoading, color, textColor }: IButton) {
	return (
		<CustomButton
			id={id}
			disabled={disabled}
			onClick={onClick}
			className={className}
			size={size || 'medium'}
			loading={isLoading}
			variant='contained'
			customColor={color}
			textColor={textColor}
		>
			{name}
		</CustomButton>
	)
}
