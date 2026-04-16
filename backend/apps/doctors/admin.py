from django.contrib import admin

from .models import Doctor


@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ("full_name", "position", "is_active", "order", "updated_at")
    list_filter = ("is_active",)
    search_fields = ("full_name", "slug", "position")
    ordering = ("order", "id")
    prepopulated_fields = {"slug": ("full_name",)}

