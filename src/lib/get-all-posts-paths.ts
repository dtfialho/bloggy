import path from 'path'
import fs from 'fs'

type PostPaths = Array<{
  slug: string
}>

function getAllPostsPaths(): PostPaths {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    const slug = fileName.replace('.md', '')

    return {
      slug
    }
  })
}

export default getAllPostsPaths
