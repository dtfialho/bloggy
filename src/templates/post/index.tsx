import format from 'date-fns/format'
import Image from 'next/image'
import Link from 'next/link'

import Container from '@/components/container'
import Title from '@/components/title'
import MarkdownRenderer from '@/components/markdown-renderer'
import * as S from './styles'

type PostTemplateProps = Pick<PostTypes, 'title' | 'date' | 'image' | 'content'>

const PostTemplate = ({ title, date, image, content }: PostTemplateProps) => (
  <Container>
    <S.Article>
      <Title>{title}</Title>

      <S.Date>
        <small>{format(new Date(date), 'dd/MM/yyyy')}</small>
      </S.Date>

      <S.ArticleImage>
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
        />
      </S.ArticleImage>

      <MarkdownRenderer content={content as string} />

      <Link href="/">
        <S.Back>Voltar</S.Back>
      </Link>
    </S.Article>
  </Container>
)

export default PostTemplate
