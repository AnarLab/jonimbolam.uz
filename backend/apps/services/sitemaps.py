from django.contrib.sitemaps import Sitemap

from .models import Service


class ServiceSitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.7

    def items(self):
        return Service.objects.filter(is_active=True)

    def location(self, obj: Service):
        return f"/services/{obj.slug}"

    def lastmod(self, obj: Service):
        return obj.updated_at
