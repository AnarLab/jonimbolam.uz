from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView

from .models import AboutPage, FAQItem, SiteSettings
from .serializers import AboutPageSerializer, FAQItemSerializer, SiteSettingsSerializer


class AboutPageView(APIView):
    def get(self, request):
        page = AboutPage.load()
        return Response(AboutPageSerializer(page).data)


class FAQListView(ListAPIView):
    serializer_class = FAQItemSerializer

    def get_queryset(self):
        return FAQItem.objects.filter(is_active=True).order_by("order", "id")


class SiteSettingsView(APIView):
    def get(self, request):
        settings_obj = SiteSettings.load()
        return Response(SiteSettingsSerializer(settings_obj).data)

