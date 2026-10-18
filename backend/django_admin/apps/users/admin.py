from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models.models import User

@admin.register(User)
class UserAdmin(BaseUserAdmin):
    list_display = ['username', 'email', 'first_name', 'last_name', 'role', 'is_active_technician', 'phone_number', 'is_staff']
    list_filter = ['role', 'is_active_technician', 'is_staff', 'is_active']
    fieldsets = BaseUserAdmin.fieldsets + (
        ('Antique Panels Workshop Info', {
            'fields': ('role', 'phone_number', 'badge_number', 'specialties', 'is_active_technician', 'hourly_labor_rate')
        }),
    )
    search_fields = ['username', 'first_name', 'last_name', 'email', 'badge_number', 'phone_number']
