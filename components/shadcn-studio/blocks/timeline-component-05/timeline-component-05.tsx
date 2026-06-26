'use client'

import type { ReactNode } from 'react'

import { Badge } from '@/components/ui/badge'
import HowItWorks from '@/components/ui/how-it-works'

export interface Release {
  version: string
  date: string
  content: ReactNode
}

export const defaultTimelineReleases: Release[] = [
  { version: 'v1.3.0', date: 'July 7, 2025', content: <HowItWorks/> },
  { version: 'v1.2.0', date: 'June 11, 2025', content:<HowItWorks/> },
  { version: 'v1.1.0', date: 'May 6, 2025', content: <HowItWorks /> },
]

interface ChangelogContentProps {
  releases?: Release[]
}

const ChangelogContent = ({ releases = defaultTimelineReleases }: ChangelogContentProps) => {
  return (
    <>
      <div className='mb-8 space-y-3 text-start md:mb-10 lg:mb-18'>
        <h2 className='text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl'>Il mio percorso formativo</h2>
        <p className='text-muted-foreground text-base md:text-lg'>
          Discover what’s been added, changed, fixed, improved, and updated in this release.
        </p>
      </div>
      {releases.map((release, index) => (
        <div key={release.version} id={String(index + 1)} className='relative flex scroll-mt-18 justify-end gap-2'>
          <div className='sticky top-19 flex w-36 flex-col items-end gap-2 self-start pb-4 max-md:hidden'>
            <Badge className='flex size-6 w-auto justify-end rounded-sm text-sm font-medium'>{release.version}</Badge>
            <div className='text-muted-foreground text-right text-sm font-medium'>{release.date}</div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='sticky top-19 flex size-6 items-center justify-center max-sm:top-5'>
              <span className='bg-primary/20 flex size-4.5 shrink-0 items-center justify-center rounded-full'>
                <span className='bg-primary size-3 rounded-full' />
              </span>
            </div>
            <span className='-mt-2.5 w-px flex-1 border' />
          </div>
          <div className='flex flex-1 flex-col gap-4 pb-11 pl-3 md:pl-6 lg:pl-9'>
            <div className='flex flex-col gap-2 md:hidden'>
              <Badge className='flex rounded-sm font-medium'>{release.version}</Badge>
              <div className='font-medium'>{release.date}</div>
            </div>
            {release.content}
          </div>
        </div>
      ))}
    </>
  )
}

export default ChangelogContent
