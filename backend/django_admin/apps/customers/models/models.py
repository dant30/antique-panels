from django.db import models
from django.conf import settings

class CustomerType(models.TextChoices):
    INDIVIDUAL = 'INDIVIDUAL', 'Private Collector / Enthusiast'
    CORPORATE = 'CORPORATE', 'Corporate Fleet / Organization'
    INSURANCE = 'INSURANCE', 'Insurance Partner'
    CLUB = 'CLUB', 'Vintage / Classic Car Club Member'

class Customer(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True, related_name='customer_profile')
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(blank=True, null=True)
    phone_number = models.CharField(max_length=30, help_text="e.g. +254 721 757 776")
    alternative_phone = models.CharField(max_length=30, blank=True, null=True)
    customer_type = models.CharField(max_length=30, choices=CustomerType.choices, default=CustomerType.INDIVIDUAL)
    id_or_passport = models.CharField(max_length=50, blank=True, null=True)
    kra_pin = models.CharField(max_length=30, blank=True, null=True, help_text="Kenya Revenue Authority PIN for Tax Invoice")
    address = models.TextField(blank=True, null=True)
    city = models.CharField(max_length=100, default='Nairobi')
    is_vip = models.BooleanField(default=False)
    notes = models.TextField(blank=True, null=True, help_text="Client vehicle preferences, restoration history notes")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['last_name', 'first_name']

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.phone_number})"
