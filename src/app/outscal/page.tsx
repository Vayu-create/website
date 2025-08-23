// app/outscal/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ExternalLink } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Outscal: Scaling to 100M+ Views | Sarthak Dangwal',
  description:
    'How I scaled Outscal\'s YouTube presence to 100M+ views and 50K+ subscribers with an AI-assisted Shorts engine and data-driven experimentation.',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png',
  },
  openGraph: {
    type: 'article',
    title: 'Outscal: Scaling to 100M+ Views',
    description:
      'AI-assisted YouTube Shorts engine, rapid experimentation, and multi-platform execution to drive growth for a VC-backed startup.',
    url: 'https://sarthakdangwal.com/outscal',
    siteName: 'Sarthak Dangwal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Outscal: Scaling to 100M+ Views',
    description:
      'AI-assisted YouTube Shorts engine, rapid experimentation, and multi-platform execution to drive growth for a VC-backed startup.',
  },
}

export default function OutscalPage() {
  return (
    <div className="relative w-full max-w-full overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1084px] px-4 sm:px-6 pt-6 sm:pt-[54px]">
                 {/* Navigation */}
         <div className="w-full pb-6 sm:pb-12">
           <div className="flex justify-start items-center max-w-2xl mx-auto">
             <Link
               href="/"
               className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600"
             >
               <ChevronLeft className="h-4 w-4" />
               Home
             </Link>
           </div>
         </div>

        {/* Project Content */}
        <article className="mx-auto w-full max-w-2xl pb-16 sm:pb-32">
          {/* Title */}
          <h1 className="mb-3 text-[28px] font-semibold tracking-[-0.02em] text-gray-900">
            Outscal: Scaling to 100M+ Views
          </h1>

          {/* Divider */}
          <div className="mb-8 h-px w-full bg-gray-200" />

          <div className="prose prose-gray max-w-none">
            {/* Problem — bloggy narrative */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Problem Statement</h2>
            <p className="text-gray-700">
            Outscal was an early stage Ed‑Tech startup that needed organic
              traction fast. I started by taking the coolest game dev stories everywhere: LinkedIn, 
              Instagram Reels, TikTok, Discord… then watched where people actually leaned in. One
              channel kept breaking out: <em>YouTube Shorts</em>. Discovery was faster, retention
              was healthier, and the analytics gave us clean feedback loops. From that point on, I
              treated the channel like a product: ship, measure, iterate, repeat.
            </p>

            {/* Quick stats strip */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-lg border bg-gray-50 p-3 text-center">
                <div className="text-xl font-semibold text-gray-900">100M+</div>
                <div className="text-xs text-gray-600">YouTube Views</div>
              </div>
              <div className="rounded-lg border bg-gray-50 p-3 text-center">
                <div className="text-xl font-semibold text-gray-900">50K+</div>
                <div className="text-xs text-gray-600">Subscribers</div>
              </div>
              <div className="rounded-lg border bg-gray-50 p-3 text-center">
                <div className="text-xl font-semibold text-gray-900">30K+</div>
                <div className="text-xs text-gray-600">Users to Platform</div>
              </div>
              <div className="rounded-lg border bg-gray-50 p-3 text-center">
                <div className="text-xl font-semibold text-gray-900">7.2%</div>
                <div className="text-xs text-gray-600">Peak CTR</div>
              </div>
            </div>

            {/* Carousel / Hero */}
            <div className="my-8">
              <Image
                src="/outscal/OutscalYTShorts.png"
                alt="Outscal: Shorts carousel preview"
                width={1200}
                height={560}
                className="rounded-lg w-full"
                priority
              />
              <p className="mt-2 text-xs text-gray-500 text-center">
                A slice of the Shorts wall that consistently found new audiences.
              </p>
            </div>

            {/* What I built — visual, concrete */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">What I Built</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-12">
              <li>
                <span className="font-medium">A repeatable Shorts engine:</span> hooks library,
                script templates, pacing rules, caption presets, and a thumbnail system.
              </li>
              <li>
                <span className="font-medium">An AI‑assisted pipeline:</span> ideation prompts,
                auto‑cut helpers, and QC checklists to move from idea → edit → publish quickly.
              </li>
              <li>
                <span className="font-medium">An experiment log:</span> topic × hook × format
                matrix; tracked watch time, CTR, AVD, and retention inflection points.
              </li>
              <li>
                <span className="font-medium">Cross‑platform lift:</span> mirrored learnings to
                LinkedIn, Instagram, TikTok, and Discord to keep the brand present where the
                audience hangs out.
              </li>
            </ul>

            {/* Method — told like a build log */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Method</h2>
            <div className="space-y-5 text-gray-700">
              <div className="rounded-lg border bg-gray-50 p-4">
                <h4 className="font-medium text-gray-900 mb-1"> Find the Signal</h4>
                <p>
                  Rapid multi‑platform testing to identify the fastest discovery + strongest
                  retention combo. Shorts won; everything else became support.
                </p>
              </div>
              <div className="rounded-lg border bg-gray-50 p-4">
                <h4 className="font-medium text-gray-900 mb-1">Productize the Process</h4>
                <p>
                  Turn intuition into checklists and templates. Keep the voice human, the edits
                  tight, and the first 3 seconds undeniable.
                </p>
              </div>
              <div className="rounded-lg border bg-gray-50 p-4">
                <h4 className="font-medium text-gray-900 mb-1"> Experiment Relentlessly</h4>
                <p>
                  Hooks, topics, thumbnails, length, pacing, posting windows. Small changes, clean
                  reads, quick roll‑backs when they missed.
                </p>
              </div>
              <div className="rounded-lg border bg-gray-50 p-4">
                <h4 className="font-medium text-gray-900 mb-1"> Close the Loop</h4>
                <p>
                  Tie content back to outcomes: views → session starts → signups. Keep what moves
                  users to the platform; shelve what doesn’t.
                </p>
              </div>
            </div>

            {/* LinkedIn tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <figure className="bg-gray-50 rounded-lg overflow-hidden">
                                 <Image
                   src="/outscal/Outscal LI 1.png"
                   alt="Outscal LinkedIn 1"
                   width={800}
                   height={600}
                   className="w-full h-auto"
                 />
                <figcaption className="px-3 py-2 text-xs text-gray-500">
                  Outscal LinkedIn 1 — repackaging Shorts into carousels for LinkedIn.
                </figcaption>
              </figure>
              <figure className="bg-gray-50 rounded-lg overflow-hidden">
                                 <Image
                   src="/outscal/Outscal LI 2.png"
                   alt="Outscal LinkedIn 2"
                   width={800}
                   height={600}
                   className="w-full h-auto"
                 />
                <figcaption className="px-3 py-2 text-xs text-gray-500">
                  Outscal LinkedIn 2 — thought‑leadership snippets to reinforce expertise.
                </figcaption>
              </figure>
            </div>

            {/* Results — keep punchy */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Results</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>
                <span className="font-medium">Substantial Subscriber Growth:</span> 0 → 50,000+
                YouTube subscribers.
              </li>
              <li>
                <span className="font-medium">Massive Viewership:</span> 100M+ total views, with
                Shorts leading discovery.
              </li>
              <li>
                <span className="font-medium">Platform Traffic:</span> 30,000+ unique users driven
                to Outscal’s platform.
              </li>
              <li>
                <span className="font-medium">High Engagement:</span> peak 7.2% CTR on
                top‑performing content.
              </li>
            </ul>
                         {/* CTA */}
             <div className="mt-8">
               <h3 className="text-lg font-semibold text-gray-900 mb-2">
                 Check Out <a
                   href="https://www.youtube.com/@Outscal/shorts"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-gray-700 hover:text-gray-900 underline"
                 >
                   Outscal&apos;s YouTube
                 </a>
               </h3>
             </div>
          </div>
        </article>
      </div>
    </div>
  )
}
