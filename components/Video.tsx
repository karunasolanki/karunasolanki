'use client'

interface VideoProps {
  media_path: string
}

function Video(props: VideoProps) {
  return (
    <video width="full" controls>
      <source src={props.media_path} type="video/mp4" />
      <track kind="captions" {...props} />
    </video>
  )
}

export default Video
