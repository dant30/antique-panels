from django.db.models.signals import post_save
from django.dispatch import receiver
from .model.models import Payment

@receiver(post_save, sender=Payment)
def payment_post_save(sender, instance, created, **kwargs):
    pass
