// app/indias-space-odyssey/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'India’s Space Program — Discovery+',
  description: 'Documenting the journey of India’s space program for Discovery+',
  openGraph: {
    type: 'article',
    title: 'India’s Space Program — Discovery+',
    description: 'Documenting the journey of India’s space program for Discovery+',
    url: 'https://sarthakdangwal.com/space',
    siteName: 'Sarthak Dangwal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'India’s Space Program — Discovery+',
    description: 'Documenting the journey of India’s space program for Discovery+',
  },
}

export default function IndiasSpaceOdysseyPage() {
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
          <h1 className="mb-8 text-[28px] font-semibold tracking-[-0.02em] text-gray-900">
            India’s Space Odyssey
          </h1>

          <div className="prose prose-gray max-w-none">
            {/* Embedded Trailer */}
            <div className="my-8">
              <div className="aspect-video rounded-lg overflow-hidden shadow">
                <iframe
                  src="https://www.youtube.com/embed/jvSy8pQo1pw"
                  title="India’s Space Odyssey — Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="mt-2 text-xs text-gray-500 text-center">
                Official trailer for India’s Space Odyssey (Discovery+ Original).
              </p>
            </div>

            {/* Project Overview */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Overview</h2>
            <p className="text-gray-700 mb-6">
              <em>India’s Space Odyssey</em> is a compelling documentary produced as a Discovery+ Original, narrating the inspiring story of India's space program. The documentary celebrates the people behind the program and the extraordinary challenges they had to overcome to achieve their ambitious goals.
            </p>

            {/* My Role */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">My Role</h2>
            <p className="text-gray-700 mb-4">
              I served as an Assistant Producer for the documentary, contributing across key parts of
              production:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-12">
              <li>
                <span className="font-medium">Production Assistance:</span> Supported the Director,
                Executive Producer, and Chief Video Editor throughout the production process.
              </li>
              <li>
                <span className="font-medium">Video Editing:</span> Managed editing tasks to shape
                narrative flow and strengthen story arcs.
              </li>
              <li>
                <span className="font-medium">Interview Management:</span> Coordinated and managed
                interviews with key individuals involved in India’s space program.
              </li>
              <li>
                <span className="font-medium">Data Management:</span> Organized and maintained media,
                research, and production assets for smooth collaboration.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  )
}
