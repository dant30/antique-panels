from django.db import models
from django.conf import settings

class AuditLog(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
    action = models.CharField(max_length=100, help_text="e.g. STAGE_ADVANCE, INVOICE_ISSUE, PART_ADJUST")
    target_entity = models.CharField(max_length=100)
    target_id = models.CharField(max_length=50)
    details = models.JSONField(default=dict, blank=True)
    ip_address = models.GenericIPAddressField(blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-timestamp']

    def __str__(self):
        return f"{self.timestamp} | {self.action} on {self.target_entity}:{self.target_id}"
