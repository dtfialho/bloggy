import { Montserrat, Open_Sans } from 'next/font/google'
import type { PropsWithChildren } from 'react'

import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyles from '@/styles/global'
import Header from '@/components/header'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-primary'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-secondary'
})

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="pt-br">
    <body className={`${openSans.variable} ${montserrat.variable}`}>
      <StyledComponentsRegistry>
        <GlobalStyles />
        <main>
          <Header />

          {children}
        </main>
      </StyledComponentsRegistry>
    </body>
  </html>
)

export default RootLayout
