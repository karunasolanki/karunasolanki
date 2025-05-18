'use client'

interface VideoProps {
  media_path: string
  className?: string
}

function Video({ media_path, className }: VideoProps) {
  return (
    <video className={`h-auto w-full rounded-lg ${className ?? ''}`} controls>
      <source src={media_path} type="video/mp4" />
      <track kind="captions" />
    </video>
  )
}

export default Video
