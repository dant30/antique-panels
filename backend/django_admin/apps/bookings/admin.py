from django.contrib import admin
from .models.models import Booking

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ['reference_number', 'vehicle_registration', 'vehicle_make', 'vehicle_model', 'preferred_date', 'preferred_time', 'needs_towing', 'status', 'created_at']
    list_filter = ['status', 'needs_towing', 'preferred_date']
    search_fields = ['reference_number', 'vehicle_registration', 'guest_name', 'guest_phone', 'guest_email']
