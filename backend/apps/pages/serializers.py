from rest_framework import serializers

from .models import AboutPage, FAQItem, SiteSettings


class AboutPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutPage
        fields = ("title", "content", "updated_at")


class FAQItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQItem
        fields = ("id", "question", "answer", "order")


class SiteSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSettings
        fields = (
            "home_hero_title",
            "home_hero_subtitle",
            "about_hero_title",
            "about_hero_subtitle",
            "services_hero_title",
            "services_hero_subtitle",
            "doctors_hero_title",
            "doctors_hero_subtitle",
            "blog_hero_title",
            "blog_hero_subtitle",
            "contact_hero_title",
            "contact_hero_subtitle",
            "phone_primary",
            "phone_secondary",
            "email_primary",
            "email_secondary",
            "address_line1",
            "address_line2",
            "working_hours_line1",
            "working_hours_line2",
            "working_hours_line3",
            "emergency_title",
            "emergency_subtitle",
            "emergency_phone",
            "updated_at",
        )

