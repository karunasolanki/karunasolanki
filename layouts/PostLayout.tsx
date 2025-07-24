import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { BlogPageTitle } from '@/components/PageTitle'

const editUrl = (path: string) => `${siteMetadata.siteRepo}/blob/main/data/${path}`

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, children }: LayoutProps) {
  const { title } = content

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article className="w-full">
        {/* Back to Blogs Button */}
        <div className="pt-4 pb-2">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm"
          >
            ← Back to Blogs
          </Link>
        </div>

        {/* Article Header */}
        <header className="rounded-2xl border border-purple-300/20 bg-purple-100/30 p-4 text-center shadow-md backdrop-blur-sm transition-all dark:bg-purple-900/10">
          {/* Post Title */}
          <BlogPageTitle>{title}</BlogPageTitle>
          <p className="font-semibold text-purple-700 dark:text-purple-300">- Karuna Solanki</p>
        </header>

        {/* Article Content */}
        <div className="prose dark:prose-invert w-full max-w-none pt-14 pb-8">{children}</div>
      </article>
    </SectionContainer>
  )
}
