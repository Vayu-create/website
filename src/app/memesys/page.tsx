// app/memesys-culture-lab/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ExternalLink } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Memesys Culture Lab | Sarthak Dangwal',
  description:
    'Science-communication reels for Memesys Culture Lab, including a perception-limits reel for Anand Gandhi — concept, script, design, editing, and platform optimization.',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png',
  },
  openGraph: {
    type: 'article',
    title: 'Memesys Culture Lab',
    description:
      'Short-form science communication: concept-to-publish reels for Memesys Culture Lab and Anand Gandhi.',
    url: 'https://sarthakdangwal.com/memesys-culture-lab',
    siteName: 'Sarthak Dangwal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Memesys Culture Lab',
    description:
      'Short-form science communication: concept-to-publish reels for Memesys Culture Lab and Anand Gandhi.',
  },
}

export default function MemesysCultureLabPage() {
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
            Memesys Culture Lab
          </h1>

          {/* Divider */}
          <div className="mb-8 h-px w-full bg-gray-200" />

          <div className="prose prose-gray max-w-none">
            {/* Project Overview */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Overview</h2>
            <p className="text-gray-700 mb-6">
              During my time at Memesys Culture Lab, I developed and produced a series of short
              science‑communication reels, turning complex ideas into accessible, highly visual
              stories for broader audiences. A notable piece was created for{' '}
              <em>Anand Gandhi</em> (filmmaker, entrepreneur, media producer, and systems
              researcher) for his Instagram page.
            </p>

            {/* Instagram Reel */}
            <div className="my-8">
              <div className="aspect-[9/16] rounded-lg overflow-hidden shadow bg-gray-100 max-w-sm mx-auto">
                <iframe
                  src="https://drive.google.com/file/d/1qhJTo9K1wxYX7N_N0f6zRfhXvNgKud7F/preview"
                  title="Anand Gandhi — Reel"
                  frameBorder="0"
                  allow="autoplay"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Conceptual Approach */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Conceptual Approach</h2>
            <p className="text-gray-700 mb-6">
              The reel explored the <em>limitations of perception</em>, inspired by Edwin Abbott
              Abbott’s 1884 book, <em>Flatland: A Romance of Many Dimensions</em>. The 60‑second
              format framed how our understanding of reality is constrained by bias and dimensional
              blind spots—using minimal text, motion graphics, and pacing to keep the idea precise
              and thought‑provoking.
            </p>

            {/* Origin Story / Break-in Reel */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">How This Collaboration Began</h2>
            <p className="text-gray-700 mb-4">
            I had been trying to reach Anand Gandhi for months with no response. Rather than send another email, I decided to show him what I could do. I took his INK talk “Why I Make Films” and re-imagined it in a way that wrapped the complex underlying philosophy in easily palatable visuals. A few weeks after posting it on Instagram, the gamble paid off. Gandhi saw the edit, it resonated with him, and I received a DM inviting me to join Memesys. 
            </p>

            {/* Insert Video (the edit that led to the role) */}
            <div className="my-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Video That Got Me Hired</h3>
              <div className="aspect-video rounded-lg overflow-hidden shadow bg-gray-100">
                <iframe
                  src="https://drive.google.com/file/d/1cVfrtQcUh0uu1SFWcIRMY6up-f_JvtnO/preview"
                  title="Break‑in Reel"
                  frameBorder="0"
                  allow="autoplay"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Key Responsibilities */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-12">
              <li>
                <span className="font-medium">Conceptualization &amp; Storyboarding:</span> Shaped
                core concepts and visual storyboards to guide pacing and beats.
              </li>
              <li>
                <span className="font-medium">Scripting &amp; Copywriting:</span> Crafted concise
                on‑screen text and captions to clarify and emphasize ideas.
              </li>
              <li>
                <span className="font-medium">Visual Design &amp; Art Direction:</span> Defined the
                visual language to align with thematic goals and maintain polish.
              </li>
              <li>
                <span className="font-medium">Video Editing &amp; Post‑Production:</span> Edited
                reels end‑to‑end, adding motion, sound design, and music for impact.
              </li>
              <li>
                <span className="font-medium">Platform Optimization:</span> Tailored aspect ratios,
                hooks, and captioning for Instagram and other platforms.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  )
}
