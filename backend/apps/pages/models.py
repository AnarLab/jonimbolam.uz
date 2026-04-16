from django.db import models
from ckeditor.fields import RichTextField


class SingletonModel(models.Model):
    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        self.pk = 1
        super().save(*args, **kwargs)

    @classmethod
    def load(cls):
        obj, _ = cls.objects.get_or_create(pk=1)
        return obj


class AboutPage(SingletonModel):
    title = models.CharField(max_length=255, default="О нас")
    content = RichTextField(blank=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return "About page"


class FAQItem(models.Model):
    question = models.CharField(max_length=255)
    answer = RichTextField(blank=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["order", "id"]

    def __str__(self) -> str:
        return self.question


class SiteSettings(SingletonModel):
    # Hero (shared-ish)
    home_hero_title = models.CharField(max_length=255, blank=True, default="")
    home_hero_subtitle = models.TextField(blank=True, default="")

    about_hero_title = models.CharField(max_length=255, blank=True, default="")
    about_hero_subtitle = models.TextField(blank=True, default="")

    services_hero_title = models.CharField(max_length=255, blank=True, default="")
    services_hero_subtitle = models.TextField(blank=True, default="")

    doctors_hero_title = models.CharField(max_length=255, blank=True, default="")
    doctors_hero_subtitle = models.TextField(blank=True, default="")

    blog_hero_title = models.CharField(max_length=255, blank=True, default="")
    blog_hero_subtitle = models.TextField(blank=True, default="")

    contact_hero_title = models.CharField(max_length=255, blank=True, default="")
    contact_hero_subtitle = models.TextField(blank=True, default="")

    # Contact / footer
    phone_primary = models.CharField(max_length=64, blank=True, default="")
    phone_secondary = models.CharField(max_length=64, blank=True, default="")
    email_primary = models.EmailField(blank=True, default="")
    email_secondary = models.EmailField(blank=True, default="")
    address_line1 = models.CharField(max_length=255, blank=True, default="")
    address_line2 = models.CharField(max_length=255, blank=True, default="")
    working_hours_line1 = models.CharField(max_length=255, blank=True, default="")
    working_hours_line2 = models.CharField(max_length=255, blank=True, default="")
    working_hours_line3 = models.CharField(max_length=255, blank=True, default="")

    # Emergency block
    emergency_title = models.CharField(max_length=255, blank=True, default="")
    emergency_subtitle = models.CharField(max_length=255, blank=True, default="")
    emergency_phone = models.CharField(max_length=64, blank=True, default="")
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return "Site settings"

