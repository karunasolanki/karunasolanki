import Button from '@/components/Button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-6xl leading-9 font-extrabold tracking-tight text-gray-900 md:border-r-2 md:px-6 md:text-8xl md:leading-14 dark:text-gray-100">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl leading-normal font-bold md:text-2xl">
          Sorry, This page does not exist. Lost in the User Flow?
        </p>
        <p className="mb-8">Did you check your internet? Just kidding, it's our fault.</p>
        <Button href={`/`} text="Back to Homepage" />
      </div>
    </div>
  )
}
