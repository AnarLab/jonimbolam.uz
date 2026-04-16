from django.contrib.sitemaps import Sitemap

from .models import Doctor


class DoctorSitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.6

    def items(self):
        return Doctor.objects.filter(is_active=True)

    def location(self, obj: Doctor):
        return f"/doctors/{obj.slug}"

    def lastmod(self, obj: Doctor):
        return obj.updated_at
