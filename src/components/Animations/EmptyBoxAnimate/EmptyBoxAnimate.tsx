import animate from './EmptyBoxAnimate.json'
import Lottie from 'react-lottie'

export default function EmptyBoxAnimate() {
	return (
		<Lottie
			options={{
				animationData: animate,
				loop: true,
				autoplay: true,
				rendererSettings: {
					preserveAspectRatio: 'xMidYMid slice',
				},
			}}
			height={180}
			width={180}
		/>
	)
}
