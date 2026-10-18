from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from ..models.models import Notification

class NotificationAuditLogView(LoginRequiredMixin, ListView):
    model = Notification
    template_name = 'notifications/audit_log.html'
    context_object_name = 'notifications'
