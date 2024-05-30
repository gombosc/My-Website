import Hero from '@/components/Hero'
import { LogoProvider } from '@/components/LogoContext'

export default function Home({ posts }) {
return (
	<>
		<LogoProvider>
			<Hero />
		</LogoProvider>
	</>
)
}
