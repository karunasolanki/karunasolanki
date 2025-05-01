import { notFound } from 'next/navigation'
import projectDetailsData from '@/data/projectDetailsData'
import ProjectHero from '@/components/HeroBannerProject'
import ProjectSection from '@/components/ProjectSection'
import { Metadata } from 'next'

type Props = {
  params: {
    slug: string[]
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug?.[0]
  const project = projectDetailsData.find((proj) => proj.slug === slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default function ProjectPage({ params }: Props) {
  const slug = params.slug?.[0]
  const project = projectDetailsData.find((proj) => proj.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero section */}
      <ProjectHero
        title={project.title}
        subtitle={project.subtitle}
        coverImage={project.coverImage}
      />

      {/* Dynamic sections */}
      {project.sections.map((section, index) => (
        <ProjectSection key={index} {...section} />
      ))}
    </main>
  )
}
