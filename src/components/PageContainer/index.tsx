import { useEffect } from 'react'
import { Container } from './style'

type Props = {
	title: string
	children: React.ReactNode
}

export default function PageContainer({ title, children }: Props) {
	useEffect(() => {
		document.title = `${title} - Pagaleve`
	}, [])

	return <Container>{children}</Container>
}
