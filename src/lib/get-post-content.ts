import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

function getPostContent(slug: string): PostTypes {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const markdown = fs.readFileSync(fullPath, 'utf8')

  const {
    data: { title, excerpt, date, image, keywords },
    content
  } = matter(markdown)

  return {
    slug,
    title,
    excerpt,
    date,
    content,
    image,
    keywords
  }
}

export default getPostContent
