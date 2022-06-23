/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createGlobalStyle } from 'styled-components'
// @ts-ignore
import bgImage from './images/background.fw.png'

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		font-family: 'Roboto', sans-serif;

		background-image: url(${bgImage});		
		background:url(${bgImage}) no-repeat center center fixed; 
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	}
`
