from django.db.models.signals import post_save
from django.dispatch import receiver
from .models.models import GeneratedReport

@receiver(post_save, sender=GeneratedReport)
def report_post_save(sender, instance, created, **kwargs):
    pass
