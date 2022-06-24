import animate from './EmptyListAnimate.json'
import Lottie from 'react-lottie'

export default function EmptyListAnimate() {
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
