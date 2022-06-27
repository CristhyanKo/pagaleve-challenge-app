import styled from 'styled-components'

export const LanguageSelectorBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	padding: 10px;
	margin-top: 40px;
`

export const LanguageOption = styled.div`
	cursor: pointer;
	margin-left: 20px;
	img {
		filter: grayscale(100%);
	}

	:hover {
		transform: scale(1.1);
	}

	.active {
		img {
			filter: grayscale(0%);
		}
	}
`
