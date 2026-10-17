from django.contrib import admin
from .model.models import AuditLog

@admin.register(AuditLog)
class AuditLogAdmin(admin.ModelAdmin):
    list_display = ['timestamp', 'action', 'target_entity', 'target_id', 'user', 'ip_address']
    list_filter = ['action', 'target_entity', 'timestamp']
    search_fields = ['action', 'target_entity', 'target_id']
