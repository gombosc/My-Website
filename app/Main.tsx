import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Hero from '@/components/Hero'
import MainPosts from '@/components/MainPosts'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { Main } from 'next/document'

const MAX_DISPLAY = 4

export default function Home({ posts }) {
return (
	<>
		<Hero />
	</>
)
}
