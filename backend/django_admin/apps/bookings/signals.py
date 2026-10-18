from django.db.models.signals import post_save
from django.dispatch import receiver
from .models.models import Booking

@receiver(post_save, sender=Booking)
def booking_post_save(sender, instance, created, **kwargs):
    if created:
        pass
