import styled from 'styled-components'
import IMiniCustomer from '../interfaces/IMiniCustomer'

export const CustomerListBox = styled.div`
	background-color: #fff;
	border-radius: 4px;
	height: 630px;
	padding: 20px;
	box-sizing: border-box;

	-webkit-box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.2);
	box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.2);

	overflow-y: auto;
	overflow-x: hidden;
`
export const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	height: 100%;
`

export const AddNewButtom = styled.div`
	display: flex;
	justify-content: flex-end;
	position: relative;
	top: -50px;
	opacity: 0.7;
	margin-right: 15px;
	:hover {
		opacity: 1;
	}
`

export const ListItem = styled.li`
	margin-bottom: 10px;
	user-select: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;

	:last-child {
		margin-bottom: 0;
	}
`

export const MiniCustomer = styled.div<IMiniCustomer>`
	display: flex;
	align-items: center;
	cursor: pointer;
	background-color: #f0f0f0;
	padding: 10px;
	border-radius: 4px;

	:hover {
		transform: scale(1.04);
		transition: all 0.1s ease-in-out;
	}

	${(props) =>
		props.active &&
		`
		transform: scale(1.04);
		color: #fff;
		background-color: #FE35F1;
	`}
`

export const MiniCustomerDetails = styled.div`
	display: flex;
	flex-direction: column;

	p {
		margin: 0;
		padding: 0;
		font-weight: bold;
	}

	span {
		font-size: 14px;
	}

	margin-left: 10px;
`
