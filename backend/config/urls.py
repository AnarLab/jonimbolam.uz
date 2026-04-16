from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.sitemaps.views import sitemap
from django.urls import include, path

from apps.pages.sitemaps import StaticViewSitemap
from apps.blog.sitemaps import BlogPostSitemap
from apps.services.sitemaps import ServiceSitemap
from apps.doctors.sitemaps import DoctorSitemap

sitemaps = {
    "static": StaticViewSitemap,
    "blog": BlogPostSitemap,
    "services": ServiceSitemap,
    "doctors": DoctorSitemap,
}

urlpatterns = [
    path("admin/", admin.site.urls),
    path("ckeditor/", include("ckeditor_uploader.urls")),
    path("api/", include("apps.api.urls")),
    path("sitemap.xml", sitemap, {"sitemaps": sitemaps}, name="django.contrib.sitemaps.views.sitemap"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

