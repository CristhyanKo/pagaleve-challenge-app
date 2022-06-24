import { MouseEvent, MouseEventHandler } from 'react'

export default interface IMiniCustomer {
	active?: boolean
	onClick?: (MouseEventHandler<HTMLDivElement> & ((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)) | undefined
}
