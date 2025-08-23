import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TakeCare+ | Sarthak Dangwal',
  description: 'A revolutionary healthcare platform that connects patients with the best doctors.',
  openGraph: {
    type: 'article',
    title: 'TakeCare+',
    description: 'A revolutionary healthcare platform that connects patients with the best doctors.',
    url: 'https://sarthakdangwal.com/projects/takecare-plus',
    siteName: 'Sarthak Dangwal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TakeCare+',
    description: 'A revolutionary healthcare platform that connects patients with the best doctors.',
  },
}

export default function TakeCarePlusPage() {
  return (
    <div className="relative w-full max-w-full overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1084px] px-4 sm:px-6 pt-6 sm:pt-[54px]">
        {/* Navigation and Date */}
        <div className="w-full pb-8 sm:pb-[96px]">
          <div className="flex justify-between items-center max-w-2xl mx-auto">
            <Link 
              href="/" 
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600"
            >
              <ChevronLeft className="h-4 w-4" />
              Projects
            </Link>
            <time className="text-sm text-gray-400">
              Launched 2024
            </time>
          </div>
        </div>

        {/* Project Content */}
        <article className="mx-auto w-full max-w-2xl pb-16 sm:pb-32">
          {/* Category */}
          <div className="mb-1 text-sm text-gray-400">
            Healthcare Platform
          </div>

          {/* Title */}
          <h1 className="mb-3 text-[28px] font-semibold tracking-[-0.02em] text-gray-900">
            TakeCare+
          </h1>

          {/* Author */}
          <div className="mb-8 flex items-center">
            <div className="flex items-center gap-3">
              <Image
                src="/logos/takecare-plus.png"
                alt="TakeCare+"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-sm text-gray-600">by Sarthak Dangwal</span>
            </div>
          </div>

          {/* Divider */}
          <div className="mb-8 h-px w-full bg-gray-200" />

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              TakeCare+ is a revolutionary healthcare platform that connects patients with the best doctors, 
              making quality healthcare accessible to everyone.
            </p>

            {/* Project Image */}
            <div className="my-8">
              <Image
                src="/takecare-plus-hero.jpg"
                alt="TakeCare+ Platform Screenshot"
                width={800}
                height={400}
                className="rounded-lg w-full"
              />
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">The Problem</h2>
            <p className="text-gray-700 mb-6">
              Finding the right doctor can be overwhelming. Patients often struggle with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Long wait times for appointments</li>
              <li>Difficulty finding specialists</li>
              <li>Lack of transparency in doctor reviews</li>
              <li>Complex insurance processes</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Solution</h2>
            <p className="text-gray-700 mb-6">
              TakeCare+ simplifies the entire healthcare journey with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Instant doctor matching based on symptoms</li>
              <li>Real-time appointment booking</li>
              <li>Verified patient reviews and ratings</li>
              <li>Insurance verification and claims processing</li>
            </ul>

            {/* Video Section */}
            <div className="my-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Demo</h3>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Video demo would go here</p>
                {/* Replace with actual video component */}
                {/* <video controls className="w-full rounded-lg">
                  <source src="/takecare-plus-demo.mp4" type="video/mp4" />
                </video> */}
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">Technology Stack</h2>
            <p className="text-gray-700 mb-4">
              Built with modern technologies for scalability and performance:
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Frontend</h4>
                <p className="text-sm text-gray-600">React, TypeScript, Tailwind CSS</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Backend</h4>
                <p className="text-sm text-gray-600">Node.js, Express, PostgreSQL</p>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">Results</h2>
            <p className="text-gray-700 mb-4">
              Since launch, TakeCare+ has achieved:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>10,000+ patient registrations</li>
              <li>500+ verified doctors onboarded</li>
              <li>95% patient satisfaction rate</li>
              <li>Average appointment booking time: 2 minutes</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Visit TakeCare+</h3>
              <p className="text-blue-700 mb-4">
                Experience the future of healthcare booking.
              </p>
              <a 
                href="https://takecare-plus.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Launch App →
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
