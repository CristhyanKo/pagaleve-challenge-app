import React from 'react'

export default interface IInputMask {
	id: string
	label: string
	size?: 'small' | 'medium' | undefined
	type?: string
	name: string
	value?: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
	placeholder?: string
	required?: boolean
	disabled?: boolean
	className?: string
	error?: boolean
	width?: string
	formikField?: boolean
	helperText?: React.ReactNode
	mask: string | (string | RegExp)[]
	maskPlaceholder?: string | null | undefined
}
