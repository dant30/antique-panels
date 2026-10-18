from django.contrib import admin
from .models.models import WorkshopService

@admin.register(WorkshopService)
class WorkshopServiceAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'base_price', 'hourly_rate', 'estimated_duration_days', 'is_active', 'featured']
    list_filter = ['category', 'is_active', 'featured']
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ['name', 'short_description', 'full_scope']
