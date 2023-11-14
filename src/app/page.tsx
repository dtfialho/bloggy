import type { Metadata } from 'next'

import getAllPosts from '@/lib/get-all-posts'
import Home from '@/templates/home'

async function getPosts() {
  const posts = getAllPosts()

  return posts
}

export const metadata: Metadata = {
  title: 'Bloggy | Home',
  description: 'Um blog simples feito com Next.js'
}

const BlogPage = async () => {
  const posts = await getPosts()

  return <Home posts={posts} />
}

export default BlogPage
