from django.contrib import admin
from .models.models import Customer

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'phone_number', 'email', 'customer_type', 'is_vip', 'city', 'created_at']
    list_filter = ['customer_type', 'is_vip', 'city']
    search_fields = ['first_name', 'last_name', 'phone_number', 'email', 'kra_pin']
