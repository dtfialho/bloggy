import Container from '@/components/container'
import Title from '@/components/title'
import PostCard from '@/components/post-card'

type HomePageProps = {
  posts: PostList
}

const HomePage = ({ posts }: HomePageProps) => (
  <Container>
    <Title>Todos os posts</Title>

    {posts.map(({ title, excerpt, slug, image }) => (
      <PostCard
        key={slug}
        title={title}
        excerpt={excerpt}
        slug={slug}
        image={image}
      />
    ))}
  </Container>
)

export default HomePage
