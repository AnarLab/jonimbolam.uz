from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("pages", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="SiteSettings",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("phone_primary", models.CharField(blank=True, default="", max_length=64)),
                ("phone_secondary", models.CharField(blank=True, default="", max_length=64)),
                ("email_primary", models.EmailField(blank=True, default="", max_length=254)),
                ("email_secondary", models.EmailField(blank=True, default="", max_length=254)),
                ("address_line1", models.CharField(blank=True, default="", max_length=255)),
                ("address_line2", models.CharField(blank=True, default="", max_length=255)),
                ("working_hours_line1", models.CharField(blank=True, default="", max_length=255)),
                ("working_hours_line2", models.CharField(blank=True, default="", max_length=255)),
                ("working_hours_line3", models.CharField(blank=True, default="", max_length=255)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
            options={},
        ),
    ]

