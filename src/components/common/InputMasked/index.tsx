import { TextField } from '@mui/material'
import InputMasked from 'react-input-mask'
import IInputMask from './interfaces/IInputMask'

export default function InputMask({
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
	width,
	helperText,
	mask,
	onBlur,
	maskPlaceholder,
}: IInputMask) {
	return (
		<div style={{ width: width ? width : '100%' }}>
			<InputMasked
				maskPlaceholder={maskPlaceholder}
				id={id}
				name={name}
				mask={mask}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				disabled={disabled}
				className={className}
				placeholder={placeholder}
			>
				<TextField
					type='tel'
					required={required}
					label={label}
					variant='outlined'
					size={size || 'small'}
					helperText={helperText ? helperText : placeholder}
					error={error}
					margin='dense'
					fullWidth
				/>
			</InputMasked>
		</div>
	)
}
