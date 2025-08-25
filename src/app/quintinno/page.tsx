// app/quintinno-labs/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quintinno Labs',
  description:
    'Journey + case study of my work with Quintinno Labs on QUINT, a compact, trunk-fit EV power bank: positioning, copy, GTM collateral, and media coordination.',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png',
  },
  openGraph: {
    type: 'article',
    title: 'Quintinno Labs',
    description:
      'Marketing + positioning for QUINT, a compact, portable EV power bank by Quintinno Labs.',
    url: 'https://sarthakdangwal.com/quintinno-labs',
    siteName: 'Sarthak Dangwal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quintinno Labs',
    description:
      'Marketing + positioning for QUINT, a compact, portable EV power bank by Quintinno Labs.',
  },
}

export default function QuintinnoLabsPage() {
  return (
    <div className="relative w-full max-w-full overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1084px] px-4 sm:px-6 pt-6 sm:pt-[54px]">
        {/* Navigation */}
        <div className="w-full pb-6 sm:pb-12">
          <div className="flex justify-start items-center max-w-2xl mx-auto">
            <Link
              href="/"
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-700"
            >
              <ChevronLeft className="h-4 w-4" />
              Home
            </Link>
          </div>
        </div>

        {/* Project Content */}
        <article className="mx-auto w-full max-w-2xl pb-16 sm:pb-32">
          {/* Title */}
          <h1 className="mb-8 text-[28px] font-semibold tracking-[-0.02em] text-gray-900">
            Quintinno Labs
          </h1>

          {/* Hero Image */}
          <div className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
            <Image
              src="/quintinno/hero.png"
              alt="QUINT portable EV power bank — hero image"
              width={1440}
              height={720}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="prose prose-gray max-w-none">
            {/* Intro */}
            <p>
              I joined <strong>Quintinno Labs</strong>, a Guwahati-based pre-seed startup, as a
              Marketing Consultant to support the founder in the very early stages of shaping the
              company’s narrative. The team was building <strong>QUINT</strong>, a compact, trunk-fit
              portable power bank for electric cars designed to address one of the biggest barriers
              to EV adoption in India: range anxiety.<br/><br/>
            </p>

            {/* Project Overview */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Overview</h2>
            <p className="text-gray-700">
              Quintinno Labs set out to solve a critical pain point in the EV ecosystem: the lack of
              convenient charging solutions when drivers are far from public charging stations.
              QUINT was designed to be modular, portable, and easy to store in a car’s trunk,
              providing ~35–40 km of backup charge in emergencies.<br/><br/>
            </p>

            {/* My Role */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">My Role</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                <span className="font-medium">Positioning & Website Copy:</span> Crafted clear
                messaging around portability, “range-anxiety relief,” and real-world use cases.
              </li>
              <li>
                <span className="font-medium">GTM Collateral:</span> Produced one-pagers, visuals,
                and explainer video scripts to showcase QUINT’s utility and design.
              </li>
              <li>
                <span className="font-medium">PR & Ecosystem Positioning:</span> Supported the
                founder in investor presentations, accelerator applications, and regional media
                visibility.
              </li>
            </ul>

            {/* Outcomes */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-10">Outcomes</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                Improved top-of-funnel clarity, positioning QUINT as a trunk-fit, portable EV backup.
              </li>
              <li>
                Created assets that strengthened investor outreach and ecosystem presence.
              </li>
              <li>
                Helped build early credibility as a deep-tech innovator from Northeast India.
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-10">
              <p className="text-gray-700">
                Curious about QUINT? Know more {' '}
                <Link
                  href="https://www.quintinno.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 underline hover:text-gray-700"
                >
                  here
                </Link>
                .
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
