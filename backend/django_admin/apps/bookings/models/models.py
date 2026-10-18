import uuid
from django.db import models
from apps.customers.models.models import Customer
from apps.vehicles.models.models import Vehicle
from apps.services.models.models import WorkshopService

class BookingStatus(models.TextChoices):
    PENDING = 'PENDING', 'Pending Review'
    CONFIRMED = 'CONFIRMED', 'Confirmed & Reserved'
    IN_PROGRESS = 'IN_PROGRESS', 'Vehicle Arrived & Work Started'
    COMPLETED = 'COMPLETED', 'Intake Completed'
    CANCELLED = 'CANCELLED', 'Cancelled'

class Booking(models.Model):
    reference_number = models.CharField(max_length=30, unique=True, editable=False)
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True, blank=True, related_name='bookings')
    vehicle = models.ForeignKey(Vehicle, on_delete=models.SET_NULL, null=True, blank=True, related_name='bookings')
    # Direct intake details from web form
    guest_name = models.CharField(max_length=150, blank=True, null=True)
    guest_phone = models.CharField(max_length=30, blank=True, null=True)
    guest_email = models.EmailField(blank=True, null=True)
    vehicle_registration = models.CharField(max_length=30)
    vehicle_make = models.CharField(max_length=100)
    vehicle_model = models.CharField(max_length=100)
    vehicle_year = models.PositiveIntegerField(null=True, blank=True)
    service = models.ForeignKey(WorkshopService, on_delete=models.SET_NULL, null=True, blank=True, related_name='bookings')
    service_name_text = models.CharField(max_length=200, help_text="Raw requested service if chosen custom")
    preferred_date = models.DateField()
    preferred_time = models.CharField(max_length=50, default='08:00 AM')
    needs_towing = models.BooleanField(default=False)
    towing_pickup_location = models.CharField(max_length=255, blank=True, null=True)
    status = models.CharField(max_length=30, choices=BookingStatus.choices, default=BookingStatus.PENDING)
    client_notes = models.TextField(blank=True, null=True)
    internal_notes = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-preferred_date', '-created_at']

    def save(self, *args, **kwargs):
        if not self.reference_number:
            self.reference_number = f"AP-{uuid.uuid4().hex[:6].upper()}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.reference_number} - {self.vehicle_registration} ({self.status})"
