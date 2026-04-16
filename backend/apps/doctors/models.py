from django.db import models
from django.utils.text import slugify
from ckeditor.fields import RichTextField


class Doctor(models.Model):
    full_name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    position = models.CharField(max_length=255, blank=True)
    bio = RichTextField(blank=True)
    photo = models.ImageField(upload_to="doctors/", blank=True, null=True)
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["order", "id"]

    def save(self, *args, **kwargs):
        if not self.slug:
            base = slugify(self.full_name, allow_unicode=True)[:240] or "doctor"
            slug = base
            i = 2
            while Doctor.objects.filter(slug=slug).exclude(pk=self.pk).exists():
                slug = f"{base}-{i}"
                i += 1
            self.slug = slug
        super().save(*args, **kwargs)

    def __str__(self) -> str:
        return self.full_name

