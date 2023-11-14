import type { Metadata } from 'next'

import getAllPostsPaths from '@/lib/get-all-posts-paths'
import getPostContent from '@/lib/get-post-content'
import PostTemplate from '@/templates/post'

export async function generateStaticParams() {
  return getAllPostsPaths()
}

async function getPost(slug: string) {
  const post = getPostContent(slug)

  return post
}

type PostProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params
}: PostProps): Promise<Metadata> {
  const { slug } = params

  const { title, excerpt, keywords } = getPostContent(slug)

  return {
    title: `Bloggy | ${title}`,
    description: excerpt,
    keywords: keywords?.split(', ')
  }
}

const PostPage = async ({ params }: PostProps) => {
  const { title, date, image, content } = await getPost(params.slug)

  return (
    <PostTemplate title={title} date={date} image={image} content={content} />
  )
}

export default PostPage
