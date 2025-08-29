import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'

export async function Blog() {
  const posts = await getAllPosts()
  
  return (
    <div className="space-y-4">
      <h2 className="text-sm font-medium uppercase text-gray-400">THOUGHTS</h2>
      
      <div className="space-y-4">
        {posts.slice(0, 3).map((post) => (
          <div key={post.slug} className="group">
            <Link 
              href={`/thoughts-readings/${post.slug}`}
              className="grid grid-cols-[80px_1fr] items-baseline"
            >
              <span className="text-sm text-gray-400">{post.date}</span>
              <div>
                <span className="inline border-b border-gray-200 text-base text-gray-600 group-hover:text-gray-900">
                  {post.title}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
} 