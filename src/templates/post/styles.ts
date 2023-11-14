'use client'

import styled from 'styled-components'
import media from 'styled-media-query'

export const Article = styled.article`
  p {
    margin-bottom: 1.6rem;
  }
`

export const Date = styled.p`
  display: block;
  text-align: center;
  margin-bottom: 3.2rem;

  ${media.greaterThan('medium')`
    margin-bottom: 4rem;
  `}
`

export const ArticleImage = styled.div`
  position: relative;
  max-width: 700px;
  height: 250px;
  margin: 0 auto 3.2rem;

  ${media.greaterThan('medium')`
    height: 300px;
    margin-bottom: 4rem;
  `}
`

export const Back = styled.span`
  display: inline-block;
  background-color: #4c57ba;
  color: #fff;
  border-radius: 6px;
  padding: 0.8rem 2.4rem;
  margin-top: 3.2rem;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`
