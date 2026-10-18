from django.db import models
from apps.customers.models.models import Customer

class VehicleEra(models.TextChoices):
    PRE_WAR = 'PRE_WAR', 'Pre-War (Pre-1945)'
    CLASSIC_POSTWAR = 'CLASSIC_POSTWAR', 'Post-War Classic (1946-1965)'
    MUSCLE_PONY = 'MUSCLE_PONY', 'Golden Muscle & Sports (1966-1980)'
    MODERN_CLASSIC = 'MODERN_CLASSIC', 'Youngtimer / Modern Classic (1981-2000)'
    CONTEMPORARY = 'CONTEMPORARY', 'Contemporary Performance / Exotic (2001+)'

class Vehicle(models.Model):
    owner = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='vehicles')
    license_plate = models.CharField(max_length=20, unique=True, help_text="e.g. KAA 001A or Vintage Plate")
    vin = models.CharField(max_length=50, blank=True, null=True, unique=True, help_text="Chassis or VIN Number")
    make = models.CharField(max_length=100, help_text="e.g. Jaguar, Mercedes-Benz, Ford, Land Rover")
    model = models.CharField(max_length=100, help_text="e.g. E-Type Series 1, W113 Pagoda, Mustang Fastback")
    year = models.PositiveIntegerField()
    era = models.CharField(max_length=30, choices=VehicleEra.choices, default=VehicleEra.CLASSIC_POSTWAR)
    color = models.CharField(max_length=50, default='British Racing Green')
    original_paint_code = models.CharField(max_length=50, blank=True, null=True)
    current_mileage = models.PositiveIntegerField(default=0, help_text="Recorded Odometer Reading")
    engine_displacement = models.CharField(max_length=50, blank=True, null=True, help_text="e.g. 3.8L Inline-6, 4.7L V8")
    transmission = models.CharField(max_length=50, default='Manual 4-Speed')
    fuel_type = models.CharField(max_length=30, default='Petrol')
    condition_rating = models.CharField(max_length=50, default='Grade 3 (Good Driver)', help_text="Hagerty / Concours Scale (1-5)")
    notes = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['make', 'model', '-year']

    def __str__(self):
        return f"{self.year} {self.make} {self.model} [{self.license_plate}]"
