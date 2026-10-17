from django.db import models

class ItemCategory(models.TextChoices):
    RAW_METAL = 'RAW_METAL', 'Sheet Metal, Tubes & Steel Panels'
    PAINT_MATERIAL = 'PAINT_MATERIAL', 'Primers, Basecoats, Clearcoats & Hardners'
    FASTENERS = 'FASTENERS', 'Vintage Bolts, Rivets & Hardware'
    MECHANICAL_PARTS = 'MECHANICAL_PARTS', 'Engine, Suspension & Brakes'
    ELECTRICAL_PARTS = 'ELECTRICAL_PARTS', 'Wiring, Relays, Gauges & Lights'
    TRIM_UPHOLSTERY = 'TRIM_UPHOLSTERY', 'Leather Hides, Carpets & Headlining'
    CONSUMABLES = 'CONSUMABLES', 'Abrasives, Sanding Discs, Welding Gas & Masking'

class InventoryItem(models.Model):
    sku = models.CharField(max_length=50, unique=True, help_text="Stock Keeping Unit")
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=40, choices=ItemCategory.choices, default=ItemCategory.CONSUMABLES)
    description = models.TextField(blank=True, null=True)
    quantity_on_hand = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    unit_of_measure = models.CharField(max_length=20, default='pcs', help_text="e.g. pcs, liters, meters, kg")
    reorder_threshold = models.DecimalField(max_digits=10, decimal_places=2, default=5.00)
    cost_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00, help_text="Cost in KES")
    selling_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00, help_text="Chargeable price in KES")
    location_bin = models.CharField(max_length=50, default='Bin A-1', help_text="Warehouse / Bay shelf shelf location")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['category', 'name']

    def __str__(self):
        return f"[{self.sku}] {self.name} ({self.quantity_on_hand} {self.unit_of_measure})"

    @property
    def is_low_stock(self):
        return self.quantity_on_hand <= self.reorder_threshold
