import Link from "next/link";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { notFound } from "next/navigation";
import { apiGetOptional, getApiBaseUrl, withAbsoluteUrl } from "../../lib/api";

type BlogPostDetailDto = {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  published_at: string | null
  cover_image: string | null
  created_at: string
  updated_at: string
}

export async function BlogPost({ id }: { id?: string }) {
  const slug = id
  if (!slug) return null

  const post = await apiGetOptional<BlogPostDetailDto>(`/api/blog/${encodeURIComponent(slug)}/`)
  if (!post) return notFound()
  const baseUrl = getApiBaseUrl()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-teal-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Blogga qaytish
          </Link>
          <div className="inline-block bg-teal-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-teal-100">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>Admin</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{post.published_at ? new Date(post.published_at).toLocaleDateString() : "-"}</span>
            </div>
            <button className="flex items-center gap-2 hover:text-white transition-colors">
              <Share2 className="w-5 h-5" />
              <span>Ulashish</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <ImageWithFallback
            src={
              withAbsoluteUrl(baseUrl, post.cover_image) ||
              "https://images.unsplash.com/photo-1632052999485-d748103abf98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            }
            alt={post.title}
            className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <article
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
            style={{
              lineHeight: "1.8",
            }}
          />
          <style>{`
            article h2 {
              font-size: 1.75rem;
              font-weight: 700;
              margin-top: 2rem;
              margin-bottom: 1rem;
              color: #0f766e;
            }
            article p {
              margin-bottom: 1.5rem;
              color: #374151;
            }
            article ul {
              margin-bottom: 1.5rem;
              padding-left: 2rem;
              list-style-type: disc;
            }
            article li {
              margin-bottom: 0.5rem;
              color: #374151;
            }
          `}</style>
        </div>
      </section>

      {/* Author Info */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1612944095914-33fd0a85fcfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBzbWlsaW5nJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NzYyMzc0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Admin"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">Admin</h3>
              <p className="text-gray-600 mb-3">
                Pediatr, 15 yillik tajribaga ega mutaxassis. Bolalar sog'lig'i va rivojlanishi bo'yicha ekspert.
              </p>
              <Link
                href="/doctors"
                className="text-teal-600 font-medium hover:text-teal-700 transition-colors"
              >
                Batafsil →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16" />
    </div>
  );
}
