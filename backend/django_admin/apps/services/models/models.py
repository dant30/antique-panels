from django.db import models

class ServiceCategory(models.TextChoices):
    PANEL_BEATING = 'PANEL_BEATING', 'Panel Beating & Coachbuilding'
    PAINT_FINISH = 'PAINT_FINISH', 'Custom Spray Painting & Oven Baking'
    MECHANICAL = 'MECHANICAL', 'Mechanical Overhaul & Engine Rebuild'
    SANDBLASTING = 'SANDBLASTING', 'Media Blasting & Rust Stripping'
    UPHOLSTERY = 'UPHOLSTERY', 'Interior Leather Trimming & Wood Restoration'
    ELECTRICAL = 'ELECTRICAL', 'Vintage Wiring Loom & Electrical Restoration'
    ACCIDENT_REPAIR = 'ACCIDENT_REPAIR', 'Chassis Alignment & Major Accident Repair'
    TOWING_RECOVERY = 'TOWING_RECOVERY', '24/7 Breakdown & Flatbed Towing'

class WorkshopService(models.Model):
    name = models.CharField(max_length=200, help_text="e.g. Full Bare-Metal Rotisserie Restoration")
    slug = models.SlugField(max_length=200, unique=True)
    category = models.CharField(max_length=40, choices=ServiceCategory.choices, default=ServiceCategory.PANEL_BEATING)
    short_description = models.TextField(help_text="Concise overview for service cards")
    full_scope = models.TextField(help_text="Detailed workshop procedure and deliverables")
    estimated_duration_days = models.PositiveIntegerField(default=14, help_text="Estimated turnaround days")
    base_price = models.DecimalField(max_digits=12, decimal_places=2, default=0.00, help_text="Base rate in KES")
    hourly_rate = models.DecimalField(max_digits=10, decimal_places=2, default=2500.00, help_text="Hourly billing in KES")
    is_active = models.BooleanField(default=True)
    featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['category', 'name']

    def __str__(self):
        return f"{self.name} [{self.get_category_display()}]"
