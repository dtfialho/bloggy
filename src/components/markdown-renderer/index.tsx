'use client'

import ReactMarkdown from 'react-markdown'

type MarkdownRendererProps = {
  content: string
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => (
  <ReactMarkdown>{content}</ReactMarkdown>
)

export default MarkdownRenderer
