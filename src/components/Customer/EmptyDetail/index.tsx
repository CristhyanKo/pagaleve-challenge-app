import EmptyBoxAnimate from '../../Animations/EmptyBoxAnimate/EmptyBoxAnimate'
import { EmptyMessage } from './style'

export default function EmptyDetail() {
	return (
		<EmptyMessage>
			<EmptyBoxAnimate />
			<span>Please select at least one customer to view the details!</span>
		</EmptyMessage>
	)
}
