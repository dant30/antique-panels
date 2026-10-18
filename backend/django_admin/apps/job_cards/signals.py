from django.db.models.signals import post_save
from django.dispatch import receiver
from .models.models import JobCard

@receiver(post_save, sender=JobCard)
def job_card_post_save(sender, instance, created, **kwargs):
    pass
