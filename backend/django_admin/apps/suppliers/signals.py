from django.db.models.signals import post_save
from django.dispatch import receiver
from .model.models import Supplier

@receiver(post_save, sender=Supplier)
def supplier_post_save(sender, instance, created, **kwargs):
    pass
