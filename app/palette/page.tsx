import React from 'react'
import Image from '@/components/Image'
import { galleryImages } from '@/data/paletteData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Palette' })

export default function Palette() {
  return (
    <>
      <div className="items-center divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 text-center md:space-y-5">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-gray-100">
            Impulsive Palette
          </h1>
          <p className="text-center text-lg leading-7 text-gray-500 dark:text-gray-400">
            I believe painting is like meditation, it rejuvinates the cells of the brain that aren't
            active and pushes our ideation ability to an extent where we can be proclaimed as
            creatives. I let the ideas flow through my brushes and carve it on canvas. Story telling
            becomes much more easier when it is visually appealing and strongly portrayed.
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((img) => (
            <div key={img.id} className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="h-full w-full rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
