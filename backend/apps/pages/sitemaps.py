from django.contrib.sitemaps import Sitemap


class StaticViewSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.6

    def items(self):
        return ["about", "contact", "services", "doctors", "blog"]

    def location(self, item):
        # Эти маршруты относятся к фронтенду; sitemap отдаём из Django
        if item == "blog":
            return "/blog"
        return f"/{item}"

