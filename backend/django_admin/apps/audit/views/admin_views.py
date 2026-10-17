from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from ..model.models import AuditLog

class SystemAuditFeedView(LoginRequiredMixin, ListView):
    model = AuditLog
    template_name = 'audit/system_feed.html'
    context_object_name = 'audit_logs'
