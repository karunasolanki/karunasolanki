import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Link from '@/components/Link'
import { ProjectPageTitle } from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const editUrl = (path: string) => `${siteMetadata.siteRepo}/blob/main/data/${path}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function ProjectLayout({ content, children }: LayoutProps) {
  const { date, title } = content

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article className="w-full">
        {/* Back to Projects Button */}
        <div className="pt-4 pb-2">
          <Link
            href="/projects"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm"
          >
            ← Back to Projects
          </Link>
        </div>

        {/* Article Header */}
        <header className="rounded-xl border border-teal-300/20 bg-teal-200/30 pt-6 pb-6 text-center shadow-lg backdrop-blur-md">
          <time
            className="block text-base font-medium text-teal-800 dark:text-teal-200"
            dateTime={date}
          >
            {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
          </time>
          <ProjectPageTitle>{title}</ProjectPageTitle>
        </header>

        {/* Article Content */}
        <div className="prose dark:prose-invert w-full max-w-none pt-14 pb-8">{children}</div>
      </article>
    </SectionContainer>
  )
}
