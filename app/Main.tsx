import Hero from '@/components/Hero'
import { Analytics } from "@vercel/analytics/react"
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
