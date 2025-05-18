import Image from './Image'
import Button from './Button'

const Card = ({ title, description, imgSrc, slug, category }) => (
  <div className="flex flex-col items-center overflow-hidden rounded-3xl border border-gray-200 shadow-sm md:flex-row dark:border-gray-700">
    {/* Image section */}
    <div className="m-4 h-64 w-full overflow-hidden rounded-2xl border border-gray-100 md:h-80 md:w-1/2 dark:border-gray-900">
      <Image
        src={imgSrc}
        alt={title}
        width={544}
        height={306}
        className="h-full w-full object-cover"
      />
    </div>

    {/* Text section */}
    <div className="w-full p-8 md:w-1/2">
      <p className="mb-2 text-sm text-gray-500 uppercase">{category}</p>
      <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">{description}</p>
      {slug && <Button href={`/projects/${slug}`} text="Read more" variant="primary" />}
    </div>
  </div>
)

export default Card
