from django.contrib import admin
from .models.models import InventoryItem

@admin.register(InventoryItem)
class InventoryItemAdmin(admin.ModelAdmin):
    list_display = ['sku', 'name', 'category', 'quantity_on_hand', 'unit_of_measure', 'reorder_threshold', 'selling_price', 'location_bin', 'is_active']
    list_filter = ['category', 'is_active']
    search_fields = ['sku', 'name', 'location_bin']
