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
      <h1 className="text-5xl font-bold">{title}</h1>
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
