import Image from 'next/image'

type Props = {
  heading: string
  content: string
  image?: string
  gallery?: string[]
}

export default function ProjectSection({ heading, content, image, gallery }: Props) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold">{heading}</h2>
      <p className="text-lg leading-7">{content}</p>

      {image && (
        <div className="relative h-64 w-full">
          <Image src={image} alt={heading} fill className="rounded-lg object-cover shadow-md" />
        </div>
      )}
      {gallery && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {gallery.map((imgSrc, index) => (
            <div key={index} className="relative h-64 w-full">
              <Image
                src={imgSrc}
                alt={`${heading} ${index + 1}`}
                fill
                className="rounded-lg object-cover shadow-md"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
