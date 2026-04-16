from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("pages", "0002_site_settings"),
    ]

    operations = [
        migrations.AddField(
            model_name="sitesettings",
            name="about_hero_subtitle",
            field=models.TextField(blank=True, default=""),
        ),
        migrations.AddField(
            model_name="sitesettings",
            name="about_hero_title",
            field=models.CharField(blank=True, default="", max_length=255),
        ),
        migrations.AddField(
            model_name="sitesettings",
            name="blog_hero_subtitle",
            field=models.TextField(blank=True, default=""),
        ),
        migrations.AddField(
            model_name="sitesettings",
            name="blog_hero_title",
            field=models.CharField(blank=True, default="", max_length=255),
        ),
        migrations.AddField(
            model_name="sitesettings",
            name="contact_hero_subtitle",
            field=models.TextField(blank=True, default=""),
        ),
        migrations.AddField(
            model_name="sitesettings",
            name="contact_hero_title",
            field=models.CharField(blank=True, default="", max_length=255),
        ),
        migrations.AddField(
            model_name="sitesettings",
            name="doctors_hero_subtitle",
            field=models.TextField(blank=True, default=""),
        ),
        migrations.AddField(
            model_name="sitesettings",
            name="doctors_hero_title",
            field=models.CharField(blank=True, default="", max_length=255),
        ),
        migrations.AddField(
            model_name="sitesettings",
            name="emergency_phone",
            field=models.CharField(blank=True, default="", max_length=64),
        ),
        migrations.AddField(
            model_name="sitesettings",
            name="emergency_subtitle",
            field=models.CharField(blank=True, default="", max_length=255),
        ),
        migrations.AddField(
            model_name="sitesettings",
            name="emergency_title",
            field=models.CharField(blank=True, default="", max_length=255),
        ),
        migrations.AddField(
            model_name="sitesettings",
            name="home_hero_subtitle",
            field=models.TextField(blank=True, default=""),
        ),
        migrations.AddField(
            model_name="sitesettings",
            name="home_hero_title",
            field=models.CharField(blank=True, default="", max_length=255),
        ),
        migrations.AddField(
            model_name="sitesettings",
            name="services_hero_subtitle",
            field=models.TextField(blank=True, default=""),
        ),
        migrations.AddField(
            model_name="sitesettings",
            name="services_hero_title",
            field=models.CharField(blank=True, default="", max_length=255),
        ),
    ]

