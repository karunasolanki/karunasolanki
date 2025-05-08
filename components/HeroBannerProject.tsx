import Image from 'next/image'

type Props = {
  title: string
  subtitle?: string
  coverImage?: string
  intro?: string
}

export default function ProjectHero({ title, subtitle, coverImage, intro }: Props) {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-gray-100">
        {title}
      </h1>
      {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
      {coverImage && (
        <div className="relative mx-auto mt-8 h-64 w-full max-w-4xl">
          <Image
            src={coverImage}
            alt={title}
            fill // This makes the image responsive inside the parent div
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
      )}
      {intro && <p className="mx-auto mt-6 max-w-2xl text-lg">{intro}</p>}
    </div>
  )
}
