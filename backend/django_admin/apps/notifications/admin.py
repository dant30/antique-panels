from django.contrib import admin
from .models.models import Notification

@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    list_display = ['recipient_identifier', 'channel', 'subject', 'status', 'created_at', 'sent_at']
    list_filter = ['channel', 'status', 'created_at']
    search_fields = ['recipient_identifier', 'subject', 'body']
