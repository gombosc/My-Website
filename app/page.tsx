import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import MainComponent from './Main'

export default async function Main() {
	const sortedPosts = sortPosts(allBlogs)
	const posts = allCoreContent(sortedPosts)
	return <MainComponent posts={posts} /> 
}
