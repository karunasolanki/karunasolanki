import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function ProjectPageTitle({ children }: Props) {
  return (
    <h1 className="text-3xl font-extrabold tracking-tight text-teal-800 sm:text-4xl md:text-5xl dark:text-teal-200">
      {children}
    </h1>
  )
}

export function BlogPageTitle({ children }: Props) {
  return (
    <h1 className="text-3xl leading-tight font-bold tracking-tight text-gray-800 md:text-4xl dark:text-purple-100">
      {children}
    </h1>
  )
}
