import { whyMeData } from '@/data/whyMeData'

export default function WhyMeSection() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {whyMeData.map((item, index) => (
          <div
            key={index}
            className="rounded-xl bg-gray-100 p-6 shadow-sm transition duration-200 hover:shadow-md dark:bg-gray-800"
          >
            <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">{item.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">{item.tagline}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
