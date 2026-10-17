from django.db import models
from django.contrib.auth.models import AbstractUser

class UserRole(models.TextChoices):
    ADMIN = 'ADMIN', 'Administrator'
    WORKSHOP_MANAGER = 'WORKSHOP_MANAGER', 'Workshop Manager'
    LEAD_TECHNICIAN = 'LEAD_TECHNICIAN', 'Lead Restoration Technician'
    PAINTER = 'PAINTER', 'Master Painter / Refinisher'
    PANEL_BEATER = 'PANEL_BEATER', 'Metal Fabricator / Panel Beater'
    MECHANIC = 'MECHANIC', 'Mechanical Specialist'
    RECEPTIONIST = 'RECEPTIONIST', 'Service Advisor / Intake'
    CUSTOMER = 'CUSTOMER', 'Vehicle Owner'

class User(AbstractUser):
    role = models.CharField(max_length=30, choices=UserRole.choices, default=UserRole.CUSTOMER)
    phone_number = models.CharField(max_length=20, blank=True, null=True, help_text="e.g. +254 721 757 776")
    badge_number = models.CharField(max_length=20, blank=True, null=True, unique=True)
    specialties = models.JSONField(default=list, blank=True, help_text="Restoration specialties e.g. Coachbuilding, Lacquer")
    is_active_technician = models.BooleanField(default=False)
    hourly_labor_rate = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-date_joined']

    def __str__(self):
        return f"{self.get_full_name() or self.username} ({self.get_role_display()})"
