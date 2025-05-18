import Link from 'next/link'

interface ButtonProps {
  href: string
  text: string
  className?: string
  variant?: 'primary' | 'secondary'
}

const Button = ({ href, text, className = '', variant = 'primary' }: ButtonProps) => {
  const baseClasses = 'inline-block rounded-full px-5 py-2 text-sm font-medium transition'
  const variants = {
    primary:
      'bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-400',
    secondary:
      'border border-black text-black hover:bg-gray-100 dark:border-white dark:text-white dark:hover:bg-gray-800',
  }

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {text}
    </Link>
  )
}

export default Button
