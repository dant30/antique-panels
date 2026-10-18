from django.contrib import admin
from .models.models import GeneratedReport

@admin.register(GeneratedReport)
class GeneratedReportAdmin(admin.ModelAdmin):
    list_display = ['title', 'report_type', 'generated_at']
    list_filter = ['report_type', 'generated_at']
    search_fields = ['title']
