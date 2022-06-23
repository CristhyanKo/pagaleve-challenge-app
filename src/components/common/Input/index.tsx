import { TextField } from '@mui/material'
import IInput from './interfaces/IInput'

export default function Input({
	type,
	name,
	value,
	onChange,
	id,
	label,
	size,
	required,
	disabled,
	className,
	placeholder,
	error,
	errorMessage,
	width,
}: IInput) {
	return (
		<div style={{ width: width ? width : '100%' }}>
			<TextField
				type={type}
				name={name}
				value={value}
				required={required}
				id={id}
				label={label}
				variant='outlined'
				size={size || 'small'}
				disabled={disabled}
				className={className}
				onChange={onChange}
				helperText={error ? errorMessage : placeholder}
				error={error}
				margin='dense'
				fullWidth
			/>
		</div>
	)
}
