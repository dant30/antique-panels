from django.contrib import admin
from .model.models import Supplier

@admin.register(Supplier)
class SupplierAdmin(admin.ModelAdmin):
    list_display = ['name', 'contact_person', 'phone', 'email', 'lead_time_days', 'is_active']
    search_fields = ['name', 'contact_person', 'phone', 'email']
