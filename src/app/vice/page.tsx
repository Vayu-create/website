// app/money-mafia-s3/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ExternalLink } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VICE — Work Overview',
  description: 'Marketing and editorial support for VICE documentaries',
  openGraph: {
    type: 'article',
    title: 'VICE — Work Overview',
    description: 'Marketing and editorial support for VICE documentaries',
    url: 'https://sarthakdangwal.com/vice',
    siteName: 'Sarthak Dangwal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VICE — Work Overview',
    description: 'Marketing and editorial support for VICE documentaries',
  },
}

export default function MoneyMafiaPage() {
  return (
    <div className="relative w-full max-w-full overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1084px] px-4 sm:px-6 pt-6 sm:pt-[54px]">
        {/* Navigation */}
        <div className="w-full pb-6 sm:pb-12">
          <div className="flex justify-start items-center max-w-2xl mx-auto">
            <Link
              href="/projects"
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600"
            >
              <ChevronLeft className="h-4 w-4" />
              Projects
            </Link>
          </div>
        </div>

        {/* Project Content */}
        <article className="mx-auto w-full max-w-2xl pb-16 sm:pb-32">
          {/* Title */}
          <h1 className="mb-3 text-[28px] font-semibold tracking-[-0.02em] text-gray-900">
            Money Mafia S3
          </h1>

          {/* Divider */}
          <div className="mb-8 h-px w-full bg-gray-200" />

          <div className="prose prose-gray max-w-none">
            {/* Embedded Trailer */}
            <div className="my-8">
  
              <div className="aspect-video rounded-lg overflow-hidden shadow">
                <iframe
                  src="https://www.youtube.com/embed/00A1xxbv-hY"
                  title="Money Mafia S3 Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="mt-2 text-xs text-gray-500 text-center">
                Official trailer for Money Mafia Season 3.
              </p>
            </div>

            {/* Project Overview */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Overview</h2>
            <p className="text-gray-700 mb-6">
              I contributed to the production of <em>Money Mafia S3</em>, a gripping four-part
              documentary series exploring Mumbai’s shadow economy. The show dives into extortion,
              gold smuggling, drug trafficking, and hawala operations, offering an unflinching look
              at some of India’s most audacious rackets. Produced in collaboration with VICE and
              Discovery, the series combines bold storytelling with investigative depth.
            </p>

            {/* My Role */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">My Role</h2>
            <p className="text-gray-700 mb-4">
              Serving as the Director’s Assistant on this project was a milestone in my career, 
              offering first-hand experience with two studios whose work has long inspired me. My
              responsibilities spanned across multiple critical areas of production:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-12">
              <li>
                <span className="font-medium">End-to-End Production Management:</span> Oversaw the
                complete production lifecycle of the series.
              </li>
              <li>
                <span className="font-medium">Script Development:</span> Managed writing flow,
                ensuring narrative coherence and factual accuracy.
              </li>
              <li>
                <span className="font-medium">Client Communication:</span> Acted as point of contact
                between production and clients, ensuring seamless collaboration.
              </li>
              <li>
                <span className="font-medium">On-Set Logistics:</span> Coordinated day-to-day
                logistics to keep filming efficient and on-schedule.
              </li>
              <li>
                <span className="font-medium">Creative Direction:</span> Oversaw props and art
                coordination to maintain creative integrity.
              </li>
              <li>
                <span className="font-medium">Cross-Department Coordination:</span> Worked closely
                with cinematographers, sound designers, composers, and line producers.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  )
}
