import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 text-center md:space-y-5">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-gray-100">
            A Glimpse into My Work
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Here you'll find projects that showcase my design process, thinking, and execution. Some
            recent work is protected under NDA and can be shared upon request.
            {/* Showcase your projects with a hero image (16 x 9) */}
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-col gap-10">
            {projectsData.map((d) => (
              <Card
                category={d.category}
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                slug={d.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
