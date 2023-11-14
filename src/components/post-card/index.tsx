import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

type PostCardProps = PostCard

const PostCard = ({ title, excerpt, image, slug }: PostCardProps) => (
  <S.Card>
    <Link href={`/${slug}`}>
      <Image src={image} alt={title} width={200} height={200} />
    </Link>

    <S.Details>
      <S.Title>
        <Link href={`/${slug}`}>{title}</Link>
      </S.Title>
      <S.Description>
        <Link href={`/${slug}`}>{excerpt}</Link>
      </S.Description>
    </S.Details>
  </S.Card>
)

export default PostCard
