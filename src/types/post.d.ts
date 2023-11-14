type PostCard = {
  title: string
  excerpt: string
  slug: string
  image: string
}

type PostTypes = {
  title: string
  excerpt: string
  slug: string
  date: string
  image: string
  keywords?: string
  content?: string
}

type PostList = PostCard[]
