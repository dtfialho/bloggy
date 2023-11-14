'use client'

import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2.4rem;
  width: 100%;
  height: 25rem;
  background: var(--quaternary-color);
  color: var(--secondary-color);
`

export const Title = styled.h2`
  font-size: 5rem;
  margin-bottom: 1.6rem;
`

export const Description = styled.p`
  font-size: 2rem;
  text-align: center;
`
