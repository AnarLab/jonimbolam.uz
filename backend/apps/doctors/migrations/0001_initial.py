from django.db import migrations, models
import ckeditor.fields


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Doctor",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("full_name", models.CharField(max_length=255)),
                ("slug", models.SlugField(blank=True, max_length=255, unique=True)),
                ("position", models.CharField(blank=True, max_length=255)),
                ("bio", ckeditor.fields.RichTextField(blank=True)),
                ("photo", models.ImageField(blank=True, null=True, upload_to="doctors/")),
                ("is_active", models.BooleanField(default=True)),
                ("order", models.PositiveIntegerField(default=0)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
            options={"ordering": ["order", "id"]},
        ),
    ]

