'use client'

import styled from 'styled-components'
import media from 'styled-media-query'
import type { DefaultBreakpoints } from 'styled-media-query'

export const Card = styled.article`
  max-width: 100%;
  display: grid;
  background: var(--quaternary-color);
  color: var(--secondary-color);

  ${media.lessThan('767px' as keyof DefaultBreakpoints)`
    img {
      width: 100%;
      height: 150px;
      background-size: cover;
      background-position: center;
    }
  `}

  ${media.greaterThan('medium')`
    grid-template-columns: 200px auto;
    width: 700px;
  `}
`

export const Details = styled.div`
  padding: 1.6rem;
`

export const Title = styled.h2`
  font-size: 2.5rem;

  ${media.greaterThan('medium')`
    font-size: 3rem;
  `}
`

export const Description = styled.p`
  font-size: 1.4rem;

  ${media.greaterThan('medium')`
    font-size: 1.8rem;
  `}
`
