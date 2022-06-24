import IButton from './interfaces/IButton'
import { CustomButton } from './style'

export default function Button({ type, id, name, disabled, onClick, className, size, isLoading, color, textColor, marginTop, startIcon }: IButton) {
	return (
		<CustomButton
			id={id}
			disabled={disabled}
			onClick={onClick}
			className={className}
			size={size || 'medium'}
			loading={isLoading}
			variant='contained'
			customcolor={color}
			textcolor={textColor}
			margintop={marginTop}
			type={type}
			startIcon={startIcon}
		>
			{name}
		</CustomButton>
	)
}
