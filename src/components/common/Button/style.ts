import LoadingButton from '@mui/lab/LoadingButton'
import { styled } from '@mui/material/styles'
import ICustomButton from './interfaces/ICustomButton'
import contrastTextColor from '../../../helper/contrastTextColor'
import pSBC from 'shade-blend-color'

export const CustomButton = styled(LoadingButton)<ICustomButton>((props) => ({
	color: props.textcolor ? props.textcolor : contrastTextColor(<string>props.customcolor || '#00D0B3'),
	backgroundColor: props.customcolor || '#00D0B3',
	marginTop: props.margintop || '0px',
	'&:hover': {
		backgroundColor: pSBC(-0.1, props.customcolor) || '#00D0B3',
	},
}))
