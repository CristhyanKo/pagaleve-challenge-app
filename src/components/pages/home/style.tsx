import styled from 'styled-components'

export const CustomerBox = styled.div`
	display: flex;
	background-color: #00d0b3;
	height: auto;
	max-height: 630px;
	border-radius: 10px;
	padding: 20px;

	@media screen and (max-width: 900px) {
		max-height: 100%;
	}

	-webkit-box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.2);
	box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.2);
`
