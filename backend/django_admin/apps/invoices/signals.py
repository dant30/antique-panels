from django.db.models.signals import post_save
from django.dispatch import receiver
from .model.models import Invoice

@receiver(post_save, sender=Invoice)
def invoice_post_save(sender, instance, created, **kwargs):
    pass
