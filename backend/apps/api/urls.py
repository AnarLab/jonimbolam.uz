from django.urls import include, path
from rest_framework.routers import DefaultRouter

from apps.blog.api import BlogPostViewSet
from apps.doctors.api import DoctorViewSet
from apps.pages.api import AboutPageView, FAQListView, SiteSettingsView
from apps.services.api import ServiceViewSet
from apps.forms.api import ContactFormView

router = DefaultRouter()
router.register(r"blog", BlogPostViewSet, basename="blog")
router.register(r"services", ServiceViewSet, basename="services")
router.register(r"doctors", DoctorViewSet, basename="doctors")

urlpatterns = [
    path("", include(router.urls)),
    path("pages/about/", AboutPageView.as_view(), name="about-page"),
    path("pages/faq/", FAQListView.as_view(), name="faq-list"),
    path("pages/settings/", SiteSettingsView.as_view(), name="site-settings"),
    path("forms/contact/", ContactFormView.as_view(), name="contact-form"),
]

