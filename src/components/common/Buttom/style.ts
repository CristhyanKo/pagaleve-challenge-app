import LoadingButton from '@mui/lab/LoadingButton'
import { styled } from '@mui/material/styles'
import ICustomButton from './interfaces/ICustomButton'
import contrastTextColor from '../../../helper/contrastTextColor'
import pSBC from 'shade-blend-color'

export const CustomButton = styled(LoadingButton)<ICustomButton>((props) => ({
	color: props.textColor ? props.textColor : contrastTextColor(<string>props.customColor || '#00D0B3'),
	backgroundColor: props.customColor || '#00D0B3',
	'&:hover': {
		backgroundColor: pSBC(-0.1, props.customColor) || '#00D0B3',
	},
}))
