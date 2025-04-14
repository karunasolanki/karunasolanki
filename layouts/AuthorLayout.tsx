import { ReactNode } from 'react'
import { StickyNote } from '@/components/StickyNote'
import { stickyNotes } from '@/data/skillsData'
import WhyMeSection from '@/components/WhyMe'
import Button from '@/components/Button'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="justify-items-center space-y-2 pt-6 pb-8 text-center md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Hey there, I'm a designer.
          </h1>
          <h4 className="text-lg leading-tight font-semibold tracking-tight text-gray-900 sm:text-xl md:text-2xl dark:text-gray-100">
            Creating aesthetic experiences with smart & accessible functionality.
          </h4>
        </div>
        <div className="items-start space-y-2 pb-8 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="github" href={github} />
            </div>
          </div>
          <div className="prose dark:prose-invert mt-8 w-full max-w-none pt-8 pb-8 text-center md:text-left xl:col-span-2">
            {children}
          </div>
          <div className="flex justify-center">
            <Button
              href={'/projects'}
              text="View projects"
              className="w-50 justify-self-center text-center md:justify-self-center"
            />
          </div>
        </div>
      </div>
      {/* Key skills section */}
      <div className="flex flex-col">
        <h2 className="mt-8 items-center pt-8 text-center text-3xl leading-8 font-bold tracking-tight">
          Design Tools & Magic Moves, My Skill Board!
        </h2>
        <p className="mt-2 text-center text-gray-600 italic dark:text-gray-300">
          A little better with every project - always curious, always learning 💫
        </p>
        <div className="grid grid-cols-1 gap-6 py-8 md:grid-cols-2">
          {stickyNotes.map((note, idx) => (
            <StickyNote
              key={idx}
              title={note.title}
              skills={note.skills}
              color={note.color}
              rotate={note.rotate}
            />
          ))}
        </div>
      </div>
      {/* Value Section */}
      <div className="flex flex-col">
        <h2 className="mt-8 items-center pt-8 text-center text-3xl leading-8 font-bold tracking-tight">
          What I Bring to the Table.
        </h2>
        <p className="mt-2 text-center text-gray-600 italic dark:text-gray-300">
          I love empathizing, asking questions and understanding root cause problems before jumping
          on solutions 💫
        </p>
        <WhyMeSection />
      </div>
    </>
  )
}
