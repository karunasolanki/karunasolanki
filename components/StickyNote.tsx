interface StickyNoteProps {
  title: string
  skills: string[]
  color: string
  darkColor?: string
  rotate?: string
}

export const StickyNote = ({
  title,
  skills,
  color,
  darkColor = 'dark:bg-neutral-800',
  rotate = 'rotate-0',
}: StickyNoteProps) => {
  return (
    <div
      className={`relative transform rounded-lg p-6 shadow-lg ${rotate} ${color} ${darkColor} /* hover effects */ transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:rotate-2`}
    >
      {/* PIN */}
      <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 text-xl">📌</span>

      <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-100">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="rounded-full bg-white px-3 py-1 text-sm text-gray-800 shadow dark:bg-gray-700 dark:text-gray-100"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
