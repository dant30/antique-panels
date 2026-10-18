from django.db.models.signals import post_save
from django.dispatch import receiver
from .models.models import InventoryItem

@receiver(post_save, sender=InventoryItem)
def inventory_post_save(sender, instance, created, **kwargs):
    pass
