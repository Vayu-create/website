import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { getPostBySlug } from '@/lib/mdx'
import { formatDate } from '@/lib/formatDate'
import { MDXContent } from '@/components/MDXContent'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | Sarthak Dangwal',
      description: 'The requested post could not be found.',
    }
  }

  const ogUrl = `/api/og?slug=${slug}&title=${encodeURIComponent(post.title)}&category=${encodeURIComponent(post.category)}&date=${encodeURIComponent(post.date)}`

  return {
    title: `${post.title} | Sarthak Dangwal`,
    description: post.description || post.title,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description || post.title,
      url: `https://sarthakdangwal.com/thoughts-readings/${slug}`,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
      siteName: 'Sarthak Dangwal',
      publishedTime: post.date,
      authors: ['Sarthak Dangwal'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description || post.title,
      creator: '@sarthakdangwal',
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
  }
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="relative w-full max-w-full overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1084px] px-4 sm:px-6 pt-6 sm:pt-[54px]">
        {/* Navigation and Date */}
        <div className="w-full pb-8 sm:pb-[96px]">
          <div className="flex justify-between items-center max-w-2xl mx-auto">
            <Link 
              href="/thoughts-readings" 
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600"
            >
              <ChevronLeft className="h-4 w-4" />
              Thoughts
            </Link>
            <time className="text-sm text-gray-400">
              {formatDate(post.date)}
            </time>
          </div>
        </div>

        {/* Article Content */}
        <article className="mx-auto w-full max-w-2xl pb-16 sm:pb-32">
          {/* Category */}
          <div className="mb-1 text-sm text-gray-400">
            {post.category}
          </div>

          {/* Title */}
          <h1 className="mb-3 text-[28px] font-semibold tracking-[-0.02em] text-gray-900">
            {post.title}
          </h1>
          {/* Author */}
            <div className="mb-8 flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <Image
                  src="/logos/yb.jpg"
                  alt="Sarthak Dangwal"
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
          <div>
            <MDXContent content={post.content} />
          </div>
        </article>
      </div>
    </div>
  )
}

