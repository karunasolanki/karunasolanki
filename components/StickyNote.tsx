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
    <div className={`transform rounded-lg p-4 shadow-lg ${rotate} ${color} ${darkColor}`}>
      {/* TAPE – top-left */}
      <div className="absolute -top-4 -left-2 z-10 h-8 w-8 rotate-[-12deg] rounded-sm bg-blue-300 shadow-md dark:bg-blue-400"></div>
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
