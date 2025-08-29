"use client"

import Image from 'next/image'
import { LinkText } from './LinkText'
import { Mail } from 'lucide-react'
import { useState, useEffect, useMemo } from 'react'

export function Hero() {
  const [showCopied, setShowCopied] = useState(false)
  const [decimalAge, setDecimalAge] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText('sarthakdangwal3@gmail.com')
    setShowCopied(true)
    setTimeout(() => setShowCopied(false), 2000)
  }

  const birthDate = useMemo(() => new Date('1999-05-27'), [])

  useEffect(() => {
    const calculateAge = () => {
      const today = new Date()
      let age = today.getFullYear() - birthDate.getFullYear()
      const m = today.getMonth() - birthDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      return age
    }

    const calculateDecimalAge = () => {
      const birthTime = new Date('1999-05-27T00:00:00').getTime()
      const currentTime = new Date().getTime()
      const ageInMilliseconds = currentTime - birthTime
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
      setDecimalAge(ageInYears)
    }

    if (isHovering) {
      const interval = setInterval(calculateDecimalAge, 100)
      return () => clearInterval(interval)
    } else {
      setDecimalAge(calculateAge())
    }
  }, [isHovering, birthDate])

  const age = Math.floor(decimalAge)

  return (
      <div className="mx-auto w-full max-w-[1084px] px-4 py-8 md:grid md:grid-cols-12 md:gap-5 md:px-0 md:py-16">
      {/* One column gap at start - desktop only */}
      <div className="hidden md:block md:col-span-1" />
      
      {/* Mobile layout */}
      <div className="flex flex-col md:hidden gap-8">
        {/* Two-column layout for intro section on mobile */}
        <div className="flex flex-row gap-4 items-start">
          {/* Welcome paragraph - 75% width */}
          <div className="w-3/4">
            <p className="text-base text-gray-600">
              Hello! I&apos;m Sarthak and you&apos;re currently exploring my tiny 
              corner of the internet. I use this space to project my ideas 
              and express my obsessions.
            </p>
          </div>
          
          {/* Image - 25% width */}
          <div className="w-1/4 aspect-square relative">
            <Image
              src="/yb-hero.jpg"
              alt="Sarthak Dangwal"
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
        
        {/* Rest of mobile content */}
        <div className="space-y-8">
          {/* Summary section */}
          <div className="space-y-4">
            <h2 className="text-sm font-medium uppercase text-gray-400">Summary</h2>
            <ul className="list-disc space-y-2 pl-4 text-gray-600 [&>li::marker]:text-gray-300">
              <li>
                Currently I&apos;m working on {' '}
                <LinkText
                  variant="single-image-link"
                  text="TakeCare+"
                  href="/takecare-plus"
                  images={{ src: "/logos/TakeCarelogo.png", alt: "TakeCare+" }}
                  withBorder
                />
                {' '}
              </li>
              <li>
                Previously I led marketing for{' '}
                <LinkText
                  variant="single-image-link"
                  text="Outscal"
                  href="https://outscal.com"
                  images={{ src: "/logos/Outscal.png",alt: "Outscal"}}
                  withBorder
                />
                {' '}&{' '}
                <LinkText
                  variant="single-image-link"
                  text="Qunitinno Labs"
                  href="https://www.quintinno.com/"
                  images={{ src: "/logos/Quint.png", alt: "Quintinno" }}
                  withBorder
                />
              </li>
              <li>
                I&apos;ve created documentaries for {' '}
                <LinkText
                  variant="single-image-link"
                  text="Discovery"
                  href="https://www.discoveryplus.com"
                  images={{ src: "/logos/Discovery.png", alt: "Discovery" }}
                  withBorder
                />
                {' '}&{' '}
                <LinkText
                  variant="single-image-link"
                  text="VICE"
                  href="https://www.vice.com/"
                  images={{ src: "/logos/Vice.png",alt: "VICE" }}
                  withBorder
                />
              </li>
              <li>
                <span
                  className="relative"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {age}
                  {isHovering && (
                    <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform whitespace-nowrap rounded-full bg-gray-900 px-3 py-1 text-sm text-white shadow-lg">
                      {decimalAge.toFixed(9)}
                    </div>
                  )}
                </span>{' '}
                years old, based in Dehradun
              </li>
              <li>
                I created YouTube shorts that got over 100M{' '}
                <LinkText
                  variant="single-image-link"
                  text="views"
                  href="https://www.youtube.com/@Outscal/shorts"
                  images={{ src: "/logos/Youtube.png", alt: "youtube" }}
                  withBorder
                />
              </li>
              <li>
                I also created some cool sci-com videos for {' '}
                <LinkText
                  variant="single-image-link"
                  text="Anand Gandhi"
                  href="https://x.com/Memewala"
                  images={{ src: "/logos/Anand.jpg", alt: "Anand Gandhi" }}
                  withBorder
                />
              </li>
              <li>
                You can find more about my work under {' '}
                <LinkText
                  variant="text-link"
                  text="projects"
                  href="/projects"
                />
              </li>
            </ul>
          </div>

          {/* Social and Music section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 w-full">
              <a 
                href="mailto:sarthakdangwal3@gmail.com" 
                onClick={handleEmailClick}
                className="group relative text-gray-400 hover:text-gray-600 ml-2"
              >
                <Mail className="h-5 w-5" />
                {showCopied && (
                  <div className="absolute bottom-full left-1/2 mb-1 -translate-x-1/2 transform whitespace-nowrap rounded-full bg-gray-900 px-2 py-0.5 text-xs text-white">
                    Copied
                  </div>
                )}
              </a>
              {/* Music section - inline with social icons */}
              <div className="group flex items-center gap-2 text-gray-600 flex-1 min-w-0">
                <div className="flex items-center gap-2 whitespace-nowrap overflow-hidden">
                  <div className="overflow-hidden rounded-full flex-shrink-0">
                    <Image
                      src="/cd.png"
                      alt="Album Art"
                      width={24}
                      height={24}
                      className="animate-[spin_3s_linear_infinite_paused] group-hover:animate-[spin_3s_linear_infinite]"
                    />
                  </div>
                  <span className="text-sm">
                    ♪ Listening to{' '}
                    <span className="inline-flex max-w-[80px] sm:max-w-none overflow-hidden">
                      <LinkText
                        variant="text-link"
                        text="'I Only Smoke When I Drink"
                        href="https://youtu.be/ESjPc7I5h_Q"
                      />
                      <span className="truncate"> by nimino</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop layout - Main content - 7 columns */}
      <div className="hidden md:block md:col-span-7 space-y-12">
        {/* Welcome paragraph */}
        <p className="text-base text-gray-600">
          Hello! I&apos;m Sarthak and you&apos;re currently exploring my tiny <br />
          corner of the internet. I use this space to project my ideas <br />
          and express my obsessions.
        </p>

        {/* Summary section */}
        <div className="space-y-4">
          <h2 className="text-sm font-medium uppercase text-gray-400">Summary</h2>
          <ul className="list-disc space-y-2 pl-4 text-gray-600 [&>li::marker]:text-gray-300">
            <li>
              Currently I&apos;m working on{' '}
              <LinkText
                variant="single-image-link"
                text="TakeCare+"
                href="/takecare-plus"
                images={{ src: "/logos/TakeCarelogo.png", alt: "TakeCare+" }}
                withBorder
              />
              {' '}
            </li>
            <li>
              Previously I led marketing for{' '}
              <LinkText
                variant="single-image-link"
                text="Outscal"
                href="https://outscal.com"
                images={{ src: "/logos/Outscal.png",alt: "Outscal"}}
                withBorder
              />
              {' '}&{' '}
              <LinkText
                variant="single-image-link"
                text="Qunitinno Labs"
                href="https://www.quintinno.com/"
                images={{ src: "/logos/Quint.png", alt: "Quintinno" }}
                withBorder
              />
            </li>
            <li>
              I&apos;ve created documentaries for {' '}
              <LinkText
                variant="single-image-link"
                text="Discovery"
                href="https://www.discoveryplus.com"
                images={{ src: "/logos/Discovery.png", alt: "Discovery" }}
                withBorder
              />
              {' '}&{' '}
              <LinkText
                variant="single-image-link"
                text="VICE"
                href="https://www.vice.com/"
                images={{ src: "/logos/Vice.png",alt: "VICE" }}
                withBorder
              />
            </li>
            <li>
              <span
                className="relative"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {age}
                {isHovering && (
                  <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform whitespace-nowrap rounded-full bg-gray-900 px-3 py-1 text-sm text-white shadow-lg">
                    {decimalAge.toFixed(9)}
                  </div>
                )}
              </span>{' '}
              years old, based in Dehradun
            </li>
            <li>
              I created YouTube shorts that got over 100M{' '}
              <LinkText
                variant="single-image-link"
                text="views"
                href="https://www.youtube.com/@Outscal/shorts"
                images={{ src: "/logos/Youtube.png", alt: "youtube" }}
                withBorder
              />
            </li>
                          <li>
                I also created some cool sci-com videos for {' '}
                <LinkText
                  variant="single-image-link"
                  text="Anand Gandhi"
                  href="https://x.com/Memewala"
                  images={{ src: "/logos/Anand.jpg", alt: "Anand Gandhi" }}
                  withBorder
                />
              </li>
            <li>
            You can find more about my work under {' '}
              <LinkText
                variant="text-link"
                text="projects"
                href="/projects"
              />
            </li>
          </ul>
        </div>

        {/* Social and Music section */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <a 
              href="mailto:sarthakdangwal3@gmail.com" 
              onClick={handleEmailClick}
              className="group relative text-gray-400 hover:text-gray-600 ml-2"
            >
              <Mail className="h-5 w-5" />
              {showCopied && (
                <div className="absolute bottom-full left-1/2 mb-1 -translate-x-1/2 transform whitespace-nowrap rounded-full bg-gray-900 px-2 py-0.5 text-xs text-white">
                  Copied
                </div>
              )}
            </a>
          </div>
          
          {/* Music section */}
          <div className="group flex items-center gap-2 text-gray-600">
            <div className="flex items-center gap-2 whitespace-nowrap overflow-hidden">
              <div className="overflow-hidden rounded-full flex-shrink-0">
                <Image
                  src="/cd.png"
                  alt="Album Art"
                  width={24}
                  height={24}
                  className="animate-[spin_3s_linear_infinite_paused] group-hover:animate-[spin_3s_linear_infinite]"
                />
              </div>
              <span className="text-sm">
                ♪ Listening to{' '}
                <LinkText
                  variant="text-link"
                  text="I Only Smoke When I Drink by nimino"
                  href="https://youtu.be/ESjPc7I5h_Q"
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Image - 3 columns */}
      <div className="hidden md:block md:col-span-3">
        <Image
          src="/yb-hero.jpg"
          alt="Sarthak Dangwal"
          width={400}
          height={400}
          className="rounded-lg"
          priority
        />
      </div>

      {/* One column gap at end - desktop only */}
      <div className="hidden md:block md:col-span-1" />
    </div>
  )
} 