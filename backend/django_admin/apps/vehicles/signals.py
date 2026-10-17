from django.db.models.signals import pre_save
from django.dispatch import receiver
from .model.models import Vehicle
from .services.services import VehicleService

@receiver(pre_save, sender=Vehicle)
def set_vehicle_era(sender, instance, **kwargs):
    if instance.year and not instance.era:
        instance.era = VehicleService.infer_era_from_year(instance.year)
