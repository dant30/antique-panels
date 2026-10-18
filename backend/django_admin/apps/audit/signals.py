from django.db.models.signals import post_save
from django.dispatch import receiver
from .models.models import AuditLog

@receiver(post_save, sender=AuditLog)
def audit_post_save(sender, instance, created, **kwargs):
    pass
