from django.db import models

class Supplier(models.Model):
    name = models.CharField(max_length=200, help_text="e.g. Glasurit Paint Kenya, British Car Parts Ltd")
    contact_person = models.CharField(max_length=150, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    phone = models.CharField(max_length=30)
    address = models.TextField(blank=True, null=True)
    kra_pin = models.CharField(max_length=30, blank=True, null=True)
    lead_time_days = models.PositiveIntegerField(default=3, help_text="Average lead time in business days")
    payment_terms = models.CharField(max_length=100, default='Net 30 Days')
    notes = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return f"{self.name} ({self.phone})"
