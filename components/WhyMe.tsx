import { whyMeData } from '@/data/whyMeData'

export default function WhyMeSection() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {whyMeData.map((item, index) => (
          <div
            key={index}
            className="flex transform items-center space-x-4 rounded-lg bg-gray-200 p-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl dark:bg-gray-800 dark:shadow-xl dark:hover:shadow-2xl"
          >
            <span className="text-3xl text-indigo-500 dark:text-indigo-300">✔️</span>
            <span className="text-lg font-semibold text-gray-800 dark:text-white">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
