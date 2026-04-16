from django.contrib.sitemaps import Sitemap

from .models import BlogPost


class BlogPostSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.7

    def items(self):
        return BlogPost.objects.filter(is_published=True)

    def location(self, obj: BlogPost):
        return f"/blog/{obj.slug}"

    def lastmod(self, obj: BlogPost):
        return obj.updated_at
