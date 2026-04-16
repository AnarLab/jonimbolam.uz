from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import BlogPost
from .serializers import BlogPostDetailSerializer, BlogPostListSerializer


class BlogPostViewSet(viewsets.ReadOnlyModelViewSet):
    lookup_field = "slug"

    def get_queryset(self):
        return BlogPost.objects.filter(is_published=True).order_by("-published_at", "-created_at", "-id")

    def get_serializer_class(self):
        if self.action in ("retrieve",):
            return BlogPostDetailSerializer
        return BlogPostListSerializer

    @action(detail=False, methods=["get"], url_path="latest")
    def latest(self, request):
        post = self.get_queryset().first()
        if not post:
            return Response(None)
        return Response(BlogPostDetailSerializer(post).data)

