from django.contrib import admin
from .models.models import Vehicle

@admin.register(Vehicle)
class VehicleAdmin(admin.ModelAdmin):
    list_display = ['license_plate', 'make', 'model', 'year', 'era', 'color', 'owner', 'created_at']
    list_filter = ['era', 'make', 'year']
    search_fields = ['license_plate', 'vin', 'make', 'model', 'owner__first_name', 'owner__last_name']
