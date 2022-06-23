import styled from 'styled-components'
import IMiniCustomer from './interfaces/IMiniCustomer'

export const CustomerListBox = styled.div`
	background-color: #fff;
	border-radius: 4px;
	height: 100%;
	padding: 20px;
	box-sizing: border-box;

	-webkit-box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.1);
	box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.1);
`
export const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`

export const ListItem = styled.li`
	margin-bottom: 10px;

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
