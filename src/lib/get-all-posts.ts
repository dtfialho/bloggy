import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

function getAllPosts(): PostTypes[] {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    const slug = fileName.replace('.md', '')

    const fullPath = path.join(postsDirectory, fileName)
    const markdown = fs.readFileSync(fullPath, 'utf8')
    const {
      data: { title, excerpt, date, image }
    } = matter(markdown)

    return {
      slug,
      title,
      excerpt,
      date,
      image
    }
  })
}

export default getAllPosts
