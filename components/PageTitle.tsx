import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="text-3xl font-extrabold tracking-tight text-teal-800 sm:text-4xl md:text-5xl dark:text-teal-200">
      {children}
    </h1>
  )
}
