import Link from 'next/link'

interface ButtonProps {
  href: string
  text: string
  className?: string // Optional: allow for extra custom styling
}

const Button = ({ href, text, className = '' }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`inline-block rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-400 ${className}`}
    >
      {text}
    </Link>
  )
}

export default Button
