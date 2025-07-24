type DefinitionBoxProps = {
  title: string
  children: React.ReactNode
  color?: 'green' | 'blue' | 'purple' | 'yellow' | 'pink' | 'outlinePurple'
}

const colorMap = {
  green: {
    border: 'border-l-4 border-green-600',
    bg: 'bg-green-100',
    text: 'text-green-800',
  },
  blue: {
    border: 'border-l-4 border-blue-600',
    bg: 'bg-blue-100',
    text: 'text-blue-800',
  },
  purple: {
    border: 'border-l-4 border-purple-600',
    bg: 'bg-purple-100',
    text: 'text-purple-800',
  },
  yellow: {
    border: 'border-l-4 border-yellow-500',
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
  },
  pink: {
    border: 'border-l-4 border-pink-500',
    bg: 'bg-pink-100',
    text: 'text-pink-800',
  },
}

export default function DefinitionBox({ title, children, color = 'green' }: DefinitionBoxProps) {
  const colors = colorMap[color]

  return (
    <div className={`my-4 rounded-md ${colors.border} ${colors.bg} px-3 py-2 shadow-sm`}>
      <h3 className={`mb-1 text-lg font-semibold ${colors.text}`}>{title}</h3>
      <p className={`${colors.text}`}>{children}</p>
    </div>
  )
}
