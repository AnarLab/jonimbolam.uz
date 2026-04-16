import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { apiGet, getApiBaseUrl, withAbsoluteUrl } from "../../lib/api";

type BlogPostListDto = {
  id: number
  title: string
  slug: string
  excerpt: string
  published_at: string | null
  cover_image: string | null
}

export async function Blog() {
  const blogPosts = await apiGet<BlogPostListDto[]>("/api/blog/");
  const settings = await apiGet<{ blog_hero_title?: string; blog_hero_subtitle?: string }>("/api/pages/settings/");
  const baseUrl = getApiBaseUrl()

  const categories = ["Hammasi", "Pediatriya", "Kardiologiya", "Terapiya", "Endokrinologiya", "Oftalmologiya"];
  const featured = blogPosts[0]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{settings.blog_hero_title || "Tibbiyot blogi"}</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            {settings.blog_hero_subtitle ||
              "Sog'liqni saqlash, kasalliklarni oldini olish va sog'lom turmush tarzi haqida foydali maqolalar"}
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full transition-colors ${
                  index === 0
                    ? "bg-teal-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {featured ? (
            <div className="mb-12">
              <Link href={`/blog/${featured.slug}`}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow grid grid-cols-1 lg:grid-cols-2">
                <ImageWithFallback
                  src={
                    withAbsoluteUrl(baseUrl, featured.cover_image) ||
                    "https://images.unsplash.com/photo-1632052999485-d748103abf98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  }
                  alt={featured.title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
                    Blog
                  </div>
                  <h2 className="text-3xl font-bold mb-4 hover:text-teal-600 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>Admin</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featured.published_at ? new Date(featured.published_at).toLocaleDateString() : "-"}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-teal-600 font-semibold">
                    O'qish <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
            </div>
          ) : null}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(featured ? 1 : 0).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow h-full">
                  <ImageWithFallback
                    src={
                      withAbsoluteUrl(baseUrl, post.cover_image) ||
                      "https://images.unsplash.com/photo-1655313719494-1d700d4aedd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    }
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      Blog
                    </div>
                    <h3 className="text-xl font-bold mb-3 hover:text-teal-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.published_at ? new Date(post.published_at).toLocaleDateString() : "-"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Yangi maqolalardan xabardor bo'ling</h2>
          <p className="text-gray-600 mb-8">
            Email manzilingizni qoldiring va eng so'nggi tibbiyot yangiliklari haqida birinchi bo'lib bilib oling
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email manzilingiz"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
            />
            <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
              Obuna bo'lish
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
