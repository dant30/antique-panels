from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from ..models.models import InventoryItem

class LowStockAlertView(LoginRequiredMixin, ListView):
    model = InventoryItem
    template_name = 'inventory/low_stock.html'
    context_object_name = 'low_stock_items'

    def get_queryset(self):
        return InventoryItem.objects.filter(is_active=True)
