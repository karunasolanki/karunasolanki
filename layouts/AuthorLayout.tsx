import { ReactNode } from 'react'
import Link from 'next/link'
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
      {/* Hero Section */}
      <div className="pt-10 pb-14 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-gray-100">
          Hey there, I'm a designer.
        </h1>
        <h4 className="mt-4 text-lg font-semibold tracking-tight text-gray-700 sm:text-xl md:text-2xl dark:text-gray-300">
          Creating aesthetic experiences with smart & accessible functionality.
        </h4>
      </div>
      {/* 2-Column Section */}
      <div className="grid grid-cols-1 items-start gap-8 xl:grid-cols-3">
        {/* Left Column */}
        <div className="flex flex-col items-center space-y-2">
          {avatar && (
            <Image
              src={avatar}
              alt="avatar"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full"
            />
          )}
          <h3 className="text-2xl font-bold">{name}</h3>
          <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
          <div className="text-gray-500 dark:text-gray-400">{company}</div>
          <div className="mt-2 flex space-x-3">
            <SocialIcon kind="mail" href={`mailto:${email}`} />
            <SocialIcon kind="linkedin" href={linkedin} />
            <SocialIcon kind="github" href={github} />
          </div>
        </div>
        {/* Right Column */}
        <div className="prose dark:prose-invert max-w-none text-center xl:col-span-2 xl:text-left">
          {children}
        </div>
      </div>
      {/* Action Items: Resume and project buttons */}
      <div className="mt-8 flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-center">
        <Link
          href="/projects"
          className="group relative rounded-xl bg-gray-200 px-8 py-4 shadow-lg transition hover:scale-105 hover:shadow-2xl dark:bg-gray-800 dark:shadow-xl dark:hover:bg-indigo-600 dark:hover:shadow-2xl"
        >
          <h3 className="text-lg font-semibold text-black dark:text-white">Explore My Projects</h3>
          <p className="text-sm text-gray-500 group-hover:dark:text-white">
            See how I solve problems visually
          </p>
        </Link>
        <Link
          href="/resume.pdf"
          target="blank"
          className="group relative rounded-xl bg-gray-200 px-8 py-4 shadow-lg transition hover:scale-105 hover:shadow-2xl dark:bg-gray-800 dark:shadow-xl dark:hover:bg-indigo-600 dark:hover:shadow-2xl"
        >
          <h3 className="text-lg font-semibold text-black dark:text-white">Grab My Resume</h3>
          <p className="text-sm text-gray-500 group-hover:dark:text-white">
            Get to know my background
          </p>
        </Link>
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
          onto solutions 💫
        </p>
        <WhyMeSection />
      </div>
    </>
  )
}
