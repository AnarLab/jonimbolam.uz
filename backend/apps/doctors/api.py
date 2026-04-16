from rest_framework import viewsets

from .models import Doctor
from .serializers import DoctorSerializer


class DoctorViewSet(viewsets.ReadOnlyModelViewSet):
    lookup_field = "slug"
    serializer_class = DoctorSerializer

    def get_queryset(self):
        return Doctor.objects.filter(is_active=True).order_by("order", "id")

